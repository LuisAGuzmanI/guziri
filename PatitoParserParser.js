// Generated from PatitoParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import PatitoParserListener from './PatitoParserListener.js';
const serializedATN = [4,1,33,332,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
0,1,1,1,1,3,1,90,8,1,1,2,1,2,1,2,1,2,1,3,1,3,3,3,98,8,3,1,4,1,4,1,4,1,4,
1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,1,6,3,6,113,8,6,1,7,1,7,1,7,1,7,3,7,119,
8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,
1,9,3,9,139,8,9,1,10,1,10,1,10,1,10,1,10,3,10,146,8,10,1,11,1,11,1,11,1,
11,1,11,1,12,1,12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,3,14,163,8,14,
1,15,1,15,1,15,1,15,1,15,3,15,170,8,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,
1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,5,17,187,8,17,10,17,12,17,190,9,
17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,5,20,215,8,20,10,20,12,20,218,
9,20,1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,21,5,21,228,8,21,10,21,12,21,231,
9,21,1,22,1,22,5,22,235,8,22,10,22,12,22,238,9,22,1,23,1,23,1,23,1,23,1,
23,1,23,1,24,1,24,1,24,1,24,3,24,250,8,24,1,25,1,25,1,25,1,25,1,25,3,25,
257,8,25,1,26,1,26,1,26,1,26,1,26,3,26,264,8,26,1,27,1,27,1,27,1,27,1,27,
1,27,1,27,3,27,273,8,27,1,28,1,28,1,29,1,29,1,29,5,29,280,8,29,10,29,12,
29,283,9,29,1,30,1,30,1,30,1,30,1,30,1,30,3,30,291,8,30,1,31,1,31,1,31,5,
31,296,8,31,10,31,12,31,299,9,31,1,32,1,32,1,32,1,32,1,32,1,32,3,32,307,
8,32,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,3,33,319,8,33,1,34,
1,34,1,34,3,34,324,8,34,1,35,1,35,3,35,328,8,35,1,36,1,36,1,36,0,0,37,0,
2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,
54,56,58,60,62,64,66,68,70,72,0,3,1,0,3,4,1,0,25,28,1,0,12,13,321,0,74,1,
0,0,0,2,89,1,0,0,0,4,91,1,0,0,0,6,97,1,0,0,0,8,99,1,0,0,0,10,105,1,0,0,0,
12,112,1,0,0,0,14,118,1,0,0,0,16,120,1,0,0,0,18,138,1,0,0,0,20,145,1,0,0,
0,22,147,1,0,0,0,24,152,1,0,0,0,26,154,1,0,0,0,28,162,1,0,0,0,30,169,1,0,
0,0,32,171,1,0,0,0,34,179,1,0,0,0,36,194,1,0,0,0,38,198,1,0,0,0,40,209,1,
0,0,0,42,224,1,0,0,0,44,232,1,0,0,0,46,239,1,0,0,0,48,249,1,0,0,0,50,256,
1,0,0,0,52,263,1,0,0,0,54,272,1,0,0,0,56,274,1,0,0,0,58,276,1,0,0,0,60,290,
1,0,0,0,62,292,1,0,0,0,64,306,1,0,0,0,66,318,1,0,0,0,68,323,1,0,0,0,70,327,
1,0,0,0,72,329,1,0,0,0,74,75,6,0,-1,0,75,76,5,1,0,0,76,77,5,15,0,0,77,78,
6,0,-1,0,78,79,5,17,0,0,79,80,3,2,1,0,80,81,3,14,7,0,81,82,5,10,0,0,82,83,
6,0,-1,0,83,84,3,26,13,0,84,85,5,11,0,0,85,86,6,0,-1,0,86,1,1,0,0,0,87,90,
3,4,2,0,88,90,1,0,0,0,89,87,1,0,0,0,89,88,1,0,0,0,90,3,1,0,0,0,91,92,5,2,
0,0,92,93,3,8,4,0,93,94,3,6,3,0,94,5,1,0,0,0,95,98,3,8,4,0,96,98,1,0,0,0,
97,95,1,0,0,0,97,96,1,0,0,0,98,7,1,0,0,0,99,100,3,10,5,0,100,101,5,18,0,
0,101,102,3,24,12,0,102,103,6,4,-1,0,103,104,5,17,0,0,104,9,1,0,0,0,105,
106,5,15,0,0,106,107,3,12,6,0,107,11,1,0,0,0,108,109,5,19,0,0,109,110,5,
15,0,0,110,113,3,12,6,0,111,113,1,0,0,0,112,108,1,0,0,0,112,111,1,0,0,0,
113,13,1,0,0,0,114,115,3,16,8,0,115,116,3,14,7,0,116,119,1,0,0,0,117,119,
1,0,0,0,118,114,1,0,0,0,118,117,1,0,0,0,119,15,1,0,0,0,120,121,5,5,0,0,121,
122,5,15,0,0,122,123,6,8,-1,0,123,124,5,20,0,0,124,125,3,18,9,0,125,126,
5,21,0,0,126,127,5,22,0,0,127,128,3,2,1,0,128,129,6,8,-1,0,129,130,3,26,
13,0,130,131,5,23,0,0,131,132,5,17,0,0,132,133,6,8,-1,0,133,17,1,0,0,0,134,
135,3,22,11,0,135,136,3,20,10,0,136,139,1,0,0,0,137,139,1,0,0,0,138,134,
1,0,0,0,138,137,1,0,0,0,139,19,1,0,0,0,140,141,5,19,0,0,141,142,3,22,11,
0,142,143,3,20,10,0,143,146,1,0,0,0,144,146,1,0,0,0,145,140,1,0,0,0,145,
144,1,0,0,0,146,21,1,0,0,0,147,148,5,15,0,0,148,149,5,18,0,0,149,150,3,24,
12,0,150,151,6,11,-1,0,151,23,1,0,0,0,152,153,7,0,0,0,153,25,1,0,0,0,154,
155,5,22,0,0,155,156,3,28,14,0,156,157,5,23,0,0,157,27,1,0,0,0,158,159,3,
30,15,0,159,160,3,28,14,0,160,163,1,0,0,0,161,163,1,0,0,0,162,158,1,0,0,
0,162,161,1,0,0,0,163,29,1,0,0,0,164,170,3,32,16,0,165,170,3,34,17,0,166,
170,3,38,19,0,167,170,3,40,20,0,168,170,3,46,23,0,169,164,1,0,0,0,169,165,
1,0,0,0,169,166,1,0,0,0,169,167,1,0,0,0,169,168,1,0,0,0,170,31,1,0,0,0,171,
172,5,15,0,0,172,173,6,16,-1,0,173,174,5,24,0,0,174,175,6,16,-1,0,175,176,
3,54,27,0,176,177,6,16,-1,0,177,178,5,17,0,0,178,33,1,0,0,0,179,180,5,6,
0,0,180,181,5,20,0,0,181,182,3,54,27,0,182,183,5,21,0,0,183,184,6,17,-1,
0,184,188,3,26,13,0,185,187,3,36,18,0,186,185,1,0,0,0,187,190,1,0,0,0,188,
186,1,0,0,0,188,189,1,0,0,0,189,191,1,0,0,0,190,188,1,0,0,0,191,192,5,17,
0,0,192,193,6,17,-1,0,193,35,1,0,0,0,194,195,5,7,0,0,195,196,6,18,-1,0,196,
197,3,26,13,0,197,37,1,0,0,0,198,199,5,8,0,0,199,200,6,19,-1,0,200,201,5,
20,0,0,201,202,3,54,27,0,202,203,5,21,0,0,203,204,6,19,-1,0,204,205,5,9,
0,0,205,206,3,26,13,0,206,207,5,17,0,0,207,208,6,19,-1,0,208,39,1,0,0,0,
209,210,5,15,0,0,210,211,6,20,-1,0,211,212,5,20,0,0,212,216,6,20,-1,0,213,
215,3,42,21,0,214,213,1,0,0,0,215,218,1,0,0,0,216,214,1,0,0,0,216,217,1,
0,0,0,217,219,1,0,0,0,218,216,1,0,0,0,219,220,6,20,-1,0,220,221,5,21,0,0,
221,222,6,20,-1,0,222,223,5,17,0,0,223,41,1,0,0,0,224,225,3,54,27,0,225,
229,6,21,-1,0,226,228,3,44,22,0,227,226,1,0,0,0,228,231,1,0,0,0,229,227,
1,0,0,0,229,230,1,0,0,0,230,43,1,0,0,0,231,229,1,0,0,0,232,236,5,19,0,0,
233,235,3,42,21,0,234,233,1,0,0,0,235,238,1,0,0,0,236,234,1,0,0,0,236,237,
1,0,0,0,237,45,1,0,0,0,238,236,1,0,0,0,239,240,5,14,0,0,240,241,5,20,0,0,
241,242,3,48,24,0,242,243,5,21,0,0,243,244,5,17,0,0,244,47,1,0,0,0,245,246,
3,52,26,0,246,247,3,50,25,0,247,250,1,0,0,0,248,250,1,0,0,0,249,245,1,0,
0,0,249,248,1,0,0,0,250,49,1,0,0,0,251,252,5,19,0,0,252,253,3,52,26,0,253,
254,3,50,25,0,254,257,1,0,0,0,255,257,1,0,0,0,256,251,1,0,0,0,256,255,1,
0,0,0,257,51,1,0,0,0,258,259,3,54,27,0,259,260,6,26,-1,0,260,264,1,0,0,0,
261,262,5,16,0,0,262,264,6,26,-1,0,263,258,1,0,0,0,263,261,1,0,0,0,264,53,
1,0,0,0,265,266,3,58,29,0,266,267,3,56,28,0,267,268,6,27,-1,0,268,269,3,
58,29,0,269,270,6,27,-1,0,270,273,1,0,0,0,271,273,3,58,29,0,272,265,1,0,
0,0,272,271,1,0,0,0,273,55,1,0,0,0,274,275,7,1,0,0,275,57,1,0,0,0,276,277,
3,62,31,0,277,281,6,29,-1,0,278,280,3,60,30,0,279,278,1,0,0,0,280,283,1,
0,0,0,281,279,1,0,0,0,281,282,1,0,0,0,282,59,1,0,0,0,283,281,1,0,0,0,284,
285,5,29,0,0,285,286,6,30,-1,0,286,291,3,58,29,0,287,288,5,30,0,0,288,289,
6,30,-1,0,289,291,3,58,29,0,290,284,1,0,0,0,290,287,1,0,0,0,291,61,1,0,0,
0,292,293,3,66,33,0,293,297,6,31,-1,0,294,296,3,64,32,0,295,294,1,0,0,0,
296,299,1,0,0,0,297,295,1,0,0,0,297,298,1,0,0,0,298,63,1,0,0,0,299,297,1,
0,0,0,300,301,5,31,0,0,301,302,6,32,-1,0,302,307,3,62,31,0,303,304,5,32,
0,0,304,305,6,32,-1,0,305,307,3,62,31,0,306,300,1,0,0,0,306,303,1,0,0,0,
307,65,1,0,0,0,308,309,5,20,0,0,309,310,6,33,-1,0,310,311,3,54,27,0,311,
312,6,33,-1,0,312,313,5,21,0,0,313,319,1,0,0,0,314,315,3,68,34,0,315,316,
3,70,35,0,316,317,6,33,-1,0,317,319,1,0,0,0,318,308,1,0,0,0,318,314,1,0,
0,0,319,67,1,0,0,0,320,324,5,29,0,0,321,324,5,30,0,0,322,324,1,0,0,0,323,
320,1,0,0,0,323,321,1,0,0,0,323,322,1,0,0,0,324,69,1,0,0,0,325,328,5,15,
0,0,326,328,3,72,36,0,327,325,1,0,0,0,327,326,1,0,0,0,328,71,1,0,0,0,329,
330,7,2,0,0,330,73,1,0,0,0,23,89,97,112,118,138,145,162,169,188,216,229,
236,249,256,263,272,281,290,297,306,318,323,327];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class PatitoParserParser extends antlr4.Parser {

    static grammarFileName = "PatitoParser.g4";
    static literalNames = [ null, "'programa'", "'vars'", "'entero'", "'flotante'", 
                            "'nula'", "'si'", "'sino'", "'mientras'", "'haz'", 
                            "'inicio'", "'fin'", null, null, "'escribe'", 
                            null, null, "';'", "':'", "','", "'('", "')'", 
                            "'{'", "'}'", "'='", "'>'", "'<'", "'!='", "'=='", 
                            "'+'", "'-'", "'*'", "'/'" ];
    static symbolicNames = [ null, "PROGRAM", "VARS", "ENTERO", "FLOTANTE", 
                             "NULA", "SI", "SINO", "MIENTRAS", "HAZ", "INICIO", 
                             "FIN", "CTE_ENT", "CTE_FLOT", "ESCRIBE", "ID", 
                             "LETRERO", "SEMICOLON", "COLON", "COMMA", "LPAR", 
                             "RPAR", "LBRACE", "RBRACE", "ASSIGN", "GT", 
                             "LT", "NEQ", "EQ", "PLUS", "MINUS", "MULT", 
                             "DIV", "WS" ];
    static ruleNames = [ "programa", "tiene_vars", "vars", "mas_vars", "lista_vars", 
                         "lista_ids", "mas_ids", "lista_funcs", "funcs", 
                         "lista_params", "mas_params", "param", "tipo", 
                         "cuerpo", "lista_estatutos", "estatuto", "asigna", 
                         "condicion", "sino", "ciclo", "llamada", "lista_expresiones", 
                         "mas_expresiones", "imprime", "lista_impresiones", 
                         "mas_impresiones", "imprimibles", "expresion", 
                         "comparador", "exp", "operaciones_signo", "termino", 
                         "operaciones_factor", "factor", "operadores_signo", 
                         "operandos_factor", "cte" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PatitoParserParser.ruleNames;
        this.literalNames = PatitoParserParser.literalNames;
        this.symbolicNames = PatitoParserParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PatitoParserParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);

	        		// Semantic action #1.1
	        		this.QuadruplesQueue.addQuadruple(11, null, null, undefined);
	        	
	        this.state = 75;
	        localctx._PROGRAM = this.match(PatitoParserParser.PROGRAM);
	        this.state = 76;
	        this.match(PatitoParserParser.ID);
	         
	        		// Sematic action #1.2
	        		this.currType = (localctx._PROGRAM == null ? null : localctx._PROGRAM.text);
	        		this.currFunc = 'global';
	        		this.FunctionDir.addFunction(this.currFunc, this.currType);
	        	
	        this.state = 78;
	        this.match(PatitoParserParser.SEMICOLON);
	        this.state = 79;
	        this.tiene_vars();
	        this.state = 80;
	        this.lista_funcs();
	        this.state = 81;
	        this.match(PatitoParserParser.INICIO);

	        		// Semantic action #1.4
	        		this.QuadruplesQueue.items[0].result = this.QuadruplesQueue.size();
	        	
	        this.state = 83;
	        this.cuerpo();
	        this.state = 84;
	        this.match(PatitoParserParser.FIN);

	        		// Semantic action #1.5
	        		this.FunctionDir.releaseVarTable(this.currFunc);
	        	
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tiene_vars() {
	    let localctx = new Tiene_varsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, PatitoParserParser.RULE_tiene_vars);
	    try {
	        this.state = 89;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 87;
	            this.vars();
	            break;
	        case 5:
	        case 10:
	        case 22:
	            this.enterOuterAlt(localctx, 2);

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	vars() {
	    let localctx = new VarsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, PatitoParserParser.RULE_vars);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(PatitoParserParser.VARS);
	        this.state = 92;
	        this.lista_vars();
	        this.state = 93;
	        this.mas_vars();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mas_vars() {
	    let localctx = new Mas_varsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, PatitoParserParser.RULE_mas_vars);
	    try {
	        this.state = 97;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 95;
	            this.lista_vars();
	            break;
	        case 5:
	        case 10:
	        case 22:
	            this.enterOuterAlt(localctx, 2);

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista_vars() {
	    let localctx = new Lista_varsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, PatitoParserParser.RULE_lista_vars);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        localctx._lista_ids = this.lista_ids();
	        this.state = 100;
	        this.match(PatitoParserParser.COLON);
	        this.state = 101;
	        localctx._tipo = this.tipo();

	        		// Semantic action #1.3
	        		this.currType = (localctx._tipo == null ? null : this._input.getText(new antlr4.Interval(localctx._tipo.start,localctx._tipo.stop)));
	        		let var_list = (localctx._lista_ids == null ? null : this._input.getText(new antlr4.Interval(localctx._lista_ids.start,localctx._lista_ids.stop)));
	        		let var_list_array = var_list.split(",");
	        		var_list_array.forEach((_var) => {
	        			this.FunctionDir.addVar(_var, this.currType, this.currFunc);
	        		});
	        	
	        this.state = 103;
	        this.match(PatitoParserParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista_ids() {
	    let localctx = new Lista_idsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, PatitoParserParser.RULE_lista_ids);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.match(PatitoParserParser.ID);
	        this.state = 106;
	        this.mas_ids();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mas_ids() {
	    let localctx = new Mas_idsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, PatitoParserParser.RULE_mas_ids);
	    try {
	        this.state = 112;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 108;
	            this.match(PatitoParserParser.COMMA);
	            this.state = 109;
	            this.match(PatitoParserParser.ID);
	            this.state = 110;
	            this.mas_ids();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 2);

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista_funcs() {
	    let localctx = new Lista_funcsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, PatitoParserParser.RULE_lista_funcs);
	    try {
	        this.state = 118;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 114;
	            this.funcs();
	            this.state = 115;
	            this.lista_funcs();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcs() {
	    let localctx = new FuncsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, PatitoParserParser.RULE_funcs);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        localctx._NULA = this.match(PatitoParserParser.NULA);
	        this.state = 121;
	        localctx._ID = this.match(PatitoParserParser.ID);

	        		// Semantic action #6.1.1
	        		this.currType = (localctx._NULA == null ? null : localctx._NULA.text);
	        		this.currFunc = (localctx._ID == null ? null : localctx._ID.text);

	        		if(this.FunctionDir.hasFunction(this.currFunc)){
	        			console.error(`La función ${this.currFunc} ya está definida`);
	        		}

	        		this.FunctionDir.addFunction(this.currFunc, this.currType);
	        	
	        this.state = 123;
	        this.match(PatitoParserParser.LPAR);
	        this.state = 124;
	        this.lista_params();
	        this.state = 125;
	        this.match(PatitoParserParser.RPAR);
	        this.state = 126;
	        this.match(PatitoParserParser.LBRACE);
	        this.state = 127;
	        this.tiene_vars();

	        		// Semantic action #6.1.3
	        		this.FunctionDir.functions[this.currFunc].start = this.QuadruplesQueue.size();
	        	
	        this.state = 129;
	        this.cuerpo();
	        this.state = 130;
	        this.match(PatitoParserParser.RBRACE);
	        this.state = 131;
	        this.match(PatitoParserParser.SEMICOLON);

	        		// Semantic action #6.1.4
	        		this.FunctionDir.releaseVarTable(this.currFunc);
	        		this.currFunc = 'global';
	        		this.QuadruplesQueue.addQuadruple(14, null, null, null);
	        	
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista_params() {
	    let localctx = new Lista_paramsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, PatitoParserParser.RULE_lista_params);
	    try {
	        this.state = 138;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 134;
	            this.param();
	            this.state = 135;
	            this.mas_params();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 2);

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mas_params() {
	    let localctx = new Mas_paramsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, PatitoParserParser.RULE_mas_params);
	    try {
	        this.state = 145;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 140;
	            this.match(PatitoParserParser.COMMA);
	            this.state = 141;
	            this.param();
	            this.state = 142;
	            this.mas_params();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 2);

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	param() {
	    let localctx = new ParamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, PatitoParserParser.RULE_param);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        localctx._ID = this.match(PatitoParserParser.ID);
	        this.state = 148;
	        this.match(PatitoParserParser.COLON);
	        this.state = 149;
	        localctx._tipo = this.tipo();
	         
	        		// Semantic action #6.1.2
	        		this.currType = (localctx._tipo == null ? null : this._input.getText(new antlr4.Interval(localctx._tipo.start,localctx._tipo.stop)));
	        		this.currVar = (localctx._ID == null ? null : localctx._ID.text);
	        		if(this.FunctionDir.hasVariable(this.currFunc, this.currVar)){
	        			console.error(`La función ${this.currVar} ya está definida`);
	        		}
	        		else {
	        			let parameterDir = this.FunctionDir.addVar(this.currVar, this.currType, this.currFunc);
	        			this.FunctionDir.addParameter(parameterDir, this.currFunc)
	        		}
	        	
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tipo() {
	    let localctx = new TipoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, PatitoParserParser.RULE_tipo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        _la = this._input.LA(1);
	        if(!(_la===3 || _la===4)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cuerpo() {
	    let localctx = new CuerpoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, PatitoParserParser.RULE_cuerpo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.match(PatitoParserParser.LBRACE);
	        this.state = 155;
	        this.lista_estatutos();
	        this.state = 156;
	        this.match(PatitoParserParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista_estatutos() {
	    let localctx = new Lista_estatutosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, PatitoParserParser.RULE_lista_estatutos);
	    try {
	        this.state = 162;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	        case 8:
	        case 14:
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 158;
	            this.estatuto();
	            this.state = 159;
	            this.lista_estatutos();
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 2);

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	estatuto() {
	    let localctx = new EstatutoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, PatitoParserParser.RULE_estatuto);
	    try {
	        this.state = 169;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 164;
	            this.asigna();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 165;
	            this.condicion();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 166;
	            this.ciclo();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 167;
	            this.llamada();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 168;
	            this.imprime();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asigna() {
	    let localctx = new AsignaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, PatitoParserParser.RULE_asigna);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        localctx._ID = this.match(PatitoParserParser.ID);

	        		// Semantic action #2.1
	        		this.currVar = (localctx._ID == null ? null : localctx._ID.text);
	        		this.OperandStack.push(this.FunctionDir.functions[this.currFunc].variables[this.currVar]);
	        	
	        this.state = 173;
	        localctx._ASSIGN = this.match(PatitoParserParser.ASSIGN);

	        		// Semantic action #2.2
	        		this.OperatorStack.push((localctx._ASSIGN == null ? null : localctx._ASSIGN.text))
	        	
	        this.state = 175;
	        this.expresion();

	        		// Semantic action #2.12
	        		if(this.OperatorStack.top() == '=' ){
	        			let leftOperand = this.OperandStack.pop();
	        			let resultVariable =  this.OperandStack.pop();
	        			let operator = this.OperatorStack.pop();
	        			this.QuadruplesQueue.addQuadruple(this.SematicCube[operator]['code'], leftOperand, null, resultVariable);
	        		}
	        	
	        this.state = 177;
	        this.match(PatitoParserParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, PatitoParserParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179;
	        this.match(PatitoParserParser.SI);
	        this.state = 180;
	        this.match(PatitoParserParser.LPAR);
	        this.state = 181;
	        this.expresion();
	        this.state = 182;
	        this.match(PatitoParserParser.RPAR);

	        		// Semantic action #4.1
	        		const expResult = this.OperandStack.pop();
	        		if(this.FunctionDir.getVariableType(expResult) != 'entero'){
	        			console.error("Expected integer expression result on if statement")
	        		} else {
	        			this.QuadruplesQueue.addQuadruple(13, expResult, null, undefined);
	        			this.JumpStack.push(this.QuadruplesQueue.size() - 1);
	        		}
	        	
	        this.state = 184;
	        this.cuerpo();
	        this.state = 188;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 185;
	            this.sino();
	            this.state = 190;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 191;
	        this.match(PatitoParserParser.SEMICOLON);

	        		// Semantic action #4.2
	        		this.QuadruplesQueue.fillJump(this.JumpStack.pop());
	        	
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sino() {
	    let localctx = new SinoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, PatitoParserParser.RULE_sino);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 194;
	        this.match(PatitoParserParser.SINO);

	        		// Semantic action #4.3
	        		this.QuadruplesQueue.addQuadruple(11, null, null, undefined);
	        		this.QuadruplesQueue.fillJump(this.JumpStack.pop());
	        		this.JumpStack.push(this.QuadruplesQueue.size() - 1);
	        	
	        this.state = 196;
	        this.cuerpo();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ciclo() {
	    let localctx = new CicloContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, PatitoParserParser.RULE_ciclo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        this.match(PatitoParserParser.MIENTRAS);

	        		// Semantic action #5.1
	        		this.JumpStack.push(this.QuadruplesQueue.size());
	        	
	        this.state = 200;
	        this.match(PatitoParserParser.LPAR);
	        this.state = 201;
	        this.expresion();
	        this.state = 202;
	        this.match(PatitoParserParser.RPAR);

	        		// Semantic action #5.2
	        		const expResult = this.OperandStack.pop();
	        		if(this.FunctionDir.getVariableType(expResult) != 'entero'){
	        			console.error("Expected integer expression result on if statement")
	        		} else {
	        			this.QuadruplesQueue.addQuadruple(13, expResult, null, undefined);
	        			this.JumpStack.push(this.QuadruplesQueue.size() - 1);
	        		}
	        	
	        this.state = 204;
	        this.match(PatitoParserParser.HAZ);
	        this.state = 205;
	        this.cuerpo();
	        this.state = 206;
	        this.match(PatitoParserParser.SEMICOLON);

	        		// Semantic action #5.3
	        		const end = this.JumpStack.pop();
	        		const _return = this.JumpStack.pop();
	        		this.QuadruplesQueue.addQuadruple(11, null, null, _return);
	        		this.QuadruplesQueue.fillJump(end);
	        	
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	llamada() {
	    let localctx = new LlamadaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, PatitoParserParser.RULE_llamada);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
	        localctx._ID = this.match(PatitoParserParser.ID);

	        		// Semantic action 6.2.1
	        		this.calledFunction = (localctx._ID == null ? null : localctx._ID.text);
	        		if(!this.FunctionDir.functions[this.calledFunction]){
	        			console.error(`Function ${this.calledFunction} does not exists`);
	        		}
	        	
	        this.state = 211;
	        this.match(PatitoParserParser.LPAR);

	        		// Semantic action 6.2.2
	        		this.QuadruplesQueue.addQuadruple(15, this.calledFunction, null, null);
	        		this.parameterCounter = 0;
	        	
	        this.state = 216;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1611706368) !== 0)) {
	            this.state = 213;
	            this.lista_expresiones();
	            this.state = 218;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }

	        		if(this.FunctionDir.functions[this.calledFunction].parameters[this.parameterCounter] !== undefined){
	        			console.error('Incorrect number of parameters on function (too few): ', this.calledFunction);
	        		}
	        	
	        this.state = 220;
	        this.match(PatitoParserParser.RPAR);

	        		// Semantic action 6.2.5
	        		this.QuadruplesQueue.addQuadruple(16, this.calledFunction, null, this.FunctionDir.functions[this.calledFunction].start);
	        		delete this.calledFunction;
	        	
	        this.state = 222;
	        this.match(PatitoParserParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista_expresiones() {
	    let localctx = new Lista_expresionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, PatitoParserParser.RULE_lista_expresiones);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 224;
	        this.expresion();

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
	         
	        		this.QuadruplesQueue.addQuadruple(17, exp, null, parameter);

	        		this.parameterCounter++;
	        	
	        this.state = 229;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 226;
	                this.mas_expresiones(); 
	            }
	            this.state = 231;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mas_expresiones() {
	    let localctx = new Mas_expresionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, PatitoParserParser.RULE_mas_expresiones);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 232;
	        this.match(PatitoParserParser.COMMA);
	        this.state = 236;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 233;
	                this.lista_expresiones(); 
	            }
	            this.state = 238;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	imprime() {
	    let localctx = new ImprimeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, PatitoParserParser.RULE_imprime);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        this.match(PatitoParserParser.ESCRIBE);
	        this.state = 240;
	        this.match(PatitoParserParser.LPAR);
	        this.state = 241;
	        this.lista_impresiones();
	        this.state = 242;
	        this.match(PatitoParserParser.RPAR);
	        this.state = 243;
	        this.match(PatitoParserParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista_impresiones() {
	    let localctx = new Lista_impresionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, PatitoParserParser.RULE_lista_impresiones);
	    try {
	        this.state = 249;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	        case 13:
	        case 15:
	        case 16:
	        case 20:
	        case 29:
	        case 30:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 245;
	            this.imprimibles();
	            this.state = 246;
	            this.mas_impresiones();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 2);

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mas_impresiones() {
	    let localctx = new Mas_impresionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, PatitoParserParser.RULE_mas_impresiones);
	    try {
	        this.state = 256;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 251;
	            this.match(PatitoParserParser.COMMA);
	            this.state = 252;
	            this.imprimibles();
	            this.state = 253;
	            this.mas_impresiones();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 2);

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	imprimibles() {
	    let localctx = new ImprimiblesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, PatitoParserParser.RULE_imprimibles);
	    try {
	        this.state = 263;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	        case 13:
	        case 15:
	        case 20:
	        case 29:
	        case 30:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 258;
	            this.expresion();

	            		// Semantic action #3.1
	            		this.QuadruplesQueue.addQuadruple(10, null, null, this.OperandStack.pop());
	            	
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 261;
	            localctx._LETRERO = this.match(PatitoParserParser.LETRERO);

	            		// Semantic action #3.2
	            		let stringAddress = this.FunctionDir.addVar((localctx._LETRERO == null ? null : localctx._LETRERO.text).substring(1, (localctx._LETRERO == null ? null : localctx._LETRERO.text).length-1), 'letrero', this.currFunc, false, true);
	            		this.QuadruplesQueue.addQuadruple(10, null, null, stringAddress);
	            	
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, PatitoParserParser.RULE_expresion);
	    try {
	        this.state = 272;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 265;
	            this.exp();
	            this.state = 266;
	            localctx._comparador = this.comparador();

	            		// Semantic action #2.10
	            		this.OperatorStack.push((localctx._comparador == null ? null : this._input.getText(new antlr4.Interval(localctx._comparador.start,localctx._comparador.stop)))); 
	            	
	            this.state = 268;
	            this.exp();

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
	            			let rightType = this.FunctionDir.getVariableType(rightOperand);
	            			let leftType = this.FunctionDir.getVariableType(leftOperand);
	            			let resultType = this.SematicCube[operator][rightType][leftType];
	            			let resultVariable = this.FunctionDir.addVar('t', resultType, this.currFunc, true);
	            			this.OperandStack.push(resultVariable);
	            			this.QuadruplesQueue.addQuadruple(this.SematicCube[operator]['code'], leftOperand, rightOperand, resultVariable);
	            		}
	            	
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 271;
	            this.exp();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comparador() {
	    let localctx = new ComparadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, PatitoParserParser.RULE_comparador);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 274;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 503316480) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exp() {
	    let localctx = new ExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, PatitoParserParser.RULE_exp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 276;
	        this.termino();

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
	        	
	        this.state = 281;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 278;
	                this.operaciones_signo(); 
	            }
	            this.state = 283;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operaciones_signo() {
	    let localctx = new Operaciones_signoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, PatitoParserParser.RULE_operaciones_signo);
	    try {
	        this.state = 290;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 284;
	            localctx._PLUS = this.match(PatitoParserParser.PLUS);

	            		// Semantic action #2.4
	            		this.OperatorStack.push((localctx._PLUS == null ? null : localctx._PLUS.text)); 
	            	
	            this.state = 286;
	            this.exp();
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 287;
	            localctx._MINUS = this.match(PatitoParserParser.MINUS);

	            		// Semantic action #2.4
	            		this.OperatorStack.push((localctx._MINUS == null ? null : localctx._MINUS.text)); 
	            	
	            this.state = 289;
	            this.exp();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	termino() {
	    let localctx = new TerminoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, PatitoParserParser.RULE_termino);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 292;
	        this.factor();

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
	        	
	        this.state = 297;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 294;
	                this.operaciones_factor(); 
	            }
	            this.state = 299;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operaciones_factor() {
	    let localctx = new Operaciones_factorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, PatitoParserParser.RULE_operaciones_factor);
	    try {
	        this.state = 306;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 31:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 300;
	            localctx._MULT = this.match(PatitoParserParser.MULT);

	            			// Semantic action #2.5
	            			this.OperatorStack.push((localctx._MULT == null ? null : localctx._MULT.text)); 
	            		
	            this.state = 302;
	            this.termino();
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 303;
	            localctx._DIV = this.match(PatitoParserParser.DIV);

	            			// Semantic action #2.5
	            			this.OperatorStack.push((localctx._DIV == null ? null : localctx._DIV.text)); 
	            		
	            this.state = 305;
	            this.termino();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, PatitoParserParser.RULE_factor);
	    try {
	        this.state = 318;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 308;
	            localctx._LPAR = this.match(PatitoParserParser.LPAR);

	            		// Semantic action #2.8
	            		this.OperatorStack.push((localctx._LPAR == null ? null : localctx._LPAR.text)); 
	            	
	            this.state = 310;
	            this.expresion();

	            			// Semantic action #2.9
	            			if(this.OperatorStack.top() == "("){
	            				this.OperatorStack.pop();
	            			} else {
	            				console.error("Invalid expression inside parenthesis");
	            			}
	            		
	            this.state = 312;
	            this.match(PatitoParserParser.RPAR);
	            break;
	        case 12:
	        case 13:
	        case 15:
	        case 29:
	        case 30:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 314;
	            localctx._operadores_signo = this.operadores_signo();
	            this.state = 315;
	            localctx._operandos_factor = this.operandos_factor();

	            		 // Semantic action #2.3
	            		if((localctx._operadores_signo == null ? null : this._input.getText(new antlr4.Interval(localctx._operadores_signo.start,localctx._operadores_signo.stop))) == '-'){
	            			this.currVar = '-' + (localctx._operandos_factor == null ? null : this._input.getText(new antlr4.Interval(localctx._operandos_factor.start,localctx._operandos_factor.stop)));
	            		} else {
	            			this.currVar = (localctx._operandos_factor == null ? null : this._input.getText(new antlr4.Interval(localctx._operandos_factor.start,localctx._operandos_factor.stop)));
	            		}

	            		const REGEX_ID = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
	            		const REGEX_CTE_ENT = /^[0-9]+$/;
	            		const REGEX_CTE_FLOT = /^[0-9]+\.[0-9]+$/;

	            		if((localctx._operandos_factor == null ? null : this._input.getText(new antlr4.Interval(localctx._operandos_factor.start,localctx._operandos_factor.stop))).match(REGEX_ID)) {
	            			this.OperandStack.push(this.FunctionDir.functions[this.currFunc].variables[this.currVar]);
	            		} else if((localctx._operandos_factor == null ? null : this._input.getText(new antlr4.Interval(localctx._operandos_factor.start,localctx._operandos_factor.stop))).match(REGEX_CTE_ENT)) {
	            			let constant = this.FunctionDir.addVar(this.currVar, 'entero', this.currFunc, false, true);
	            			this.OperandStack.push(constant);
	            		} else if((localctx._operandos_factor == null ? null : this._input.getText(new antlr4.Interval(localctx._operandos_factor.start,localctx._operandos_factor.stop))).match(REGEX_CTE_FLOT)) {
	            			let constant = this.FunctionDir.addVar(this.currVar, 'flotante', this.currFunc, false, true);
	            			this.OperandStack.push(constant);
	            		} 
	            	
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operadores_signo() {
	    let localctx = new Operadores_signoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, PatitoParserParser.RULE_operadores_signo);
	    try {
	        this.state = 323;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 320;
	            this.match(PatitoParserParser.PLUS);
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 321;
	            this.match(PatitoParserParser.MINUS);
	            break;
	        case 12:
	        case 13:
	        case 15:
	            this.enterOuterAlt(localctx, 3);

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operandos_factor() {
	    let localctx = new Operandos_factorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, PatitoParserParser.RULE_operandos_factor);
	    try {
	        this.state = 327;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 325;
	            this.match(PatitoParserParser.ID);
	            break;
	        case 12:
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 326;
	            this.cte();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cte() {
	    let localctx = new CteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, PatitoParserParser.RULE_cte);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 329;
	        _la = this._input.LA(1);
	        if(!(_la===12 || _la===13)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

PatitoParserParser.EOF = antlr4.Token.EOF;
PatitoParserParser.PROGRAM = 1;
PatitoParserParser.VARS = 2;
PatitoParserParser.ENTERO = 3;
PatitoParserParser.FLOTANTE = 4;
PatitoParserParser.NULA = 5;
PatitoParserParser.SI = 6;
PatitoParserParser.SINO = 7;
PatitoParserParser.MIENTRAS = 8;
PatitoParserParser.HAZ = 9;
PatitoParserParser.INICIO = 10;
PatitoParserParser.FIN = 11;
PatitoParserParser.CTE_ENT = 12;
PatitoParserParser.CTE_FLOT = 13;
PatitoParserParser.ESCRIBE = 14;
PatitoParserParser.ID = 15;
PatitoParserParser.LETRERO = 16;
PatitoParserParser.SEMICOLON = 17;
PatitoParserParser.COLON = 18;
PatitoParserParser.COMMA = 19;
PatitoParserParser.LPAR = 20;
PatitoParserParser.RPAR = 21;
PatitoParserParser.LBRACE = 22;
PatitoParserParser.RBRACE = 23;
PatitoParserParser.ASSIGN = 24;
PatitoParserParser.GT = 25;
PatitoParserParser.LT = 26;
PatitoParserParser.NEQ = 27;
PatitoParserParser.EQ = 28;
PatitoParserParser.PLUS = 29;
PatitoParserParser.MINUS = 30;
PatitoParserParser.MULT = 31;
PatitoParserParser.DIV = 32;
PatitoParserParser.WS = 33;

PatitoParserParser.RULE_programa = 0;
PatitoParserParser.RULE_tiene_vars = 1;
PatitoParserParser.RULE_vars = 2;
PatitoParserParser.RULE_mas_vars = 3;
PatitoParserParser.RULE_lista_vars = 4;
PatitoParserParser.RULE_lista_ids = 5;
PatitoParserParser.RULE_mas_ids = 6;
PatitoParserParser.RULE_lista_funcs = 7;
PatitoParserParser.RULE_funcs = 8;
PatitoParserParser.RULE_lista_params = 9;
PatitoParserParser.RULE_mas_params = 10;
PatitoParserParser.RULE_param = 11;
PatitoParserParser.RULE_tipo = 12;
PatitoParserParser.RULE_cuerpo = 13;
PatitoParserParser.RULE_lista_estatutos = 14;
PatitoParserParser.RULE_estatuto = 15;
PatitoParserParser.RULE_asigna = 16;
PatitoParserParser.RULE_condicion = 17;
PatitoParserParser.RULE_sino = 18;
PatitoParserParser.RULE_ciclo = 19;
PatitoParserParser.RULE_llamada = 20;
PatitoParserParser.RULE_lista_expresiones = 21;
PatitoParserParser.RULE_mas_expresiones = 22;
PatitoParserParser.RULE_imprime = 23;
PatitoParserParser.RULE_lista_impresiones = 24;
PatitoParserParser.RULE_mas_impresiones = 25;
PatitoParserParser.RULE_imprimibles = 26;
PatitoParserParser.RULE_expresion = 27;
PatitoParserParser.RULE_comparador = 28;
PatitoParserParser.RULE_exp = 29;
PatitoParserParser.RULE_operaciones_signo = 30;
PatitoParserParser.RULE_termino = 31;
PatitoParserParser.RULE_operaciones_factor = 32;
PatitoParserParser.RULE_factor = 33;
PatitoParserParser.RULE_operadores_signo = 34;
PatitoParserParser.RULE_operandos_factor = 35;
PatitoParserParser.RULE_cte = 36;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_programa;
        this._PROGRAM = null;
    }

	PROGRAM() {
	    return this.getToken(PatitoParserParser.PROGRAM, 0);
	};

	ID() {
	    return this.getToken(PatitoParserParser.ID, 0);
	};

	SEMICOLON() {
	    return this.getToken(PatitoParserParser.SEMICOLON, 0);
	};

	tiene_vars() {
	    return this.getTypedRuleContext(Tiene_varsContext,0);
	};

	lista_funcs() {
	    return this.getTypedRuleContext(Lista_funcsContext,0);
	};

	INICIO() {
	    return this.getToken(PatitoParserParser.INICIO, 0);
	};

	cuerpo() {
	    return this.getTypedRuleContext(CuerpoContext,0);
	};

	FIN() {
	    return this.getToken(PatitoParserParser.FIN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitPrograma(this);
		}
	}


}



class Tiene_varsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_tiene_vars;
    }

	vars() {
	    return this.getTypedRuleContext(VarsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterTiene_vars(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitTiene_vars(this);
		}
	}


}



class VarsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_vars;
    }

	VARS() {
	    return this.getToken(PatitoParserParser.VARS, 0);
	};

	lista_vars() {
	    return this.getTypedRuleContext(Lista_varsContext,0);
	};

	mas_vars() {
	    return this.getTypedRuleContext(Mas_varsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterVars(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitVars(this);
		}
	}


}



class Mas_varsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_mas_vars;
    }

	lista_vars() {
	    return this.getTypedRuleContext(Lista_varsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterMas_vars(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitMas_vars(this);
		}
	}


}



class Lista_varsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_lista_vars;
        this._lista_ids = null;
        this._tipo = null;
    }

	lista_ids() {
	    return this.getTypedRuleContext(Lista_idsContext,0);
	};

	COLON() {
	    return this.getToken(PatitoParserParser.COLON, 0);
	};

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	SEMICOLON() {
	    return this.getToken(PatitoParserParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterLista_vars(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitLista_vars(this);
		}
	}


}



class Lista_idsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_lista_ids;
    }

	ID() {
	    return this.getToken(PatitoParserParser.ID, 0);
	};

	mas_ids() {
	    return this.getTypedRuleContext(Mas_idsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterLista_ids(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitLista_ids(this);
		}
	}


}



class Mas_idsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_mas_ids;
    }

	COMMA() {
	    return this.getToken(PatitoParserParser.COMMA, 0);
	};

	ID() {
	    return this.getToken(PatitoParserParser.ID, 0);
	};

	mas_ids() {
	    return this.getTypedRuleContext(Mas_idsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterMas_ids(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitMas_ids(this);
		}
	}


}



class Lista_funcsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_lista_funcs;
    }

	funcs() {
	    return this.getTypedRuleContext(FuncsContext,0);
	};

	lista_funcs() {
	    return this.getTypedRuleContext(Lista_funcsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterLista_funcs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitLista_funcs(this);
		}
	}


}



class FuncsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_funcs;
        this._NULA = null;
        this._ID = null;
    }

	NULA() {
	    return this.getToken(PatitoParserParser.NULA, 0);
	};

	ID() {
	    return this.getToken(PatitoParserParser.ID, 0);
	};

	LPAR() {
	    return this.getToken(PatitoParserParser.LPAR, 0);
	};

	lista_params() {
	    return this.getTypedRuleContext(Lista_paramsContext,0);
	};

	RPAR() {
	    return this.getToken(PatitoParserParser.RPAR, 0);
	};

	LBRACE() {
	    return this.getToken(PatitoParserParser.LBRACE, 0);
	};

	tiene_vars() {
	    return this.getTypedRuleContext(Tiene_varsContext,0);
	};

	cuerpo() {
	    return this.getTypedRuleContext(CuerpoContext,0);
	};

	RBRACE() {
	    return this.getToken(PatitoParserParser.RBRACE, 0);
	};

	SEMICOLON() {
	    return this.getToken(PatitoParserParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterFuncs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitFuncs(this);
		}
	}


}



class Lista_paramsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_lista_params;
    }

	param() {
	    return this.getTypedRuleContext(ParamContext,0);
	};

	mas_params() {
	    return this.getTypedRuleContext(Mas_paramsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterLista_params(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitLista_params(this);
		}
	}


}



class Mas_paramsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_mas_params;
    }

	COMMA() {
	    return this.getToken(PatitoParserParser.COMMA, 0);
	};

	param() {
	    return this.getTypedRuleContext(ParamContext,0);
	};

	mas_params() {
	    return this.getTypedRuleContext(Mas_paramsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterMas_params(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitMas_params(this);
		}
	}


}



class ParamContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_param;
        this._ID = null;
        this._tipo = null;
    }

	ID() {
	    return this.getToken(PatitoParserParser.ID, 0);
	};

	COLON() {
	    return this.getToken(PatitoParserParser.COLON, 0);
	};

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterParam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitParam(this);
		}
	}


}



class TipoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_tipo;
    }

	ENTERO() {
	    return this.getToken(PatitoParserParser.ENTERO, 0);
	};

	FLOTANTE() {
	    return this.getToken(PatitoParserParser.FLOTANTE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterTipo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitTipo(this);
		}
	}


}



class CuerpoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_cuerpo;
    }

	LBRACE() {
	    return this.getToken(PatitoParserParser.LBRACE, 0);
	};

	lista_estatutos() {
	    return this.getTypedRuleContext(Lista_estatutosContext,0);
	};

	RBRACE() {
	    return this.getToken(PatitoParserParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterCuerpo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitCuerpo(this);
		}
	}


}



class Lista_estatutosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_lista_estatutos;
    }

	estatuto() {
	    return this.getTypedRuleContext(EstatutoContext,0);
	};

	lista_estatutos() {
	    return this.getTypedRuleContext(Lista_estatutosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterLista_estatutos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitLista_estatutos(this);
		}
	}


}



class EstatutoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_estatuto;
    }

	asigna() {
	    return this.getTypedRuleContext(AsignaContext,0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	ciclo() {
	    return this.getTypedRuleContext(CicloContext,0);
	};

	llamada() {
	    return this.getTypedRuleContext(LlamadaContext,0);
	};

	imprime() {
	    return this.getTypedRuleContext(ImprimeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterEstatuto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitEstatuto(this);
		}
	}


}



class AsignaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_asigna;
        this._ID = null;
        this._ASSIGN = null;
    }

	ID() {
	    return this.getToken(PatitoParserParser.ID, 0);
	};

	ASSIGN() {
	    return this.getToken(PatitoParserParser.ASSIGN, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	SEMICOLON() {
	    return this.getToken(PatitoParserParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterAsigna(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitAsigna(this);
		}
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_condicion;
    }

	SI() {
	    return this.getToken(PatitoParserParser.SI, 0);
	};

	LPAR() {
	    return this.getToken(PatitoParserParser.LPAR, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	RPAR() {
	    return this.getToken(PatitoParserParser.RPAR, 0);
	};

	cuerpo() {
	    return this.getTypedRuleContext(CuerpoContext,0);
	};

	SEMICOLON() {
	    return this.getToken(PatitoParserParser.SEMICOLON, 0);
	};

	sino = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SinoContext);
	    } else {
	        return this.getTypedRuleContext(SinoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitCondicion(this);
		}
	}


}



class SinoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_sino;
    }

	SINO() {
	    return this.getToken(PatitoParserParser.SINO, 0);
	};

	cuerpo() {
	    return this.getTypedRuleContext(CuerpoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterSino(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitSino(this);
		}
	}


}



class CicloContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_ciclo;
    }

	MIENTRAS() {
	    return this.getToken(PatitoParserParser.MIENTRAS, 0);
	};

	LPAR() {
	    return this.getToken(PatitoParserParser.LPAR, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	RPAR() {
	    return this.getToken(PatitoParserParser.RPAR, 0);
	};

	HAZ() {
	    return this.getToken(PatitoParserParser.HAZ, 0);
	};

	cuerpo() {
	    return this.getTypedRuleContext(CuerpoContext,0);
	};

	SEMICOLON() {
	    return this.getToken(PatitoParserParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterCiclo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitCiclo(this);
		}
	}


}



class LlamadaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_llamada;
        this._ID = null;
    }

	ID() {
	    return this.getToken(PatitoParserParser.ID, 0);
	};

	LPAR() {
	    return this.getToken(PatitoParserParser.LPAR, 0);
	};

	RPAR() {
	    return this.getToken(PatitoParserParser.RPAR, 0);
	};

	SEMICOLON() {
	    return this.getToken(PatitoParserParser.SEMICOLON, 0);
	};

	lista_expresiones = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Lista_expresionesContext);
	    } else {
	        return this.getTypedRuleContext(Lista_expresionesContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterLlamada(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitLlamada(this);
		}
	}


}



class Lista_expresionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_lista_expresiones;
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	mas_expresiones = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Mas_expresionesContext);
	    } else {
	        return this.getTypedRuleContext(Mas_expresionesContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterLista_expresiones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitLista_expresiones(this);
		}
	}


}



class Mas_expresionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_mas_expresiones;
    }

	COMMA() {
	    return this.getToken(PatitoParserParser.COMMA, 0);
	};

	lista_expresiones = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Lista_expresionesContext);
	    } else {
	        return this.getTypedRuleContext(Lista_expresionesContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterMas_expresiones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitMas_expresiones(this);
		}
	}


}



class ImprimeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_imprime;
    }

	ESCRIBE() {
	    return this.getToken(PatitoParserParser.ESCRIBE, 0);
	};

	LPAR() {
	    return this.getToken(PatitoParserParser.LPAR, 0);
	};

	lista_impresiones() {
	    return this.getTypedRuleContext(Lista_impresionesContext,0);
	};

	RPAR() {
	    return this.getToken(PatitoParserParser.RPAR, 0);
	};

	SEMICOLON() {
	    return this.getToken(PatitoParserParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterImprime(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitImprime(this);
		}
	}


}



class Lista_impresionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_lista_impresiones;
    }

	imprimibles() {
	    return this.getTypedRuleContext(ImprimiblesContext,0);
	};

	mas_impresiones() {
	    return this.getTypedRuleContext(Mas_impresionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterLista_impresiones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitLista_impresiones(this);
		}
	}


}



class Mas_impresionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_mas_impresiones;
    }

	COMMA() {
	    return this.getToken(PatitoParserParser.COMMA, 0);
	};

	imprimibles() {
	    return this.getTypedRuleContext(ImprimiblesContext,0);
	};

	mas_impresiones() {
	    return this.getTypedRuleContext(Mas_impresionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterMas_impresiones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitMas_impresiones(this);
		}
	}


}



class ImprimiblesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_imprimibles;
        this._LETRERO = null;
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	LETRERO() {
	    return this.getToken(PatitoParserParser.LETRERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterImprimibles(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitImprimibles(this);
		}
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_expresion;
        this._comparador = null;
    }

	exp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpContext);
	    } else {
	        return this.getTypedRuleContext(ExpContext,i);
	    }
	};

	comparador() {
	    return this.getTypedRuleContext(ComparadorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitExpresion(this);
		}
	}


}



class ComparadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_comparador;
    }

	LT() {
	    return this.getToken(PatitoParserParser.LT, 0);
	};

	GT() {
	    return this.getToken(PatitoParserParser.GT, 0);
	};

	EQ() {
	    return this.getToken(PatitoParserParser.EQ, 0);
	};

	NEQ() {
	    return this.getToken(PatitoParserParser.NEQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterComparador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitComparador(this);
		}
	}


}



class ExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_exp;
    }

	termino() {
	    return this.getTypedRuleContext(TerminoContext,0);
	};

	operaciones_signo = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Operaciones_signoContext);
	    } else {
	        return this.getTypedRuleContext(Operaciones_signoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitExp(this);
		}
	}


}



class Operaciones_signoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_operaciones_signo;
        this._PLUS = null;
        this._MINUS = null;
    }

	PLUS() {
	    return this.getToken(PatitoParserParser.PLUS, 0);
	};

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	MINUS() {
	    return this.getToken(PatitoParserParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterOperaciones_signo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitOperaciones_signo(this);
		}
	}


}



class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_termino;
    }

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	operaciones_factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Operaciones_factorContext);
	    } else {
	        return this.getTypedRuleContext(Operaciones_factorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterTermino(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitTermino(this);
		}
	}


}



class Operaciones_factorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_operaciones_factor;
        this._MULT = null;
        this._DIV = null;
    }

	MULT() {
	    return this.getToken(PatitoParserParser.MULT, 0);
	};

	termino() {
	    return this.getTypedRuleContext(TerminoContext,0);
	};

	DIV() {
	    return this.getToken(PatitoParserParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterOperaciones_factor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitOperaciones_factor(this);
		}
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_factor;
        this._LPAR = null;
        this._operadores_signo = null;
        this._operandos_factor = null;
    }

	LPAR() {
	    return this.getToken(PatitoParserParser.LPAR, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	RPAR() {
	    return this.getToken(PatitoParserParser.RPAR, 0);
	};

	operadores_signo() {
	    return this.getTypedRuleContext(Operadores_signoContext,0);
	};

	operandos_factor() {
	    return this.getTypedRuleContext(Operandos_factorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitFactor(this);
		}
	}


}



class Operadores_signoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_operadores_signo;
    }

	PLUS() {
	    return this.getToken(PatitoParserParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(PatitoParserParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterOperadores_signo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitOperadores_signo(this);
		}
	}


}



class Operandos_factorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_operandos_factor;
    }

	ID() {
	    return this.getToken(PatitoParserParser.ID, 0);
	};

	cte() {
	    return this.getTypedRuleContext(CteContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterOperandos_factor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitOperandos_factor(this);
		}
	}


}



class CteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_cte;
    }

	CTE_ENT() {
	    return this.getToken(PatitoParserParser.CTE_ENT, 0);
	};

	CTE_FLOT() {
	    return this.getToken(PatitoParserParser.CTE_FLOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterCte(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitCte(this);
		}
	}


}




PatitoParserParser.ProgramaContext = ProgramaContext; 
PatitoParserParser.Tiene_varsContext = Tiene_varsContext; 
PatitoParserParser.VarsContext = VarsContext; 
PatitoParserParser.Mas_varsContext = Mas_varsContext; 
PatitoParserParser.Lista_varsContext = Lista_varsContext; 
PatitoParserParser.Lista_idsContext = Lista_idsContext; 
PatitoParserParser.Mas_idsContext = Mas_idsContext; 
PatitoParserParser.Lista_funcsContext = Lista_funcsContext; 
PatitoParserParser.FuncsContext = FuncsContext; 
PatitoParserParser.Lista_paramsContext = Lista_paramsContext; 
PatitoParserParser.Mas_paramsContext = Mas_paramsContext; 
PatitoParserParser.ParamContext = ParamContext; 
PatitoParserParser.TipoContext = TipoContext; 
PatitoParserParser.CuerpoContext = CuerpoContext; 
PatitoParserParser.Lista_estatutosContext = Lista_estatutosContext; 
PatitoParserParser.EstatutoContext = EstatutoContext; 
PatitoParserParser.AsignaContext = AsignaContext; 
PatitoParserParser.CondicionContext = CondicionContext; 
PatitoParserParser.SinoContext = SinoContext; 
PatitoParserParser.CicloContext = CicloContext; 
PatitoParserParser.LlamadaContext = LlamadaContext; 
PatitoParserParser.Lista_expresionesContext = Lista_expresionesContext; 
PatitoParserParser.Mas_expresionesContext = Mas_expresionesContext; 
PatitoParserParser.ImprimeContext = ImprimeContext; 
PatitoParserParser.Lista_impresionesContext = Lista_impresionesContext; 
PatitoParserParser.Mas_impresionesContext = Mas_impresionesContext; 
PatitoParserParser.ImprimiblesContext = ImprimiblesContext; 
PatitoParserParser.ExpresionContext = ExpresionContext; 
PatitoParserParser.ComparadorContext = ComparadorContext; 
PatitoParserParser.ExpContext = ExpContext; 
PatitoParserParser.Operaciones_signoContext = Operaciones_signoContext; 
PatitoParserParser.TerminoContext = TerminoContext; 
PatitoParserParser.Operaciones_factorContext = Operaciones_factorContext; 
PatitoParserParser.FactorContext = FactorContext; 
PatitoParserParser.Operadores_signoContext = Operadores_signoContext; 
PatitoParserParser.Operandos_factorContext = Operandos_factorContext; 
PatitoParserParser.CteContext = CteContext; 
