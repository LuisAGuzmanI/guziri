grammar PatitoParser;

options {
	tokenVocab = PatitoLexer;
}

programa:
	{
		// Semantic action #1.1
		this.QuadruplesQueue.addQuadruple(11, null, null, undefined);
	} PROGRAM ID { 
		// Sematic action #1.2
		this.currType = $PROGRAM.text;
		this.currFunc = 'global';
		this.FunctionDir.addFunction(this.currFunc, this.currType);
	} SEMICOLON tiene_vars lista_funcs INICIO {
		// Semantic action #1.4
		this.QuadruplesQueue.items[0].result = this.QuadruplesQueue.size();
	} cuerpo FIN {
		// Semantic action #1.5
		this.FunctionDir.releaseVarTable(this.currFunc);
	};

tiene_vars: vars |;
vars: VARS lista_vars mas_vars;
mas_vars: lista_vars |;
lista_vars:
	lista_ids COLON tipo {
		// Semantic action #1.3
		this.currType = $tipo.text;
		let var_list = $lista_ids.text;
		let var_list_array = var_list.split(",");
		var_list_array.forEach((_var) => {
			this.FunctionDir.addVar(_var, this.currType, this.currFunc);
		});
	} SEMICOLON;
lista_ids: ID mas_ids;
mas_ids: COMMA ID mas_ids |;

lista_funcs: funcs lista_funcs |;
funcs:
	NULA ID {
		// Semantic action #6.1.1
		this.currType = $NULA.text;
		this.currFunc = $ID.text;

		if(this.FunctionDir.hasFunction(this.currFunc)){
			console.error(`La función ${this.currFunc} ya está definida`);
		}

		this.FunctionDir.addFunction(this.currFunc, this.currType);
	} LPAR lista_params RPAR LBRACE tiene_vars {
		// Semantic action #6.1.3
		this.FunctionDir.functions[this.currFunc].start = this.QuadruplesQueue.size();
	} cuerpo RBRACE SEMICOLON {
		// Semantic action #6.1.4
		this.FunctionDir.releaseVarTable(this.currFunc);
		this.currFunc = 'global';
		this.QuadruplesQueue.addQuadruple(14, null, null, null);
	};
lista_params: param mas_params |;
mas_params: COMMA param mas_params |;
param:
	ID COLON tipo { 
		// Semantic action #6.1.2
		this.currType = $tipo.text;
		this.currVar = $ID.text;
		if(this.FunctionDir.hasVariable(this.currFunc, this.currVar)){
			console.error(`La función ${this.currVar} ya está definida`);
		}
		else {
			let parameterDir = this.FunctionDir.addVar(this.currVar, this.currType, this.currFunc);
			this.FunctionDir.addParameter(parameterDir, this.currFunc)
		}
	};

tipo: ENTERO | FLOTANTE;

cuerpo: LBRACE lista_estatutos RBRACE;
lista_estatutos: estatuto lista_estatutos |;
estatuto: asigna | condicion | ciclo | llamada | imprime;

asigna:
	ID {
		// Semantic action #2.1
		this.currVar = $ID.text;
		this.OperandStack.push(this.FunctionDir.functions[this.currFunc].variables[this.currVar]);
	} ASSIGN {
		// Semantic action #2.2
		this.OperatorStack.push($ASSIGN.text)
	} expresion {
		// Semantic action #2.12
		if(this.OperatorStack.top() == '=' ){
			let leftOperand = this.OperandStack.pop();
			let resultVariable =  this.OperandStack.pop();
			let operator = this.OperatorStack.pop();
			this.QuadruplesQueue.addQuadruple(this.SematicCube[operator]['code'], leftOperand, null, resultVariable);
		}
	} SEMICOLON;

condicion:
	SI LPAR expresion RPAR {
		// Semantic action #4.1
		const expResult = this.OperandStack.pop();
		if(expResult.type != 'entero'){
			console.error("Expected integer expression result on if statement")
		} else {
			this.QuadruplesQueue.addQuadruple(13, expResult, null, undefined);
			this.JumpStack.push(this.QuadruplesQueue.size() - 1);
		}
	} cuerpo sino* SEMICOLON {
		// Semantic action #4.2
		this.QuadruplesQueue.fillJump(this.JumpStack.pop());
	};
sino:
	SINO {
		// Semantic action #4.3
		this.QuadruplesQueue.addQuadruple(11, null, null, undefined);
		this.QuadruplesQueue.fillJump(this.JumpStack.pop());
		this.JumpStack.push(this.QuadruplesQueue.size() - 1);
	} cuerpo;

ciclo:
	MIENTRAS {
		// Semantic action #5.1
		this.JumpStack.push(this.QuadruplesQueue.size());
	} LPAR expresion RPAR {
		// Semantic action #5.2
		const expResult = this.OperandStack.pop();
		if(expResult.type != 'entero'){
			console.error("Expected integer expression result on if statement")
		} else {
			this.QuadruplesQueue.addQuadruple(13, expResult, null, undefined);
			this.JumpStack.push(this.QuadruplesQueue.size() - 1);
		}
	} HAZ cuerpo SEMICOLON {
		// Semantic action #5.3
		const end = this.JumpStack.pop();
		const _return = this.JumpStack.pop();
		this.QuadruplesQueue.addQuadruple(11, null, null, _return);
		this.QuadruplesQueue.fillJump(end);
	};

llamada:
	ID {
		// Semantic action 6.2.1
		this.calledFunction = $ID.text;
		if(!this.FunctionDir.functions[this.calledFunction]){
			console.error(`Function ${this.calledFunction} does not exists`);
		}
	} LPAR {
		// Semantic action 6.2.2
		this.QuadruplesQueue.addQuadruple(14, this.calledFunction, null, null);
		this.parameterCounter = 0;
	} lista_expresiones* {
		if(this.FunctionDir.functions[this.calledFunction].parameters[this.parameterCounter] !== undefined){
			console.error('Incorrect number of parameters on function (too few): ', this.calledFunction);
		}
	} RPAR {
		// Semantic action 6.2.5
		this.QuadruplesQueue.addQuadruple(14, this.calledFunction, null, this.FunctionDir.functions[this.calledFunction].start);
		delete this.calledFunction;
	} SEMICOLON;
lista_expresiones:
	expresion {
		// Semantic action 6.2.3
		let exp =  this.OperandStack.pop();
		let expType = this.FunctionDir.getVariableType(exp);
		let parameter = this.FunctionDir.functions[this.calledFunction].parameters[this.parameterCounter]

		if(this.FunctionDir.functions[this.calledFunction].parameters[this.parameterCounter] == undefined){
			console.error('Incorrect number of parameters on function (too many): ', this.calledFunction);
		}

		let parameterType = this.FunctionDir.getVariableType(parameter);

		if(expType !== parameterType) {
			console.error('Parameter does not match type declaration')
		}
 
		this.QuadruplesQueue.addQuadruple(14, exp, null, parameter);

		this.parameterCounter++;
	} mas_expresiones*;
mas_expresiones: COMMA lista_expresiones*;

imprime: ESCRIBE LPAR lista_impresiones RPAR SEMICOLON;
lista_impresiones: imprimibles mas_impresiones |;
mas_impresiones: COMMA imprimibles mas_impresiones |;
imprimibles:
	expresion {
		// Semantic action #3.1
		this.QuadruplesQueue.addQuadruple(10, null, null, this.OperandStack.pop());
	}
	| LETRERO {
		// Semantic action #3.2
		this.QuadruplesQueue.addQuadruple(10, null, null, $LETRERO.text);
	};

expresion:
	exp comparador {
		// Semantic action #2.10
		this.OperatorStack.push($comparador.text); 
	} exp {
		// Semantic action #2.11
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
			this.QuadruplesQueue.addQuadruple(this.SematicCube[operator]['code'], leftOperand, rightOperand, resultVariable);
		}
	}
	| exp;
comparador: LT | GT | EQ | NEQ;

exp:
	termino {
		// Semantic action #2.6
		if(this.OperatorStack.top() == '+' || this.OperatorStack.top() == '-'){
			let rightOperand =  this.OperandStack.pop();
			let leftOperand = this.OperandStack.pop();
			let operator = this.OperatorStack.pop();
			let rightType = this.FunctionDir.getVariableType(rightOperand);
			let leftType = this.FunctionDir.getVariableType(leftOperand);
			let resultType = this.SematicCube[operator][rightType][leftType];
			let resultVariable = this.FunctionDir.addVar('t', resultType, this.currFunc, true);
			this.OperandStack.push(resultVariable);
			this.QuadruplesQueue.addQuadruple(this.SematicCube[operator]['code'], leftOperand, rightOperand, resultVariable);
		}
	} operaciones_signo*;

operaciones_signo:
	PLUS {
		// Semantic action #2.4
		this.OperatorStack.push($PLUS.text); 
	} exp
	| MINUS {
		// Semantic action #2.4
		this.OperatorStack.push($MINUS.text); 
	} exp;

termino:
	factor {
		// Semantic action #2.7
		if(this.OperatorStack.top() == '*' || this.OperatorStack.top() == '/'){
			let rightOperand =  this.OperandStack.pop();
			let leftOperand = this.OperandStack.pop();
			let operator = this.OperatorStack.pop();
			let rightType = this.FunctionDir.getVariableType(rightOperand);
			let leftType = this.FunctionDir.getVariableType(leftOperand);
			let resultType = this.SematicCube[operator][rightType][leftType];
			let resultVariable = this.FunctionDir.addVar('t', resultType, this.currFunc, true);
			this.OperandStack.push(resultVariable);
			this.QuadruplesQueue.addQuadruple(this.SematicCube[operator]['code'], leftOperand, rightOperand, resultVariable);
		}
	} operaciones_factor*;

operaciones_factor:
	MULT {
			// Semantic action #2.5
			this.OperatorStack.push($MULT.text); 
		} termino
	| DIV {
			// Semantic action #2.5
			this.OperatorStack.push($DIV.text); 
		} termino;

factor:
	LPAR {
		// Semantic action #2.8
		this.OperatorStack.push($LPAR.text); 
	} expresion {
			// Semantic action #2.9
			if(this.OperatorStack.top() == "("){
				this.OperatorStack.pop();
			} else {
				console.error("Invalid expression inside parenthesis");
			}
		} RPAR
	| operadores_signo operandos_factor {
		 // Semantic action #2.3
		if($operadores_signo.text == '-'){
			this.currVar = '-' + $operandos_factor.text;
		} else {
			this.currVar = $operandos_factor.text;
		}

		const REGEX_ID = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
		const REGEX_CTE_ENT = /^[0-9]+$/;
		const REGEX_CTE_FLOT = /^[0-9]+\.[0-9]+$/;

		if($operandos_factor.text.match(REGEX_ID)) {
			this.OperandStack.push(this.FunctionDir.functions[this.currFunc].variables[this.currVar]);
		} else if($operandos_factor.text.match(REGEX_CTE_ENT)) {
			let constant = this.FunctionDir.addVar('c', 'entero', this.currFunc, false, true);
			this.OperandStack.push(constant);
		} else if($operandos_factor.text.match(REGEX_CTE_FLOT)) {
			let constant = this.FunctionDir.addVar('c', 'flotante', this.currFunc, false, true);
			this.OperandStack.push(constant);
		} 
	};
operadores_signo: PLUS | MINUS |;
operandos_factor: ID | cte;

cte: CTE_ENT | CTE_FLOT;