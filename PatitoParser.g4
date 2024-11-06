grammar PatitoParser;

options {
	tokenVocab = PatitoLexer;
}

programa:
	PROGRAM ID { 
		// Sematic action #1
		this.currType = $PROGRAM.text;
		this.currFunc = $ID.text;
		this.FunctionDir.addFunction(this.currFunc, this.currType);
	} SEMICOLON tiene_vars lista_funcs INICIO cuerpo FIN;

tiene_vars: vars |;
vars: VARS lista_vars mas_vars;
mas_vars: lista_vars |;
lista_vars:
	lista_ids COLON tipo {
		// Semantic action #2
		this.currType = $tipo.text;
		let var_list = $lista_ids.text;
		let var_list_array = var_list.split(",");
		var_list_array.forEach((_var) => {
			this.FunctionDir.functions[this.currFunc].variables.addVar(_var, this.currType)
		});
	} SEMICOLON;
lista_ids: ID mas_ids;
mas_ids: COMMA ID mas_ids |;

lista_funcs: funcs lista_funcs |;
funcs:
	NULA ID {
		// Semantic action #3
		this.currType = $NULA.text;
		this.currFunc = $ID.text;

		if(this.FunctionDir.hasFunction(this.currFunc)){
			console.error(`La función ${this.currFunc} ya está definida`);
		}

		this.FunctionDir.addFunction(this.currFunc, this.currType);
	} LPAR lista_params RPAR LBRACE tiene_vars cuerpo RBRACE SEMICOLON;
lista_params: param mas_params |;
mas_params: COMMA param mas_params |;
param:
	ID COLON tipo { 
		// Semantic action #4
		this.currType = $tipo.text;
		this.currVar = $ID.text;
		if(this.FunctionDir.functions[this.currFunc].variables.hasVariable(this.currVar)){
			console.error(`La función ${this.currVar} ya está definida`);
		}
		else {
			this.FunctionDir.functions[this.currFunc].variables.addVar(this.currVar, this.currType)
		}
	};

tipo: ENTERO | FLOTANTE;

cuerpo: LBRACE lista_estatutos RBRACE;
lista_estatutos: estatuto lista_estatutos |;
estatuto: asigna | condicion | ciclo | llamada | imprime;

asigna:
	ID {
		this.currVar = $ID.text;
		this.OperandStack.push(this.FunctionDir.functions[this.currFunc].variables.variables[this.currVar]);
	} ASSIGN {this.OperatorStack.push($ASSIGN.text)} expresion {
			if(this.OperatorStack.top() == '=' ){
				let leftOperand = this.OperandStack.pop();
				let resultVariable =  this.OperandStack.pop();
				let operator = this.OperatorStack.pop();
				this.QuadruplesQueue.addQuadruple(operator, leftOperand, null, resultVariable);
			}
		} SEMICOLON;

condicion:
	SI LPAR expresion RPAR {
		const expResult = this.OperandStack.pop();
		if(expResult.type != 'entero'){
			console.error("Expected integer expression result on if statement")
		} else {
			this.QuadruplesQueue.addQuadruple('gotoF', expResult, null, undefined);
			this.JumpStack.push(this.QuadruplesQueue.size() - 1);
		}
	} cuerpo sino* SEMICOLON {
		this.QuadruplesQueue.fillJump(this.JumpStack.pop());
	};
sino:
	SINO {
		this.QuadruplesQueue.addQuadruple('goto', null, null, undefined);
		this.QuadruplesQueue.fillJump(this.JumpStack.pop());
		this.JumpStack.push(this.QuadruplesQueue.size() - 1);
	} cuerpo;

ciclo:
	MIENTRAS {
		this.JumpStack.push(this.QuadruplesQueue.size());
	} LPAR expresion RPAR {
		const expResult = this.OperandStack.pop();
		if(expResult.type != 'entero'){
			console.error("Expected integer expression result on if statement")
		} else {
			this.QuadruplesQueue.addQuadruple('gotoF', expResult, null, undefined);
			this.JumpStack.push(this.QuadruplesQueue.size() - 1);
		}
	} HAZ cuerpo SEMICOLON {
		const end = this.JumpStack.pop();
		const _return = this.JumpStack.pop();
		this.QuadruplesQueue.addQuadruple('goto', null, null, _return);
		this.QuadruplesQueue.fillJump(end);
	};

llamada: ID LPAR lista_expresiones RPAR SEMICOLON;
lista_expresiones: expresion mas_expresiones |;
mas_expresiones: COMMA expresion mas_expresiones |;

imprime: ESCRIBE LPAR lista_impresiones RPAR SEMICOLON;
lista_impresiones: imprimibles mas_impresiones |;
mas_impresiones: COMMA imprimibles mas_impresiones |;
imprimibles:
	expresion {
		this.QuadruplesQueue.addQuadruple('imprime', null, null, this.OperandStack.pop());
	}
	| LETRERO {
		this.QuadruplesQueue.addQuadruple('imprime', null, null, $LETRERO.text);
	};

expresion:
	exp comparador {this.OperatorStack.push($comparador.text)} exp {
		if(
			this.OperatorStack.top() == '<' 
			|| this.OperatorStack.top() == '>' 
			|| this.OperatorStack.top() == '==' 
			|| this.OperatorStack.top() == '!='
			)
		{
			let rightOperand =  this.OperandStack.pop();
			let leftOperand = this.OperandStack.pop();
			let operator = this.OperatorStack.pop();
			let resultType = this.SematicCube[operator][leftOperand.type][rightOperand.type];
			let resultVariable = this.QuadruplesQueue.newTempVariable(resultType);
			this.OperandStack.push(resultVariable);
			this.QuadruplesQueue.addQuadruple(operator, leftOperand, rightOperand, resultVariable);
		}
	}
	| exp;
comparador: LT | GT | EQ | NEQ;

exp:
	termino {
		if(this.OperatorStack.top() == '+' || this.OperatorStack.top() == '-'){
			let rightOperand =  this.OperandStack.pop();
			let leftOperand = this.OperandStack.pop();
			let operator = this.OperatorStack.pop();
			let resultType = this.SematicCube[operator][leftOperand.type][rightOperand.type];
			let resultVariable = this.QuadruplesQueue.newTempVariable(resultType);
			this.OperandStack.push(resultVariable);
			this.QuadruplesQueue.addQuadruple(operator, leftOperand, rightOperand, resultVariable);
		}
	} operaciones_signo*;

operaciones_signo:
	PLUS {this.OperatorStack.push($PLUS.text)} exp
	| MINUS {this.OperatorStack.push($MINUS.text)} exp;

termino:
	factor {
		if(this.OperatorStack.top() == '*' || this.OperatorStack.top() == '/'){
			let rightOperand =  this.OperandStack.pop();
			let leftOperand = this.OperandStack.pop();
			let operator = this.OperatorStack.pop();
			let resultType = this.SematicCube[operator][leftOperand.type][rightOperand.type];
			let resultVariable = this.QuadruplesQueue.newTempVariable(resultType);
			this.OperandStack.push(resultVariable);
			this.QuadruplesQueue.addQuadruple(operator, leftOperand, rightOperand, resultVariable);
		}
	} operaciones_factor*;

operaciones_factor:
	MULT {this.OperatorStack.push($MULT.text)} termino
	| DIV {this.OperatorStack.push($DIV.text)} termino;

factor:
	LPAR {this.OperatorStack.push($LPAR.text);} expresion {
			if(this.OperatorStack.top() == "("){
				this.OperatorStack.pop();
			} else {
				console.error("Invalid expression inside parenthesis");
			}
		} RPAR
	| operadores_signo operandos_factor {
		if($operadores_signo.text == '-'){
			this.currVar = '-' + $operandos_factor.text;
		} else {
			this.currVar = $operandos_factor.text;
		}

		const REGEX_ID = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
		const REGEX_CTE_ENT = /^[0-9]+$/;
		const REGEX_CTE_FLOT = /^[0-9]+\.[0-9]+$/;

		if($operandos_factor.text.match(REGEX_ID)) {
			this.OperandStack.push(this.FunctionDir.functions[this.currFunc].variables.variables[this.currVar]);
		} else if($operandos_factor.text.match(REGEX_CTE_ENT)) {
			this.OperandStack.push({ name: this.currVar, type: 'entero' });
		} else if($operandos_factor.text.match(REGEX_CTE_FLOT)) {
			this.OperandStack.push({ name: this.currVar, type: 'flotante' });
		} 
	};
operadores_signo: PLUS | MINUS |;
operandos_factor: ID | cte;

cte: CTE_ENT | CTE_FLOT;