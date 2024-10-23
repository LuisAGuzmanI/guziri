// Generated from PatitoParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import PatitoParserListener from './PatitoParserListener.js';
const serializedATN = [4,1,33,287,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,3,1,86,
8,1,1,2,1,2,1,2,1,2,1,3,1,3,3,3,94,8,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,
6,1,6,1,6,1,6,3,6,108,8,6,1,7,1,7,1,7,1,7,3,7,114,8,7,1,8,1,8,1,8,1,8,1,
8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,3,9,131,8,9,1,10,1,10,1,10,1,10,
1,10,3,10,138,8,10,1,11,1,11,1,11,1,11,1,12,1,12,1,13,1,13,1,13,1,13,1,14,
1,14,1,14,1,14,3,14,154,8,14,1,15,1,15,1,15,1,15,1,15,3,15,161,8,15,1,16,
1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,
18,3,18,179,8,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,
1,20,1,20,1,20,1,21,1,21,1,21,1,21,3,21,199,8,21,1,22,1,22,1,22,1,22,1,22,
3,22,206,8,22,1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,3,24,218,
8,24,1,25,1,25,1,25,1,25,1,25,3,25,225,8,25,1,26,1,26,3,26,229,8,26,1,27,
1,27,1,27,1,27,3,27,235,8,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,3,28,
245,8,28,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,3,30,255,8,30,1,31,1,31,
1,31,1,32,1,32,1,32,1,32,1,32,3,32,265,8,32,1,33,1,33,1,33,1,33,1,33,1,33,
1,33,3,33,274,8,33,1,34,1,34,1,34,3,34,279,8,34,1,35,1,35,3,35,283,8,35,
1,36,1,36,1,36,0,0,37,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,0,2,1,0,3,4,1,0,12,
13,278,0,74,1,0,0,0,2,85,1,0,0,0,4,87,1,0,0,0,6,93,1,0,0,0,8,95,1,0,0,0,
10,100,1,0,0,0,12,107,1,0,0,0,14,113,1,0,0,0,16,115,1,0,0,0,18,130,1,0,0,
0,20,137,1,0,0,0,22,139,1,0,0,0,24,143,1,0,0,0,26,145,1,0,0,0,28,153,1,0,
0,0,30,160,1,0,0,0,32,162,1,0,0,0,34,167,1,0,0,0,36,178,1,0,0,0,38,180,1,
0,0,0,40,188,1,0,0,0,42,198,1,0,0,0,44,205,1,0,0,0,46,207,1,0,0,0,48,217,
1,0,0,0,50,224,1,0,0,0,52,228,1,0,0,0,54,234,1,0,0,0,56,244,1,0,0,0,58,246,
1,0,0,0,60,254,1,0,0,0,62,256,1,0,0,0,64,264,1,0,0,0,66,273,1,0,0,0,68,278,
1,0,0,0,70,282,1,0,0,0,72,284,1,0,0,0,74,75,5,1,0,0,75,76,5,15,0,0,76,77,
5,17,0,0,77,78,3,2,1,0,78,79,3,14,7,0,79,80,5,10,0,0,80,81,3,26,13,0,81,
82,5,11,0,0,82,1,1,0,0,0,83,86,3,4,2,0,84,86,1,0,0,0,85,83,1,0,0,0,85,84,
1,0,0,0,86,3,1,0,0,0,87,88,5,2,0,0,88,89,3,8,4,0,89,90,3,6,3,0,90,5,1,0,
0,0,91,94,3,8,4,0,92,94,1,0,0,0,93,91,1,0,0,0,93,92,1,0,0,0,94,7,1,0,0,0,
95,96,3,10,5,0,96,97,5,18,0,0,97,98,3,24,12,0,98,99,5,17,0,0,99,9,1,0,0,
0,100,101,5,15,0,0,101,102,3,12,6,0,102,11,1,0,0,0,103,104,5,19,0,0,104,
105,5,15,0,0,105,108,3,12,6,0,106,108,1,0,0,0,107,103,1,0,0,0,107,106,1,
0,0,0,108,13,1,0,0,0,109,110,3,16,8,0,110,111,3,14,7,0,111,114,1,0,0,0,112,
114,1,0,0,0,113,109,1,0,0,0,113,112,1,0,0,0,114,15,1,0,0,0,115,116,5,5,0,
0,116,117,5,15,0,0,117,118,5,20,0,0,118,119,3,18,9,0,119,120,5,21,0,0,120,
121,5,22,0,0,121,122,3,2,1,0,122,123,3,26,13,0,123,124,5,23,0,0,124,125,
5,17,0,0,125,17,1,0,0,0,126,127,3,22,11,0,127,128,3,20,10,0,128,131,1,0,
0,0,129,131,1,0,0,0,130,126,1,0,0,0,130,129,1,0,0,0,131,19,1,0,0,0,132,133,
5,19,0,0,133,134,3,22,11,0,134,135,3,20,10,0,135,138,1,0,0,0,136,138,1,0,
0,0,137,132,1,0,0,0,137,136,1,0,0,0,138,21,1,0,0,0,139,140,5,15,0,0,140,
141,5,18,0,0,141,142,3,24,12,0,142,23,1,0,0,0,143,144,7,0,0,0,144,25,1,0,
0,0,145,146,5,22,0,0,146,147,3,28,14,0,147,148,5,23,0,0,148,27,1,0,0,0,149,
150,3,30,15,0,150,151,3,28,14,0,151,154,1,0,0,0,152,154,1,0,0,0,153,149,
1,0,0,0,153,152,1,0,0,0,154,29,1,0,0,0,155,161,3,32,16,0,156,161,3,34,17,
0,157,161,3,38,19,0,158,161,3,40,20,0,159,161,3,46,23,0,160,155,1,0,0,0,
160,156,1,0,0,0,160,157,1,0,0,0,160,158,1,0,0,0,160,159,1,0,0,0,161,31,1,
0,0,0,162,163,5,15,0,0,163,164,5,24,0,0,164,165,3,54,27,0,165,166,5,17,0,
0,166,33,1,0,0,0,167,168,5,6,0,0,168,169,5,20,0,0,169,170,3,54,27,0,170,
171,5,21,0,0,171,172,3,26,13,0,172,173,3,36,18,0,173,174,5,17,0,0,174,35,
1,0,0,0,175,176,5,7,0,0,176,179,3,26,13,0,177,179,1,0,0,0,178,175,1,0,0,
0,178,177,1,0,0,0,179,37,1,0,0,0,180,181,5,8,0,0,181,182,5,20,0,0,182,183,
3,54,27,0,183,184,5,21,0,0,184,185,5,9,0,0,185,186,3,26,13,0,186,187,5,17,
0,0,187,39,1,0,0,0,188,189,5,15,0,0,189,190,5,20,0,0,190,191,3,42,21,0,191,
192,5,21,0,0,192,193,5,17,0,0,193,41,1,0,0,0,194,195,3,54,27,0,195,196,3,
44,22,0,196,199,1,0,0,0,197,199,1,0,0,0,198,194,1,0,0,0,198,197,1,0,0,0,
199,43,1,0,0,0,200,201,5,19,0,0,201,202,3,54,27,0,202,203,3,44,22,0,203,
206,1,0,0,0,204,206,1,0,0,0,205,200,1,0,0,0,205,204,1,0,0,0,206,45,1,0,0,
0,207,208,5,14,0,0,208,209,5,20,0,0,209,210,3,48,24,0,210,211,5,21,0,0,211,
212,5,17,0,0,212,47,1,0,0,0,213,214,3,52,26,0,214,215,3,50,25,0,215,218,
1,0,0,0,216,218,1,0,0,0,217,213,1,0,0,0,217,216,1,0,0,0,218,49,1,0,0,0,219,
220,5,19,0,0,220,221,3,52,26,0,221,222,3,50,25,0,222,225,1,0,0,0,223,225,
1,0,0,0,224,219,1,0,0,0,224,223,1,0,0,0,225,51,1,0,0,0,226,229,3,54,27,0,
227,229,5,16,0,0,228,226,1,0,0,0,228,227,1,0,0,0,229,53,1,0,0,0,230,231,
3,58,29,0,231,232,3,56,28,0,232,235,1,0,0,0,233,235,3,58,29,0,234,230,1,
0,0,0,234,233,1,0,0,0,235,55,1,0,0,0,236,237,5,26,0,0,237,245,3,58,29,0,
238,239,5,25,0,0,239,245,3,58,29,0,240,241,5,28,0,0,241,245,3,58,29,0,242,
243,5,27,0,0,243,245,3,58,29,0,244,236,1,0,0,0,244,238,1,0,0,0,244,240,1,
0,0,0,244,242,1,0,0,0,245,57,1,0,0,0,246,247,3,62,31,0,247,248,3,60,30,0,
248,59,1,0,0,0,249,250,5,29,0,0,250,255,3,58,29,0,251,252,5,30,0,0,252,255,
3,58,29,0,253,255,1,0,0,0,254,249,1,0,0,0,254,251,1,0,0,0,254,253,1,0,0,
0,255,61,1,0,0,0,256,257,3,66,33,0,257,258,3,64,32,0,258,63,1,0,0,0,259,
260,5,31,0,0,260,265,3,66,33,0,261,262,5,32,0,0,262,265,3,66,33,0,263,265,
1,0,0,0,264,259,1,0,0,0,264,261,1,0,0,0,264,263,1,0,0,0,265,65,1,0,0,0,266,
267,5,20,0,0,267,268,3,54,27,0,268,269,5,21,0,0,269,274,1,0,0,0,270,271,
3,68,34,0,271,272,3,70,35,0,272,274,1,0,0,0,273,266,1,0,0,0,273,270,1,0,
0,0,274,67,1,0,0,0,275,279,5,29,0,0,276,279,5,30,0,0,277,279,1,0,0,0,278,
275,1,0,0,0,278,276,1,0,0,0,278,277,1,0,0,0,279,69,1,0,0,0,280,283,5,15,
0,0,281,283,3,72,36,0,282,280,1,0,0,0,282,281,1,0,0,0,283,71,1,0,0,0,284,
285,7,1,0,0,285,73,1,0,0,0,21,85,93,107,113,130,137,153,160,178,198,205,
217,224,228,234,244,254,264,273,278,282];


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
                         "condicion", "tiene_sino", "ciclo", "llamada", 
                         "lista_expresiones", "mas_expresiones", "imprime", 
                         "lista_impresiones", "mas_impresiones", "imprimibles", 
                         "expresion", "comparador", "exp", "operaciones_signo", 
                         "termino", "operaciones_factor", "factor", "operadores_signo", 
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
	        this.state = 74;
	        this.match(PatitoParserParser.PROGRAM);
	        this.state = 75;
	        this.match(PatitoParserParser.ID);
	        this.state = 76;
	        this.match(PatitoParserParser.SEMICOLON);
	        this.state = 77;
	        this.tiene_vars();
	        this.state = 78;
	        this.lista_funcs();
	        this.state = 79;
	        this.match(PatitoParserParser.INICIO);
	        this.state = 80;
	        this.cuerpo();
	        this.state = 81;
	        this.match(PatitoParserParser.FIN);
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
	        this.state = 85;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 83;
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
	        this.state = 87;
	        this.match(PatitoParserParser.VARS);
	        this.state = 88;
	        this.lista_vars();
	        this.state = 89;
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
	        this.state = 93;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 91;
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
	        this.state = 95;
	        this.lista_ids();
	        this.state = 96;
	        this.match(PatitoParserParser.COLON);
	        this.state = 97;
	        this.tipo();
	        this.state = 98;
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
	        this.state = 100;
	        this.match(PatitoParserParser.ID);
	        this.state = 101;
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
	        this.state = 107;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 103;
	            this.match(PatitoParserParser.COMMA);
	            this.state = 104;
	            this.match(PatitoParserParser.ID);
	            this.state = 105;
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
	        this.state = 113;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 109;
	            this.funcs();
	            this.state = 110;
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
	        this.state = 115;
	        this.match(PatitoParserParser.NULA);
	        this.state = 116;
	        this.match(PatitoParserParser.ID);
	        this.state = 117;
	        this.match(PatitoParserParser.LPAR);
	        this.state = 118;
	        this.lista_params();
	        this.state = 119;
	        this.match(PatitoParserParser.RPAR);
	        this.state = 120;
	        this.match(PatitoParserParser.LBRACE);
	        this.state = 121;
	        this.tiene_vars();
	        this.state = 122;
	        this.cuerpo();
	        this.state = 123;
	        this.match(PatitoParserParser.RBRACE);
	        this.state = 124;
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



	lista_params() {
	    let localctx = new Lista_paramsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, PatitoParserParser.RULE_lista_params);
	    try {
	        this.state = 130;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 126;
	            this.param();
	            this.state = 127;
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
	        this.state = 137;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 132;
	            this.match(PatitoParserParser.COMMA);
	            this.state = 133;
	            this.param();
	            this.state = 134;
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
	        this.state = 139;
	        this.match(PatitoParserParser.ID);
	        this.state = 140;
	        this.match(PatitoParserParser.COLON);
	        this.state = 141;
	        this.tipo();
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
	        this.state = 143;
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
	        this.state = 145;
	        this.match(PatitoParserParser.LBRACE);
	        this.state = 146;
	        this.lista_estatutos();
	        this.state = 147;
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
	        this.state = 153;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	        case 8:
	        case 14:
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 149;
	            this.estatuto();
	            this.state = 150;
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
	        this.state = 160;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 155;
	            this.asigna();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 156;
	            this.condicion();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 157;
	            this.ciclo();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 158;
	            this.llamada();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 159;
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
	        this.state = 162;
	        this.match(PatitoParserParser.ID);
	        this.state = 163;
	        this.match(PatitoParserParser.ASSIGN);
	        this.state = 164;
	        this.expresion();
	        this.state = 165;
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.match(PatitoParserParser.SI);
	        this.state = 168;
	        this.match(PatitoParserParser.LPAR);
	        this.state = 169;
	        this.expresion();
	        this.state = 170;
	        this.match(PatitoParserParser.RPAR);
	        this.state = 171;
	        this.cuerpo();
	        this.state = 172;
	        this.tiene_sino();
	        this.state = 173;
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



	tiene_sino() {
	    let localctx = new Tiene_sinoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, PatitoParserParser.RULE_tiene_sino);
	    try {
	        this.state = 178;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 175;
	            this.match(PatitoParserParser.SINO);
	            this.state = 176;
	            this.cuerpo();
	            break;
	        case 17:
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



	ciclo() {
	    let localctx = new CicloContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, PatitoParserParser.RULE_ciclo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180;
	        this.match(PatitoParserParser.MIENTRAS);
	        this.state = 181;
	        this.match(PatitoParserParser.LPAR);
	        this.state = 182;
	        this.expresion();
	        this.state = 183;
	        this.match(PatitoParserParser.RPAR);
	        this.state = 184;
	        this.match(PatitoParserParser.HAZ);
	        this.state = 185;
	        this.cuerpo();
	        this.state = 186;
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



	llamada() {
	    let localctx = new LlamadaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, PatitoParserParser.RULE_llamada);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 188;
	        this.match(PatitoParserParser.ID);
	        this.state = 189;
	        this.match(PatitoParserParser.LPAR);
	        this.state = 190;
	        this.lista_expresiones();
	        this.state = 191;
	        this.match(PatitoParserParser.RPAR);
	        this.state = 192;
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
	        this.state = 198;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	        case 13:
	        case 15:
	        case 20:
	        case 29:
	        case 30:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 194;
	            this.expresion();
	            this.state = 195;
	            this.mas_expresiones();
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



	mas_expresiones() {
	    let localctx = new Mas_expresionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, PatitoParserParser.RULE_mas_expresiones);
	    try {
	        this.state = 205;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 200;
	            this.match(PatitoParserParser.COMMA);
	            this.state = 201;
	            this.expresion();
	            this.state = 202;
	            this.mas_expresiones();
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



	imprime() {
	    let localctx = new ImprimeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, PatitoParserParser.RULE_imprime);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        this.match(PatitoParserParser.ESCRIBE);
	        this.state = 208;
	        this.match(PatitoParserParser.LPAR);
	        this.state = 209;
	        this.lista_impresiones();
	        this.state = 210;
	        this.match(PatitoParserParser.RPAR);
	        this.state = 211;
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
	        this.state = 217;
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
	            this.state = 213;
	            this.imprimibles();
	            this.state = 214;
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
	        this.state = 224;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 219;
	            this.match(PatitoParserParser.COMMA);
	            this.state = 220;
	            this.imprimibles();
	            this.state = 221;
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
	        this.state = 228;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	        case 13:
	        case 15:
	        case 20:
	        case 29:
	        case 30:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 226;
	            this.expresion();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 227;
	            this.match(PatitoParserParser.LETRERO);
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
	        this.state = 234;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 230;
	            this.exp();
	            this.state = 231;
	            this.comparador();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 233;
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
	    try {
	        this.state = 244;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 26:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 236;
	            this.match(PatitoParserParser.LT);
	            this.state = 237;
	            this.exp();
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 238;
	            this.match(PatitoParserParser.GT);
	            this.state = 239;
	            this.exp();
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 240;
	            this.match(PatitoParserParser.EQ);
	            this.state = 241;
	            this.exp();
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 242;
	            this.match(PatitoParserParser.NEQ);
	            this.state = 243;
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



	exp() {
	    let localctx = new ExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, PatitoParserParser.RULE_exp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 246;
	        this.termino();
	        this.state = 247;
	        this.operaciones_signo();
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
	        this.state = 254;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 249;
	            this.match(PatitoParserParser.PLUS);
	            this.state = 250;
	            this.exp();
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 251;
	            this.match(PatitoParserParser.MINUS);
	            this.state = 252;
	            this.exp();
	            break;
	        case 17:
	        case 19:
	        case 21:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
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



	termino() {
	    let localctx = new TerminoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, PatitoParserParser.RULE_termino);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        this.factor();
	        this.state = 257;
	        this.operaciones_factor();
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
	        this.state = 264;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 31:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 259;
	            this.match(PatitoParserParser.MULT);
	            this.state = 260;
	            this.factor();
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 261;
	            this.match(PatitoParserParser.DIV);
	            this.state = 262;
	            this.factor();
	            break;
	        case 17:
	        case 19:
	        case 21:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
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



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, PatitoParserParser.RULE_factor);
	    try {
	        this.state = 273;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 266;
	            this.match(PatitoParserParser.LPAR);
	            this.state = 267;
	            this.expresion();
	            this.state = 268;
	            this.match(PatitoParserParser.RPAR);
	            break;
	        case 12:
	        case 13:
	        case 15:
	        case 29:
	        case 30:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 270;
	            this.operadores_signo();
	            this.state = 271;
	            this.operandos_factor();
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
	        this.state = 278;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 275;
	            this.match(PatitoParserParser.PLUS);
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 276;
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
	        this.state = 282;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 280;
	            this.match(PatitoParserParser.ID);
	            break;
	        case 12:
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 281;
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
	        this.state = 284;
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
PatitoParserParser.RULE_tiene_sino = 18;
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

	tiene_sino() {
	    return this.getTypedRuleContext(Tiene_sinoContext,0);
	};

	SEMICOLON() {
	    return this.getToken(PatitoParserParser.SEMICOLON, 0);
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



class Tiene_sinoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PatitoParserParser.RULE_tiene_sino;
    }

	SINO() {
	    return this.getToken(PatitoParserParser.SINO, 0);
	};

	cuerpo() {
	    return this.getTypedRuleContext(CuerpoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.enterTiene_sino(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PatitoParserListener ) {
	        listener.exitTiene_sino(this);
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
    }

	ID() {
	    return this.getToken(PatitoParserParser.ID, 0);
	};

	LPAR() {
	    return this.getToken(PatitoParserParser.LPAR, 0);
	};

	lista_expresiones() {
	    return this.getTypedRuleContext(Lista_expresionesContext,0);
	};

	RPAR() {
	    return this.getToken(PatitoParserParser.RPAR, 0);
	};

	SEMICOLON() {
	    return this.getToken(PatitoParserParser.SEMICOLON, 0);
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

	mas_expresiones() {
	    return this.getTypedRuleContext(Mas_expresionesContext,0);
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

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	mas_expresiones() {
	    return this.getTypedRuleContext(Mas_expresionesContext,0);
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
    }

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
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

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
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

	operaciones_signo() {
	    return this.getTypedRuleContext(Operaciones_signoContext,0);
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

	operaciones_factor() {
	    return this.getTypedRuleContext(Operaciones_factorContext,0);
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
    }

	MULT() {
	    return this.getToken(PatitoParserParser.MULT, 0);
	};

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
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
PatitoParserParser.Tiene_sinoContext = Tiene_sinoContext; 
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
