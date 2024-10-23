lexer grammar PatitoLexer;

// TOKENS
PROGRAM: 'programa';
VARS: 'vars';
ENTERO: 'entero';
FLOTANTE: 'flotante';
NULA: 'nula';
SI: 'si';
SINO: 'sino';
MIENTRAS: 'mientras';
HAZ: 'haz';
INICIO: 'inicio';
FIN: 'fin';
CTE_ENT: [0-9]+;
CTE_FLOT: [0-9]+ '.' [0-9]+;
ESCRIBE: 'escribe';

ID: [a-zA-Z_][a-zA-Z0-9_]*;
LETRERO: '"' .*? '"';

SEMICOLON: ';';
COLON: ':';
COMMA: ',';
LPAR: '(';
RPAR: ')';
LBRACE: '{';
RBRACE: '}';
ASSIGN: '=';
GT: '>';
LT: '<';
NEQ: '!=';
EQ: '==';
PLUS: '+';
MINUS: '-';
MULT: '*';
DIV: '/';

WS: [ \t\r\n]+ -> skip;