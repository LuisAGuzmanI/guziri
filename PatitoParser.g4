grammar PatitoParser;

options {
	tokenVocab = PatitoLexer;
}

programa:
	PROGRAM ID SEMICOLON tiene_vars lista_funcs INICIO cuerpo FIN;

tiene_vars: vars |;
vars: VARS lista_vars mas_vars;
mas_vars: lista_vars |;
lista_vars: lista_ids COLON tipo SEMICOLON;
lista_ids: ID mas_ids;
mas_ids: COMMA ID mas_ids |;

lista_funcs: funcs lista_funcs |;
funcs:
	NULA ID LPAR lista_params RPAR LBRACE tiene_vars cuerpo RBRACE SEMICOLON;
lista_params: param mas_params |;
mas_params: COMMA param mas_params |;
param: ID COLON tipo;

tipo: ENTERO | FLOTANTE;

cuerpo: LBRACE lista_estatutos RBRACE;
lista_estatutos: estatuto lista_estatutos |;
estatuto: asigna | condicion | ciclo | llamada | imprime;

asigna: ID ASSIGN expresion SEMICOLON;

condicion: SI LPAR expresion RPAR cuerpo tiene_sino SEMICOLON;
tiene_sino: SINO cuerpo |;

ciclo: MIENTRAS LPAR expresion RPAR HAZ cuerpo SEMICOLON;

llamada: ID LPAR lista_expresiones RPAR SEMICOLON;
lista_expresiones: expresion mas_expresiones |;
mas_expresiones: COMMA expresion mas_expresiones |;

imprime: ESCRIBE LPAR lista_impresiones RPAR SEMICOLON;
lista_impresiones: imprimibles mas_impresiones |;
mas_impresiones: COMMA imprimibles mas_impresiones |;
imprimibles: expresion | LETRERO;

expresion: exp comparador | exp;
comparador: LT exp | GT exp | EQ exp | NEQ exp;

exp: termino operaciones_signo;
operaciones_signo: PLUS exp | MINUS exp |;

termino: factor operaciones_factor;
operaciones_factor: MULT factor | DIV factor |;

factor: LPAR expresion RPAR | operadores_signo operandos_factor;
operadores_signo: PLUS | MINUS |;
operandos_factor: ID | cte;

cte: CTE_ENT | CTE_FLOT;