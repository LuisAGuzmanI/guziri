// Generated from PatitoParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import PatitoParserListener from './PatitoParserListener.js';
const serializedATN = [4,1,33,310,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,3,
1,87,8,1,1,2,1,2,1,2,1,2,1,3,1,3,3,3,95,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,
1,5,1,5,1,6,1,6,1,6,1,6,3,6,110,8,6,1,7,1,7,1,7,1,7,3,7,116,8,7,1,8,1,8,
1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,3,9,134,8,9,1,10,
1,10,1,10,1,10,1,10,3,10,141,8,10,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,13,
1,13,1,13,1,13,1,14,1,14,1,14,1,14,3,14,158,8,14,1,15,1,15,1,15,1,15,1,15,
3,15,165,8,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,
1,17,1,17,1,17,5,17,182,8,17,10,17,12,17,185,9,17,1,17,1,17,1,17,1,18,1,
18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,
1,20,1,20,1,21,1,21,1,21,1,21,3,21,212,8,21,1,22,1,22,1,22,1,22,1,22,3,22,
219,8,22,1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,3,24,231,8,24,
1,25,1,25,1,25,1,25,1,25,3,25,238,8,25,1,26,1,26,3,26,242,8,26,1,27,1,27,
1,27,1,27,1,27,1,27,1,27,3,27,251,8,27,1,28,1,28,1,29,1,29,1,29,5,29,258,
8,29,10,29,12,29,261,9,29,1,30,1,30,1,30,1,30,1,30,1,30,3,30,269,8,30,1,
31,1,31,1,31,5,31,274,8,31,10,31,12,31,277,9,31,1,32,1,32,1,32,1,32,1,32,
1,32,3,32,285,8,32,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,3,33,
297,8,33,1,34,1,34,1,34,3,34,302,8,34,1,35,1,35,3,35,306,8,35,1,36,1,36,
1,36,0,0,37,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,
44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,0,3,1,0,3,4,1,0,25,28,1,0,12,
13,298,0,74,1,0,0,0,2,86,1,0,0,0,4,88,1,0,0,0,6,94,1,0,0,0,8,96,1,0,0,0,
10,102,1,0,0,0,12,109,1,0,0,0,14,115,1,0,0,0,16,117,1,0,0,0,18,133,1,0,0,
0,20,140,1,0,0,0,22,142,1,0,0,0,24,147,1,0,0,0,26,149,1,0,0,0,28,157,1,0,
0,0,30,164,1,0,0,0,32,166,1,0,0,0,34,174,1,0,0,0,36,189,1,0,0,0,38,193,1,
0,0,0,40,201,1,0,0,0,42,211,1,0,0,0,44,218,1,0,0,0,46,220,1,0,0,0,48,230,
1,0,0,0,50,237,1,0,0,0,52,241,1,0,0,0,54,250,1,0,0,0,56,252,1,0,0,0,58,254,
1,0,0,0,60,268,1,0,0,0,62,270,1,0,0,0,64,284,1,0,0,0,66,296,1,0,0,0,68,301,
1,0,0,0,70,305,1,0,0,0,72,307,1,0,0,0,74,75,5,1,0,0,75,76,5,15,0,0,76,77,
6,0,-1,0,77,78,5,17,0,0,78,79,3,2,1,0,79,80,3,14,7,0,80,81,5,10,0,0,81,82,
3,26,13,0,82,83,5,11,0,0,83,1,1,0,0,0,84,87,3,4,2,0,85,87,1,0,0,0,86,84,
1,0,0,0,86,85,1,0,0,0,87,3,1,0,0,0,88,89,5,2,0,0,89,90,3,8,4,0,90,91,3,6,
3,0,91,5,1,0,0,0,92,95,3,8,4,0,93,95,1,0,0,0,94,92,1,0,0,0,94,93,1,0,0,0,
95,7,1,0,0,0,96,97,3,10,5,0,97,98,5,18,0,0,98,99,3,24,12,0,99,100,6,4,-1,
0,100,101,5,17,0,0,101,9,1,0,0,0,102,103,5,15,0,0,103,104,3,12,6,0,104,11,
1,0,0,0,105,106,5,19,0,0,106,107,5,15,0,0,107,110,3,12,6,0,108,110,1,0,0,
0,109,105,1,0,0,0,109,108,1,0,0,0,110,13,1,0,0,0,111,112,3,16,8,0,112,113,
3,14,7,0,113,116,1,0,0,0,114,116,1,0,0,0,115,111,1,0,0,0,115,114,1,0,0,0,
116,15,1,0,0,0,117,118,5,5,0,0,118,119,5,15,0,0,119,120,6,8,-1,0,120,121,
5,20,0,0,121,122,3,18,9,0,122,123,5,21,0,0,123,124,5,22,0,0,124,125,3,2,
1,0,125,126,3,26,13,0,126,127,5,23,0,0,127,128,5,17,0,0,128,17,1,0,0,0,129,
130,3,22,11,0,130,131,3,20,10,0,131,134,1,0,0,0,132,134,1,0,0,0,133,129,
1,0,0,0,133,132,1,0,0,0,134,19,1,0,0,0,135,136,5,19,0,0,136,137,3,22,11,
0,137,138,3,20,10,0,138,141,1,0,0,0,139,141,1,0,0,0,140,135,1,0,0,0,140,
139,1,0,0,0,141,21,1,0,0,0,142,143,5,15,0,0,143,144,5,18,0,0,144,145,3,24,
12,0,145,146,6,11,-1,0,146,23,1,0,0,0,147,148,7,0,0,0,148,25,1,0,0,0,149,
150,5,22,0,0,150,151,3,28,14,0,151,152,5,23,0,0,152,27,1,0,0,0,153,154,3,
30,15,0,154,155,3,28,14,0,155,158,1,0,0,0,156,158,1,0,0,0,157,153,1,0,0,
0,157,156,1,0,0,0,158,29,1,0,0,0,159,165,3,32,16,0,160,165,3,34,17,0,161,
165,3,38,19,0,162,165,3,40,20,0,163,165,3,46,23,0,164,159,1,0,0,0,164,160,
1,0,0,0,164,161,1,0,0,0,164,162,1,0,0,0,164,163,1,0,0,0,165,31,1,0,0,0,166,
167,5,15,0,0,167,168,6,16,-1,0,168,169,5,24,0,0,169,170,6,16,-1,0,170,171,
3,54,27,0,171,172,6,16,-1,0,172,173,5,17,0,0,173,33,1,0,0,0,174,175,5,6,
0,0,175,176,5,20,0,0,176,177,3,54,27,0,177,178,5,21,0,0,178,179,6,17,-1,
0,179,183,3,26,13,0,180,182,3,36,18,0,181,180,1,0,0,0,182,185,1,0,0,0,183,
181,1,0,0,0,183,184,1,0,0,0,184,186,1,0,0,0,185,183,1,0,0,0,186,187,5,17,
0,0,187,188,6,17,-1,0,188,35,1,0,0,0,189,190,5,7,0,0,190,191,6,18,-1,0,191,
192,3,26,13,0,192,37,1,0,0,0,193,194,5,8,0,0,194,195,5,20,0,0,195,196,3,
54,27,0,196,197,5,21,0,0,197,198,5,9,0,0,198,199,3,26,13,0,199,200,5,17,
0,0,200,39,1,0,0,0,201,202,5,15,0,0,202,203,5,20,0,0,203,204,3,42,21,0,204,
205,5,21,0,0,205,206,5,17,0,0,206,41,1,0,0,0,207,208,3,54,27,0,208,209,3,
44,22,0,209,212,1,0,0,0,210,212,1,0,0,0,211,207,1,0,0,0,211,210,1,0,0,0,
212,43,1,0,0,0,213,214,5,19,0,0,214,215,3,54,27,0,215,216,3,44,22,0,216,
219,1,0,0,0,217,219,1,0,0,0,218,213,1,0,0,0,218,217,1,0,0,0,219,45,1,0,0,
0,220,221,5,14,0,0,221,222,5,20,0,0,222,223,3,48,24,0,223,224,5,21,0,0,224,
225,5,17,0,0,225,47,1,0,0,0,226,227,3,52,26,0,227,228,3,50,25,0,228,231,
1,0,0,0,229,231,1,0,0,0,230,226,1,0,0,0,230,229,1,0,0,0,231,49,1,0,0,0,232,
233,5,19,0,0,233,234,3,52,26,0,234,235,3,50,25,0,235,238,1,0,0,0,236,238,
1,0,0,0,237,232,1,0,0,0,237,236,1,0,0,0,238,51,1,0,0,0,239,242,3,54,27,0,
240,242,5,16,0,0,241,239,1,0,0,0,241,240,1,0,0,0,242,53,1,0,0,0,243,244,
3,58,29,0,244,245,3,56,28,0,245,246,6,27,-1,0,246,247,3,58,29,0,247,248,
6,27,-1,0,248,251,1,0,0,0,249,251,3,58,29,0,250,243,1,0,0,0,250,249,1,0,
0,0,251,55,1,0,0,0,252,253,7,1,0,0,253,57,1,0,0,0,254,255,3,62,31,0,255,
259,6,29,-1,0,256,258,3,60,30,0,257,256,1,0,0,0,258,261,1,0,0,0,259,257,
1,0,0,0,259,260,1,0,0,0,260,59,1,0,0,0,261,259,1,0,0,0,262,263,5,29,0,0,
263,264,6,30,-1,0,264,269,3,58,29,0,265,266,5,30,0,0,266,267,6,30,-1,0,267,
269,3,58,29,0,268,262,1,0,0,0,268,265,1,0,0,0,269,61,1,0,0,0,270,271,3,66,
33,0,271,275,6,31,-1,0,272,274,3,64,32,0,273,272,1,0,0,0,274,277,1,0,0,0,
275,273,1,0,0,0,275,276,1,0,0,0,276,63,1,0,0,0,277,275,1,0,0,0,278,279,5,
31,0,0,279,280,6,32,-1,0,280,285,3,62,31,0,281,282,5,32,0,0,282,283,6,32,
-1,0,283,285,3,62,31,0,284,278,1,0,0,0,284,281,1,0,0,0,285,65,1,0,0,0,286,
287,5,20,0,0,287,288,6,33,-1,0,288,289,3,54,27,0,289,290,6,33,-1,0,290,291,
5,21,0,0,291,297,1,0,0,0,292,293,3,68,34,0,293,294,3,70,35,0,294,295,6,33,
-1,0,295,297,1,0,0,0,296,286,1,0,0,0,296,292,1,0,0,0,297,67,1,0,0,0,298,
302,5,29,0,0,299,302,5,30,0,0,300,302,1,0,0,0,301,298,1,0,0,0,301,299,1,
0,0,0,301,300,1,0,0,0,302,69,1,0,0,0,303,306,5,15,0,0,304,306,3,72,36,0,
305,303,1,0,0,0,305,304,1,0,0,0,306,71,1,0,0,0,307,308,7,2,0,0,308,73,1,
0,0,0,22,86,94,109,115,133,140,157,164,183,211,218,230,237,241,250,259,268,
275,284,296,301,305];


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
	        this.state = 74;
	        localctx._PROGRAM = this.match(PatitoParserParser.PROGRAM);
	        this.state = 75;
	        localctx._ID = this.match(PatitoParserParser.ID);
	         
	        		// Sematic action #1
	        		this.currType = (localctx._PROGRAM == null ? null : localctx._PROGRAM.text);
	        		this.currFunc = (localctx._ID == null ? null : localctx._ID.text);
	        		this.FunctionDir.addFunction(this.currFunc, this.currType);
	        	
	        this.state = 77;
	        this.match(PatitoParserParser.SEMICOLON);
	        this.state = 78;
	        this.tiene_vars();
	        this.state = 79;
	        this.lista_funcs();
	        this.state = 80;
	        this.match(PatitoParserParser.INICIO);
	        this.state = 81;
	        this.cuerpo();
	        this.state = 82;
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
	        this.state = 86;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 84;
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
	        this.state = 88;
	        this.match(PatitoParserParser.VARS);
	        this.state = 89;
	        this.lista_vars();
	        this.state = 90;
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
	        this.state = 94;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 92;
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
	        this.state = 96;
	        localctx._lista_ids = this.lista_ids();
	        this.state = 97;
	        this.match(PatitoParserParser.COLON);
	        this.state = 98;
	        localctx._tipo = this.tipo();

	        		// Semantic action #2
	        		this.currType = (localctx._tipo == null ? null : this._input.getText(new antlr4.Interval(localctx._tipo.start,localctx._tipo.stop)));
	        		let var_list = (localctx._lista_ids == null ? null : this._input.getText(new antlr4.Interval(localctx._lista_ids.start,localctx._lista_ids.stop)));
	        		let var_list_array = var_list.split(",");
	        		var_list_array.forEach((_var) => {
	        			this.FunctionDir.functions[this.currFunc].variables.addVar(_var, this.currType)
	        		});
	        	
	        this.state = 100;
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
	        this.state = 102;
	        this.match(PatitoParserParser.ID);
	        this.state = 103;
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
	        this.state = 109;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 105;
	            this.match(PatitoParserParser.COMMA);
	            this.state = 106;
	            this.match(PatitoParserParser.ID);
	            this.state = 107;
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
	        this.state = 115;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 111;
	            this.funcs();
	            this.state = 112;
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
	        this.state = 117;
	        localctx._NULA = this.match(PatitoParserParser.NULA);
	        this.state = 118;
	        localctx._ID = this.match(PatitoParserParser.ID);

	        		// Semantic action #3
	        		this.currType = (localctx._NULA == null ? null : localctx._NULA.text);
	        		this.currFunc = (localctx._ID == null ? null : localctx._ID.text);

	        		if(this.FunctionDir.hasFunction(this.currFunc)){
	        			console.error(`La función ${this.currFunc} ya está definida`);
	        		}

	        		this.FunctionDir.addFunction(this.currFunc, this.currType);
	        	
	        this.state = 120;
	        this.match(PatitoParserParser.LPAR);
	        this.state = 121;
	        this.lista_params();
	        this.state = 122;
	        this.match(PatitoParserParser.RPAR);
	        this.state = 123;
	        this.match(PatitoParserParser.LBRACE);
	        this.state = 124;
	        this.tiene_vars();
	        this.state = 125;
	        this.cuerpo();
	        this.state = 126;
	        this.match(PatitoParserParser.RBRACE);
	        this.state = 127;
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
	        this.state = 133;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 129;
	            this.param();
	            this.state = 130;
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
	        this.state = 140;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 135;
	            this.match(PatitoParserParser.COMMA);
	            this.state = 136;
	            this.param();
	            this.state = 137;
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
	        this.state = 142;
	        localctx._ID = this.match(PatitoParserParser.ID);
	        this.state = 143;
	        this.match(PatitoParserParser.COLON);
	        this.state = 144;
	        localctx._tipo = this.tipo();
	         
	        		// Semantic action #4
	        		this.currType = (localctx._tipo == null ? null : this._input.getText(new antlr4.Interval(localctx._tipo.start,localctx._tipo.stop)));
	        		this.currVar = (localctx._ID == null ? null : localctx._ID.text);
	        		if(this.FunctionDir.functions[this.currFunc].variables.hasVariable(this.currVar)){
	        			console.error(`La función ${this.currVar} ya está definida`);
	        		}
	        		else {
	        			this.FunctionDir.functions[this.currFunc].variables.addVar(this.currVar, this.currType)
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
	        this.state = 147;
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
	        this.state = 149;
	        this.match(PatitoParserParser.LBRACE);
	        this.state = 150;
	        this.lista_estatutos();
	        this.state = 151;
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
	        this.state = 157;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	        case 8:
	        case 14:
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 153;
	            this.estatuto();
	            this.state = 154;
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
	        this.state = 164;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 159;
	            this.asigna();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 160;
	            this.condicion();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 161;
	            this.ciclo();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 162;
	            this.llamada();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 163;
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
	        this.state = 166;
	        localctx._ID = this.match(PatitoParserParser.ID);

	        		this.currVar = (localctx._ID == null ? null : localctx._ID.text);
	        		this.OperandStack.push(this.FunctionDir.functions[this.currFunc].variables.variables[this.currVar]);
	        	
	        this.state = 168;
	        localctx._ASSIGN = this.match(PatitoParserParser.ASSIGN);
	        this.OperatorStack.push((localctx._ASSIGN == null ? null : localctx._ASSIGN.text))
	        this.state = 170;
	        this.expresion();

	        			if(this.OperatorStack.top() == '=' ){
	        				let leftOperand = this.OperandStack.pop();
	        				let resultVariable =  this.OperandStack.pop();
	        				let operator = this.OperatorStack.pop();
	        				this.QuadruplesQueue.addQuadruple(operator, leftOperand, null, resultVariable);
	        			}
	        		
	        this.state = 172;
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
	        this.state = 174;
	        this.match(PatitoParserParser.SI);
	        this.state = 175;
	        this.match(PatitoParserParser.LPAR);
	        this.state = 176;
	        this.expresion();
	        this.state = 177;
	        this.match(PatitoParserParser.RPAR);

	        		const expResult = this.OperandStack.pop();
	        		if(expResult.type != 'entero'){
	        			console.error("Expected integer expression result on if statement")
	        		} else {
	        			this.QuadruplesQueue.addQuadruple('gotoF', expResult, null, undefined);
	        			this.JumpStack.push(this.QuadruplesQueue.size() - 1);
	        		}
	        	
	        this.state = 179;
	        this.cuerpo();
	        this.state = 183;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 180;
	            this.sino();
	            this.state = 185;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 186;
	        this.match(PatitoParserParser.SEMICOLON);

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
	        this.state = 189;
	        this.match(PatitoParserParser.SINO);

	        		this.QuadruplesQueue.addQuadruple('goto', null, null, undefined);
	        		this.QuadruplesQueue.fillJump(this.JumpStack.pop());
	        		this.JumpStack.push(this.QuadruplesQueue.size() - 1);
	        	
	        this.state = 191;
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
	        this.state = 193;
	        this.match(PatitoParserParser.MIENTRAS);
	        this.state = 194;
	        this.match(PatitoParserParser.LPAR);
	        this.state = 195;
	        this.expresion();
	        this.state = 196;
	        this.match(PatitoParserParser.RPAR);
	        this.state = 197;
	        this.match(PatitoParserParser.HAZ);
	        this.state = 198;
	        this.cuerpo();
	        this.state = 199;
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
	        this.state = 201;
	        this.match(PatitoParserParser.ID);
	        this.state = 202;
	        this.match(PatitoParserParser.LPAR);
	        this.state = 203;
	        this.lista_expresiones();
	        this.state = 204;
	        this.match(PatitoParserParser.RPAR);
	        this.state = 205;
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
	        this.state = 211;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	        case 13:
	        case 15:
	        case 20:
	        case 29:
	        case 30:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 207;
	            this.expresion();
	            this.state = 208;
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
	        this.state = 218;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 213;
	            this.match(PatitoParserParser.COMMA);
	            this.state = 214;
	            this.expresion();
	            this.state = 215;
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
	        this.state = 220;
	        this.match(PatitoParserParser.ESCRIBE);
	        this.state = 221;
	        this.match(PatitoParserParser.LPAR);
	        this.state = 222;
	        this.lista_impresiones();
	        this.state = 223;
	        this.match(PatitoParserParser.RPAR);
	        this.state = 224;
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
	        this.state = 230;
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
	            this.state = 226;
	            this.imprimibles();
	            this.state = 227;
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
	        this.state = 237;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 232;
	            this.match(PatitoParserParser.COMMA);
	            this.state = 233;
	            this.imprimibles();
	            this.state = 234;
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
	        this.state = 241;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	        case 13:
	        case 15:
	        case 20:
	        case 29:
	        case 30:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 239;
	            this.expresion();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 240;
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
	        this.state = 250;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 243;
	            this.exp();
	            this.state = 244;
	            localctx._comparador = this.comparador();
	            this.OperatorStack.push((localctx._comparador == null ? null : this._input.getText(new antlr4.Interval(localctx._comparador.start,localctx._comparador.stop))))
	            this.state = 246;
	            this.exp();

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
	            	
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 249;
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
	        this.state = 252;
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
	        this.state = 254;
	        this.termino();

	        		if(this.OperatorStack.top() == '+' || this.OperatorStack.top() == '-'){
	        			let rightOperand =  this.OperandStack.pop();
	        			let leftOperand = this.OperandStack.pop();
	        			let operator = this.OperatorStack.pop();
	        			let resultType = this.SematicCube[operator][leftOperand.type][rightOperand.type];
	        			let resultVariable = this.QuadruplesQueue.newTempVariable(resultType);
	        			this.OperandStack.push(resultVariable);
	        			this.QuadruplesQueue.addQuadruple(operator, leftOperand, rightOperand, resultVariable);
	        		}
	        	
	        this.state = 259;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 256;
	                this.operaciones_signo(); 
	            }
	            this.state = 261;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
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
	        this.state = 268;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 262;
	            localctx._PLUS = this.match(PatitoParserParser.PLUS);
	            this.OperatorStack.push((localctx._PLUS == null ? null : localctx._PLUS.text))
	            this.state = 264;
	            this.exp();
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 265;
	            localctx._MINUS = this.match(PatitoParserParser.MINUS);
	            this.OperatorStack.push((localctx._MINUS == null ? null : localctx._MINUS.text))
	            this.state = 267;
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
	        this.state = 270;
	        this.factor();

	        		if(this.OperatorStack.top() == '*' || this.OperatorStack.top() == '/'){
	        			let rightOperand =  this.OperandStack.pop();
	        			let leftOperand = this.OperandStack.pop();
	        			let operator = this.OperatorStack.pop();
	        			let resultType = this.SematicCube[operator][leftOperand.type][rightOperand.type];
	        			let resultVariable = this.QuadruplesQueue.newTempVariable(resultType);
	        			this.OperandStack.push(resultVariable);
	        			this.QuadruplesQueue.addQuadruple(operator, leftOperand, rightOperand, resultVariable);
	        		}
	        	
	        this.state = 275;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 272;
	                this.operaciones_factor(); 
	            }
	            this.state = 277;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
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
	        this.state = 284;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 31:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 278;
	            localctx._MULT = this.match(PatitoParserParser.MULT);
	            this.OperatorStack.push((localctx._MULT == null ? null : localctx._MULT.text))
	            this.state = 280;
	            this.termino();
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 281;
	            localctx._DIV = this.match(PatitoParserParser.DIV);
	            this.OperatorStack.push((localctx._DIV == null ? null : localctx._DIV.text))
	            this.state = 283;
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
	        this.state = 296;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 286;
	            localctx._LPAR = this.match(PatitoParserParser.LPAR);
	            this.OperatorStack.push((localctx._LPAR == null ? null : localctx._LPAR.text));
	            this.state = 288;
	            this.expresion();

	            			if(this.OperatorStack.top() == "("){
	            				this.OperatorStack.pop();
	            			} else {
	            				console.error("Invalid expression inside parenthesis");
	            			}
	            		
	            this.state = 290;
	            this.match(PatitoParserParser.RPAR);
	            break;
	        case 12:
	        case 13:
	        case 15:
	        case 29:
	        case 30:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 292;
	            localctx._operadores_signo = this.operadores_signo();
	            this.state = 293;
	            localctx._operandos_factor = this.operandos_factor();

	            		if((localctx._operadores_signo == null ? null : this._input.getText(new antlr4.Interval(localctx._operadores_signo.start,localctx._operadores_signo.stop))) == '-'){
	            			this.currVar = '-' + (localctx._operandos_factor == null ? null : this._input.getText(new antlr4.Interval(localctx._operandos_factor.start,localctx._operandos_factor.stop)));
	            		} else {
	            			this.currVar = (localctx._operandos_factor == null ? null : this._input.getText(new antlr4.Interval(localctx._operandos_factor.start,localctx._operandos_factor.stop)));
	            		}

	            		const REGEX_ID = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
	            		const REGEX_CTE_ENT = /^[0-9]+$/;
	            		const REGEX_CTE_FLOT = /^[0-9]+\.[0-9]+$/;

	            		if((localctx._operandos_factor == null ? null : this._input.getText(new antlr4.Interval(localctx._operandos_factor.start,localctx._operandos_factor.stop))).match(REGEX_ID)) {
	            			this.OperandStack.push(this.FunctionDir.functions[this.currFunc].variables.variables[this.currVar]);
	            		} else if((localctx._operandos_factor == null ? null : this._input.getText(new antlr4.Interval(localctx._operandos_factor.start,localctx._operandos_factor.stop))).match(REGEX_CTE_ENT)) {
	            			this.OperandStack.push({ name: this.currVar, type: 'entero' });
	            		} else if((localctx._operandos_factor == null ? null : this._input.getText(new antlr4.Interval(localctx._operandos_factor.start,localctx._operandos_factor.stop))).match(REGEX_CTE_FLOT)) {
	            			this.OperandStack.push({ name: this.currVar, type: 'flotante' });
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
	        this.state = 301;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 298;
	            this.match(PatitoParserParser.PLUS);
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 299;
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
	        this.state = 305;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 303;
	            this.match(PatitoParserParser.ID);
	            break;
	        case 12:
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 304;
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
	        this.state = 307;
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
        this._ID = null;
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
