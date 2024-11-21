// Generated from /Users/luisangelguzmaniribe/Documents/GitHub/guziri/PatitoParser.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class PatitoParserParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		PROGRAM=1, VARS=2, ENTERO=3, FLOTANTE=4, NULA=5, SI=6, SINO=7, MIENTRAS=8, 
		HAZ=9, INICIO=10, FIN=11, CTE_ENT=12, CTE_FLOT=13, ESCRIBE=14, ID=15, 
		LETRERO=16, SEMICOLON=17, COLON=18, COMMA=19, LPAR=20, RPAR=21, LBRACE=22, 
		RBRACE=23, ASSIGN=24, GT=25, LT=26, NEQ=27, EQ=28, PLUS=29, MINUS=30, 
		MULT=31, DIV=32, WS=33;
	public static final int
		RULE_programa = 0, RULE_tiene_vars = 1, RULE_vars = 2, RULE_mas_vars = 3, 
		RULE_lista_vars = 4, RULE_lista_ids = 5, RULE_mas_ids = 6, RULE_lista_funcs = 7, 
		RULE_funcs = 8, RULE_lista_params = 9, RULE_mas_params = 10, RULE_param = 11, 
		RULE_tipo = 12, RULE_cuerpo = 13, RULE_lista_estatutos = 14, RULE_estatuto = 15, 
		RULE_asigna = 16, RULE_condicion = 17, RULE_sino = 18, RULE_ciclo = 19, 
		RULE_llamada = 20, RULE_lista_expresiones = 21, RULE_mas_expresiones = 22, 
		RULE_imprime = 23, RULE_lista_impresiones = 24, RULE_mas_impresiones = 25, 
		RULE_imprimibles = 26, RULE_expresion = 27, RULE_comparador = 28, RULE_exp = 29, 
		RULE_operaciones_signo = 30, RULE_termino = 31, RULE_operaciones_factor = 32, 
		RULE_factor = 33, RULE_operadores_signo = 34, RULE_operandos_factor = 35, 
		RULE_cte = 36;
	private static String[] makeRuleNames() {
		return new String[] {
			"programa", "tiene_vars", "vars", "mas_vars", "lista_vars", "lista_ids", 
			"mas_ids", "lista_funcs", "funcs", "lista_params", "mas_params", "param", 
			"tipo", "cuerpo", "lista_estatutos", "estatuto", "asigna", "condicion", 
			"sino", "ciclo", "llamada", "lista_expresiones", "mas_expresiones", "imprime", 
			"lista_impresiones", "mas_impresiones", "imprimibles", "expresion", "comparador", 
			"exp", "operaciones_signo", "termino", "operaciones_factor", "factor", 
			"operadores_signo", "operandos_factor", "cte"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'programa'", "'vars'", "'entero'", "'flotante'", "'nula'", "'si'", 
			"'sino'", "'mientras'", "'haz'", "'inicio'", "'fin'", null, null, "'escribe'", 
			null, null, "';'", "':'", "','", "'('", "')'", "'{'", "'}'", "'='", "'>'", 
			"'<'", "'!='", "'=='", "'+'", "'-'", "'*'", "'/'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "PROGRAM", "VARS", "ENTERO", "FLOTANTE", "NULA", "SI", "SINO", 
			"MIENTRAS", "HAZ", "INICIO", "FIN", "CTE_ENT", "CTE_FLOT", "ESCRIBE", 
			"ID", "LETRERO", "SEMICOLON", "COLON", "COMMA", "LPAR", "RPAR", "LBRACE", 
			"RBRACE", "ASSIGN", "GT", "LT", "NEQ", "EQ", "PLUS", "MINUS", "MULT", 
			"DIV", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "PatitoParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public PatitoParserParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramaContext extends ParserRuleContext {
		public Token PROGRAM;
		public TerminalNode PROGRAM() { return getToken(PatitoParserParser.PROGRAM, 0); }
		public TerminalNode ID() { return getToken(PatitoParserParser.ID, 0); }
		public TerminalNode SEMICOLON() { return getToken(PatitoParserParser.SEMICOLON, 0); }
		public Tiene_varsContext tiene_vars() {
			return getRuleContext(Tiene_varsContext.class,0);
		}
		public Lista_funcsContext lista_funcs() {
			return getRuleContext(Lista_funcsContext.class,0);
		}
		public TerminalNode INICIO() { return getToken(PatitoParserParser.INICIO, 0); }
		public CuerpoContext cuerpo() {
			return getRuleContext(CuerpoContext.class,0);
		}
		public TerminalNode FIN() { return getToken(PatitoParserParser.FIN, 0); }
		public ProgramaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_programa; }
	}

	public final ProgramaContext programa() throws RecognitionException {
		ProgramaContext _localctx = new ProgramaContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_programa);
		try {
			enterOuterAlt(_localctx, 1);
			{

					// Semantic action #1.1
					this.QuadruplesQueue.addQuadruple(11, null, null, undefined);
				
			setState(75);
			((ProgramaContext)_localctx).PROGRAM = match(PROGRAM);
			setState(76);
			match(ID);
			 
					// Sematic action #1.2
					this.currType = (((ProgramaContext)_localctx).PROGRAM!=null?((ProgramaContext)_localctx).PROGRAM.getText():null);
					this.currFunc = 'global';
					this.FunctionDir.addFunction(this.currFunc, this.currType);
				
			setState(78);
			match(SEMICOLON);
			setState(79);
			tiene_vars();
			setState(80);
			lista_funcs();
			setState(81);
			match(INICIO);

					// Semantic action #1.4
					this.QuadruplesQueue.items[0].result = this.QuadruplesQueue.size();
				
			setState(83);
			cuerpo();
			setState(84);
			match(FIN);

					// Semantic action #1.5
					this.FunctionDir.releaseVarTable(this.currFunc);
				
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Tiene_varsContext extends ParserRuleContext {
		public VarsContext vars() {
			return getRuleContext(VarsContext.class,0);
		}
		public Tiene_varsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tiene_vars; }
	}

	public final Tiene_varsContext tiene_vars() throws RecognitionException {
		Tiene_varsContext _localctx = new Tiene_varsContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_tiene_vars);
		try {
			setState(89);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case VARS:
				enterOuterAlt(_localctx, 1);
				{
				setState(87);
				vars();
				}
				break;
			case NULA:
			case INICIO:
			case LBRACE:
				enterOuterAlt(_localctx, 2);
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VarsContext extends ParserRuleContext {
		public TerminalNode VARS() { return getToken(PatitoParserParser.VARS, 0); }
		public Lista_varsContext lista_vars() {
			return getRuleContext(Lista_varsContext.class,0);
		}
		public Mas_varsContext mas_vars() {
			return getRuleContext(Mas_varsContext.class,0);
		}
		public VarsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_vars; }
	}

	public final VarsContext vars() throws RecognitionException {
		VarsContext _localctx = new VarsContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_vars);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(91);
			match(VARS);
			setState(92);
			lista_vars();
			setState(93);
			mas_vars();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Mas_varsContext extends ParserRuleContext {
		public Lista_varsContext lista_vars() {
			return getRuleContext(Lista_varsContext.class,0);
		}
		public Mas_varsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mas_vars; }
	}

	public final Mas_varsContext mas_vars() throws RecognitionException {
		Mas_varsContext _localctx = new Mas_varsContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_mas_vars);
		try {
			setState(97);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(95);
				lista_vars();
				}
				break;
			case NULA:
			case INICIO:
			case LBRACE:
				enterOuterAlt(_localctx, 2);
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Lista_varsContext extends ParserRuleContext {
		public Lista_idsContext lista_ids;
		public TipoContext tipo;
		public Lista_idsContext lista_ids() {
			return getRuleContext(Lista_idsContext.class,0);
		}
		public TerminalNode COLON() { return getToken(PatitoParserParser.COLON, 0); }
		public TipoContext tipo() {
			return getRuleContext(TipoContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(PatitoParserParser.SEMICOLON, 0); }
		public Lista_varsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lista_vars; }
	}

	public final Lista_varsContext lista_vars() throws RecognitionException {
		Lista_varsContext _localctx = new Lista_varsContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_lista_vars);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(99);
			((Lista_varsContext)_localctx).lista_ids = lista_ids();
			setState(100);
			match(COLON);
			setState(101);
			((Lista_varsContext)_localctx).tipo = tipo();

					// Semantic action #1.3
					this.currType = (((Lista_varsContext)_localctx).tipo!=null?_input.getText(((Lista_varsContext)_localctx).tipo.start,((Lista_varsContext)_localctx).tipo.stop):null);
					let var_list = (((Lista_varsContext)_localctx).lista_ids!=null?_input.getText(((Lista_varsContext)_localctx).lista_ids.start,((Lista_varsContext)_localctx).lista_ids.stop):null);
					let var_list_array = var_list.split(",");
					var_list_array.forEach((_var) => {
						this.FunctionDir.addVar(_var, this.currType, this.currFunc);
					});
				
			setState(103);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Lista_idsContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(PatitoParserParser.ID, 0); }
		public Mas_idsContext mas_ids() {
			return getRuleContext(Mas_idsContext.class,0);
		}
		public Lista_idsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lista_ids; }
	}

	public final Lista_idsContext lista_ids() throws RecognitionException {
		Lista_idsContext _localctx = new Lista_idsContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_lista_ids);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(105);
			match(ID);
			setState(106);
			mas_ids();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Mas_idsContext extends ParserRuleContext {
		public TerminalNode COMMA() { return getToken(PatitoParserParser.COMMA, 0); }
		public TerminalNode ID() { return getToken(PatitoParserParser.ID, 0); }
		public Mas_idsContext mas_ids() {
			return getRuleContext(Mas_idsContext.class,0);
		}
		public Mas_idsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mas_ids; }
	}

	public final Mas_idsContext mas_ids() throws RecognitionException {
		Mas_idsContext _localctx = new Mas_idsContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_mas_ids);
		try {
			setState(112);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case COMMA:
				enterOuterAlt(_localctx, 1);
				{
				setState(108);
				match(COMMA);
				setState(109);
				match(ID);
				setState(110);
				mas_ids();
				}
				break;
			case COLON:
				enterOuterAlt(_localctx, 2);
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Lista_funcsContext extends ParserRuleContext {
		public FuncsContext funcs() {
			return getRuleContext(FuncsContext.class,0);
		}
		public Lista_funcsContext lista_funcs() {
			return getRuleContext(Lista_funcsContext.class,0);
		}
		public Lista_funcsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lista_funcs; }
	}

	public final Lista_funcsContext lista_funcs() throws RecognitionException {
		Lista_funcsContext _localctx = new Lista_funcsContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_lista_funcs);
		try {
			setState(118);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NULA:
				enterOuterAlt(_localctx, 1);
				{
				setState(114);
				funcs();
				setState(115);
				lista_funcs();
				}
				break;
			case INICIO:
				enterOuterAlt(_localctx, 2);
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FuncsContext extends ParserRuleContext {
		public Token NULA;
		public Token ID;
		public TerminalNode NULA() { return getToken(PatitoParserParser.NULA, 0); }
		public TerminalNode ID() { return getToken(PatitoParserParser.ID, 0); }
		public TerminalNode LPAR() { return getToken(PatitoParserParser.LPAR, 0); }
		public Lista_paramsContext lista_params() {
			return getRuleContext(Lista_paramsContext.class,0);
		}
		public TerminalNode RPAR() { return getToken(PatitoParserParser.RPAR, 0); }
		public TerminalNode LBRACE() { return getToken(PatitoParserParser.LBRACE, 0); }
		public Tiene_varsContext tiene_vars() {
			return getRuleContext(Tiene_varsContext.class,0);
		}
		public CuerpoContext cuerpo() {
			return getRuleContext(CuerpoContext.class,0);
		}
		public TerminalNode RBRACE() { return getToken(PatitoParserParser.RBRACE, 0); }
		public TerminalNode SEMICOLON() { return getToken(PatitoParserParser.SEMICOLON, 0); }
		public FuncsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funcs; }
	}

	public final FuncsContext funcs() throws RecognitionException {
		FuncsContext _localctx = new FuncsContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_funcs);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			((FuncsContext)_localctx).NULA = match(NULA);
			setState(121);
			((FuncsContext)_localctx).ID = match(ID);

					// Semantic action #6.1.1
					this.currType = (((FuncsContext)_localctx).NULA!=null?((FuncsContext)_localctx).NULA.getText():null);
					this.currFunc = (((FuncsContext)_localctx).ID!=null?((FuncsContext)_localctx).ID.getText():null);

					if(this.FunctionDir.hasFunction(this.currFunc)){
						console.error(`La función ${this.currFunc} ya está definida`);
					}

					this.FunctionDir.addFunction(this.currFunc, this.currType);
				
			setState(123);
			match(LPAR);
			setState(124);
			lista_params();
			setState(125);
			match(RPAR);
			setState(126);
			match(LBRACE);
			setState(127);
			tiene_vars();

					// Semantic action #6.1.3
					this.FunctionDir.functions[this.currFunc].start = this.QuadruplesQueue.size();
				
			setState(129);
			cuerpo();
			setState(130);
			match(RBRACE);
			setState(131);
			match(SEMICOLON);

					// Semantic action #6.1.4
					this.FunctionDir.releaseVarTable(this.currFunc);
					this.currFunc = 'global';
					this.QuadruplesQueue.addQuadruple(14, null, null, null);
				
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Lista_paramsContext extends ParserRuleContext {
		public ParamContext param() {
			return getRuleContext(ParamContext.class,0);
		}
		public Mas_paramsContext mas_params() {
			return getRuleContext(Mas_paramsContext.class,0);
		}
		public Lista_paramsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lista_params; }
	}

	public final Lista_paramsContext lista_params() throws RecognitionException {
		Lista_paramsContext _localctx = new Lista_paramsContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_lista_params);
		try {
			setState(138);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(134);
				param();
				setState(135);
				mas_params();
				}
				break;
			case RPAR:
				enterOuterAlt(_localctx, 2);
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Mas_paramsContext extends ParserRuleContext {
		public TerminalNode COMMA() { return getToken(PatitoParserParser.COMMA, 0); }
		public ParamContext param() {
			return getRuleContext(ParamContext.class,0);
		}
		public Mas_paramsContext mas_params() {
			return getRuleContext(Mas_paramsContext.class,0);
		}
		public Mas_paramsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mas_params; }
	}

	public final Mas_paramsContext mas_params() throws RecognitionException {
		Mas_paramsContext _localctx = new Mas_paramsContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_mas_params);
		try {
			setState(145);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case COMMA:
				enterOuterAlt(_localctx, 1);
				{
				setState(140);
				match(COMMA);
				setState(141);
				param();
				setState(142);
				mas_params();
				}
				break;
			case RPAR:
				enterOuterAlt(_localctx, 2);
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParamContext extends ParserRuleContext {
		public Token ID;
		public TipoContext tipo;
		public TerminalNode ID() { return getToken(PatitoParserParser.ID, 0); }
		public TerminalNode COLON() { return getToken(PatitoParserParser.COLON, 0); }
		public TipoContext tipo() {
			return getRuleContext(TipoContext.class,0);
		}
		public ParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_param; }
	}

	public final ParamContext param() throws RecognitionException {
		ParamContext _localctx = new ParamContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_param);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(147);
			((ParamContext)_localctx).ID = match(ID);
			setState(148);
			match(COLON);
			setState(149);
			((ParamContext)_localctx).tipo = tipo();
			 
					// Semantic action #6.1.2
					this.currType = (((ParamContext)_localctx).tipo!=null?_input.getText(((ParamContext)_localctx).tipo.start,((ParamContext)_localctx).tipo.stop):null);
					this.currVar = (((ParamContext)_localctx).ID!=null?((ParamContext)_localctx).ID.getText():null);
					if(this.FunctionDir.hasVariable(this.currFunc, this.currVar)){
						console.error(`La función ${this.currVar} ya está definida`);
					}
					else {
						let parameterDir = this.FunctionDir.addVar(this.currVar, this.currType, this.currFunc);
						this.FunctionDir.addParameter(parameterDir, this.currFunc)
					}
				
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TipoContext extends ParserRuleContext {
		public TerminalNode ENTERO() { return getToken(PatitoParserParser.ENTERO, 0); }
		public TerminalNode FLOTANTE() { return getToken(PatitoParserParser.FLOTANTE, 0); }
		public TipoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tipo; }
	}

	public final TipoContext tipo() throws RecognitionException {
		TipoContext _localctx = new TipoContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_tipo);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(152);
			_la = _input.LA(1);
			if ( !(_la==ENTERO || _la==FLOTANTE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CuerpoContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(PatitoParserParser.LBRACE, 0); }
		public Lista_estatutosContext lista_estatutos() {
			return getRuleContext(Lista_estatutosContext.class,0);
		}
		public TerminalNode RBRACE() { return getToken(PatitoParserParser.RBRACE, 0); }
		public CuerpoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cuerpo; }
	}

	public final CuerpoContext cuerpo() throws RecognitionException {
		CuerpoContext _localctx = new CuerpoContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_cuerpo);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(154);
			match(LBRACE);
			setState(155);
			lista_estatutos();
			setState(156);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Lista_estatutosContext extends ParserRuleContext {
		public EstatutoContext estatuto() {
			return getRuleContext(EstatutoContext.class,0);
		}
		public Lista_estatutosContext lista_estatutos() {
			return getRuleContext(Lista_estatutosContext.class,0);
		}
		public Lista_estatutosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lista_estatutos; }
	}

	public final Lista_estatutosContext lista_estatutos() throws RecognitionException {
		Lista_estatutosContext _localctx = new Lista_estatutosContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_lista_estatutos);
		try {
			setState(162);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SI:
			case MIENTRAS:
			case ESCRIBE:
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(158);
				estatuto();
				setState(159);
				lista_estatutos();
				}
				break;
			case RBRACE:
				enterOuterAlt(_localctx, 2);
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EstatutoContext extends ParserRuleContext {
		public AsignaContext asigna() {
			return getRuleContext(AsignaContext.class,0);
		}
		public CondicionContext condicion() {
			return getRuleContext(CondicionContext.class,0);
		}
		public CicloContext ciclo() {
			return getRuleContext(CicloContext.class,0);
		}
		public LlamadaContext llamada() {
			return getRuleContext(LlamadaContext.class,0);
		}
		public ImprimeContext imprime() {
			return getRuleContext(ImprimeContext.class,0);
		}
		public EstatutoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_estatuto; }
	}

	public final EstatutoContext estatuto() throws RecognitionException {
		EstatutoContext _localctx = new EstatutoContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_estatuto);
		try {
			setState(169);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(164);
				asigna();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(165);
				condicion();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(166);
				ciclo();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(167);
				llamada();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(168);
				imprime();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AsignaContext extends ParserRuleContext {
		public Token ID;
		public Token ASSIGN;
		public ExpresionContext expresion;
		public TerminalNode ID() { return getToken(PatitoParserParser.ID, 0); }
		public TerminalNode ASSIGN() { return getToken(PatitoParserParser.ASSIGN, 0); }
		public ExpresionContext expresion() {
			return getRuleContext(ExpresionContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(PatitoParserParser.SEMICOLON, 0); }
		public AsignaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_asigna; }
	}

	public final AsignaContext asigna() throws RecognitionException {
		AsignaContext _localctx = new AsignaContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_asigna);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(171);
			((AsignaContext)_localctx).ID = match(ID);

					// Semantic action #2.1
					this.currVar = (((AsignaContext)_localctx).ID!=null?((AsignaContext)_localctx).ID.getText():null);
					this.OperandStack.push(this.FunctionDir.functions[this.currFunc].variables[this.currVar]);
				
			setState(173);
			((AsignaContext)_localctx).ASSIGN = match(ASSIGN);

					// Semantic action #2.2
					this.OperatorStack.push((((AsignaContext)_localctx).ASSIGN!=null?((AsignaContext)_localctx).ASSIGN.getText():null))
				
			setState(175);
			((AsignaContext)_localctx).expresion = expresion();

					console.log((((AsignaContext)_localctx).expresion!=null?_input.getText(((AsignaContext)_localctx).expresion.start,((AsignaContext)_localctx).expresion.stop):null))
					// Semantic action #2.12
					if(this.OperatorStack.top() == '=' ){
						let leftOperand = this.OperandStack.pop();
						let resultVariable =  this.OperandStack.pop();
						let operator = this.OperatorStack.pop();
						this.QuadruplesQueue.addQuadruple(this.SematicCube[operator]['code'], leftOperand, null, resultVariable);
					}
				
			setState(177);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CondicionContext extends ParserRuleContext {
		public TerminalNode SI() { return getToken(PatitoParserParser.SI, 0); }
		public TerminalNode LPAR() { return getToken(PatitoParserParser.LPAR, 0); }
		public ExpresionContext expresion() {
			return getRuleContext(ExpresionContext.class,0);
		}
		public TerminalNode RPAR() { return getToken(PatitoParserParser.RPAR, 0); }
		public CuerpoContext cuerpo() {
			return getRuleContext(CuerpoContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(PatitoParserParser.SEMICOLON, 0); }
		public List<SinoContext> sino() {
			return getRuleContexts(SinoContext.class);
		}
		public SinoContext sino(int i) {
			return getRuleContext(SinoContext.class,i);
		}
		public CondicionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condicion; }
	}

	public final CondicionContext condicion() throws RecognitionException {
		CondicionContext _localctx = new CondicionContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_condicion);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(179);
			match(SI);
			setState(180);
			match(LPAR);
			setState(181);
			expresion();
			setState(182);
			match(RPAR);

					// Semantic action #4.1
					const expResult = this.OperandStack.pop();
					if(this.FunctionDir.getVariableType(expResult) != 'entero'){
						console.error("Expected integer expression result on if statement")
					} else {
						this.QuadruplesQueue.addQuadruple(13, expResult, null, undefined);
						this.JumpStack.push(this.QuadruplesQueue.size() - 1);
					}
				
			setState(184);
			cuerpo();
			setState(188);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==SINO) {
				{
				{
				setState(185);
				sino();
				}
				}
				setState(190);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(191);
			match(SEMICOLON);

					// Semantic action #4.2
					this.QuadruplesQueue.fillJump(this.JumpStack.pop());
				
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SinoContext extends ParserRuleContext {
		public TerminalNode SINO() { return getToken(PatitoParserParser.SINO, 0); }
		public CuerpoContext cuerpo() {
			return getRuleContext(CuerpoContext.class,0);
		}
		public SinoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sino; }
	}

	public final SinoContext sino() throws RecognitionException {
		SinoContext _localctx = new SinoContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_sino);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(194);
			match(SINO);

					// Semantic action #4.3
					this.QuadruplesQueue.addQuadruple(11, null, null, undefined);
					this.QuadruplesQueue.fillJump(this.JumpStack.pop());
					this.JumpStack.push(this.QuadruplesQueue.size() - 1);
				
			setState(196);
			cuerpo();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CicloContext extends ParserRuleContext {
		public TerminalNode MIENTRAS() { return getToken(PatitoParserParser.MIENTRAS, 0); }
		public TerminalNode LPAR() { return getToken(PatitoParserParser.LPAR, 0); }
		public ExpresionContext expresion() {
			return getRuleContext(ExpresionContext.class,0);
		}
		public TerminalNode RPAR() { return getToken(PatitoParserParser.RPAR, 0); }
		public TerminalNode HAZ() { return getToken(PatitoParserParser.HAZ, 0); }
		public CuerpoContext cuerpo() {
			return getRuleContext(CuerpoContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(PatitoParserParser.SEMICOLON, 0); }
		public CicloContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ciclo; }
	}

	public final CicloContext ciclo() throws RecognitionException {
		CicloContext _localctx = new CicloContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_ciclo);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(198);
			match(MIENTRAS);

					// Semantic action #5.1
					this.JumpStack.push(this.QuadruplesQueue.size());
				
			setState(200);
			match(LPAR);
			setState(201);
			expresion();
			setState(202);
			match(RPAR);

					// Semantic action #5.2
					const expResult = this.OperandStack.pop();
					if(this.FunctionDir.getVariableType(expResult) != 'entero'){
						console.error("Expected integer expression result on if statement")
					} else {
						this.QuadruplesQueue.addQuadruple(13, expResult, null, undefined);
						this.JumpStack.push(this.QuadruplesQueue.size() - 1);
					}
				
			setState(204);
			match(HAZ);
			setState(205);
			cuerpo();
			setState(206);
			match(SEMICOLON);

					// Semantic action #5.3
					const end = this.JumpStack.pop();
					const _return = this.JumpStack.pop();
					this.QuadruplesQueue.addQuadruple(11, null, null, _return);
					this.QuadruplesQueue.fillJump(end);
				
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LlamadaContext extends ParserRuleContext {
		public Token ID;
		public TerminalNode ID() { return getToken(PatitoParserParser.ID, 0); }
		public TerminalNode LPAR() { return getToken(PatitoParserParser.LPAR, 0); }
		public TerminalNode RPAR() { return getToken(PatitoParserParser.RPAR, 0); }
		public TerminalNode SEMICOLON() { return getToken(PatitoParserParser.SEMICOLON, 0); }
		public List<Lista_expresionesContext> lista_expresiones() {
			return getRuleContexts(Lista_expresionesContext.class);
		}
		public Lista_expresionesContext lista_expresiones(int i) {
			return getRuleContext(Lista_expresionesContext.class,i);
		}
		public LlamadaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_llamada; }
	}

	public final LlamadaContext llamada() throws RecognitionException {
		LlamadaContext _localctx = new LlamadaContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_llamada);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(209);
			((LlamadaContext)_localctx).ID = match(ID);

					// Semantic action 6.2.1
					this.calledFunction = (((LlamadaContext)_localctx).ID!=null?((LlamadaContext)_localctx).ID.getText():null);
					if(!this.FunctionDir.functions[this.calledFunction]){
						console.error(`Function ${this.calledFunction} does not exists`);
					}
				
			setState(211);
			match(LPAR);

					// Semantic action 6.2.2
					this.QuadruplesQueue.addQuadruple(15, this.calledFunction, null, null);
					this.parameterCounter = 0;
				
			setState(216);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1611706368L) != 0)) {
				{
				{
				setState(213);
				lista_expresiones();
				}
				}
				setState(218);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}

					if(this.FunctionDir.functions[this.calledFunction].parameters[this.parameterCounter] !== undefined){
						console.error('Incorrect number of parameters on function (too few): ', this.calledFunction);
					}
				
			setState(220);
			match(RPAR);

					// Semantic action 6.2.5
					this.QuadruplesQueue.addQuadruple(16, this.calledFunction, null, this.FunctionDir.functions[this.calledFunction].start);
					delete this.calledFunction;
				
			setState(222);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Lista_expresionesContext extends ParserRuleContext {
		public ExpresionContext expresion() {
			return getRuleContext(ExpresionContext.class,0);
		}
		public List<Mas_expresionesContext> mas_expresiones() {
			return getRuleContexts(Mas_expresionesContext.class);
		}
		public Mas_expresionesContext mas_expresiones(int i) {
			return getRuleContext(Mas_expresionesContext.class,i);
		}
		public Lista_expresionesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lista_expresiones; }
	}

	public final Lista_expresionesContext lista_expresiones() throws RecognitionException {
		Lista_expresionesContext _localctx = new Lista_expresionesContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_lista_expresiones);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(224);
			expresion();

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
				
			setState(229);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(226);
					mas_expresiones();
					}
					} 
				}
				setState(231);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Mas_expresionesContext extends ParserRuleContext {
		public TerminalNode COMMA() { return getToken(PatitoParserParser.COMMA, 0); }
		public List<Lista_expresionesContext> lista_expresiones() {
			return getRuleContexts(Lista_expresionesContext.class);
		}
		public Lista_expresionesContext lista_expresiones(int i) {
			return getRuleContext(Lista_expresionesContext.class,i);
		}
		public Mas_expresionesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mas_expresiones; }
	}

	public final Mas_expresionesContext mas_expresiones() throws RecognitionException {
		Mas_expresionesContext _localctx = new Mas_expresionesContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_mas_expresiones);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(232);
			match(COMMA);
			setState(236);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(233);
					lista_expresiones();
					}
					} 
				}
				setState(238);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ImprimeContext extends ParserRuleContext {
		public TerminalNode ESCRIBE() { return getToken(PatitoParserParser.ESCRIBE, 0); }
		public TerminalNode LPAR() { return getToken(PatitoParserParser.LPAR, 0); }
		public Lista_impresionesContext lista_impresiones() {
			return getRuleContext(Lista_impresionesContext.class,0);
		}
		public TerminalNode RPAR() { return getToken(PatitoParserParser.RPAR, 0); }
		public TerminalNode SEMICOLON() { return getToken(PatitoParserParser.SEMICOLON, 0); }
		public ImprimeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_imprime; }
	}

	public final ImprimeContext imprime() throws RecognitionException {
		ImprimeContext _localctx = new ImprimeContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_imprime);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(239);
			match(ESCRIBE);
			setState(240);
			match(LPAR);
			setState(241);
			lista_impresiones();
			setState(242);
			match(RPAR);
			setState(243);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Lista_impresionesContext extends ParserRuleContext {
		public ImprimiblesContext imprimibles() {
			return getRuleContext(ImprimiblesContext.class,0);
		}
		public Mas_impresionesContext mas_impresiones() {
			return getRuleContext(Mas_impresionesContext.class,0);
		}
		public Lista_impresionesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lista_impresiones; }
	}

	public final Lista_impresionesContext lista_impresiones() throws RecognitionException {
		Lista_impresionesContext _localctx = new Lista_impresionesContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_lista_impresiones);
		try {
			setState(249);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CTE_ENT:
			case CTE_FLOT:
			case ID:
			case LETRERO:
			case LPAR:
			case PLUS:
			case MINUS:
				enterOuterAlt(_localctx, 1);
				{
				setState(245);
				imprimibles();
				setState(246);
				mas_impresiones();
				}
				break;
			case RPAR:
				enterOuterAlt(_localctx, 2);
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Mas_impresionesContext extends ParserRuleContext {
		public TerminalNode COMMA() { return getToken(PatitoParserParser.COMMA, 0); }
		public ImprimiblesContext imprimibles() {
			return getRuleContext(ImprimiblesContext.class,0);
		}
		public Mas_impresionesContext mas_impresiones() {
			return getRuleContext(Mas_impresionesContext.class,0);
		}
		public Mas_impresionesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mas_impresiones; }
	}

	public final Mas_impresionesContext mas_impresiones() throws RecognitionException {
		Mas_impresionesContext _localctx = new Mas_impresionesContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_mas_impresiones);
		try {
			setState(256);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case COMMA:
				enterOuterAlt(_localctx, 1);
				{
				setState(251);
				match(COMMA);
				setState(252);
				imprimibles();
				setState(253);
				mas_impresiones();
				}
				break;
			case RPAR:
				enterOuterAlt(_localctx, 2);
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ImprimiblesContext extends ParserRuleContext {
		public Token LETRERO;
		public ExpresionContext expresion() {
			return getRuleContext(ExpresionContext.class,0);
		}
		public TerminalNode LETRERO() { return getToken(PatitoParserParser.LETRERO, 0); }
		public ImprimiblesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_imprimibles; }
	}

	public final ImprimiblesContext imprimibles() throws RecognitionException {
		ImprimiblesContext _localctx = new ImprimiblesContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_imprimibles);
		try {
			setState(263);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CTE_ENT:
			case CTE_FLOT:
			case ID:
			case LPAR:
			case PLUS:
			case MINUS:
				enterOuterAlt(_localctx, 1);
				{
				setState(258);
				expresion();

						// Semantic action #3.1
						this.QuadruplesQueue.addQuadruple(10, null, null, this.OperandStack.pop());
					
				}
				break;
			case LETRERO:
				enterOuterAlt(_localctx, 2);
				{
				setState(261);
				((ImprimiblesContext)_localctx).LETRERO = match(LETRERO);

						// Semantic action #3.2
						let stringAddress = this.FunctionDir.addVar((((ImprimiblesContext)_localctx).LETRERO!=null?((ImprimiblesContext)_localctx).LETRERO.getText():null).substring(1, (((ImprimiblesContext)_localctx).LETRERO!=null?((ImprimiblesContext)_localctx).LETRERO.getText():null).length-1), 'letrero', this.currFunc, false, true);
						this.QuadruplesQueue.addQuadruple(10, null, null, stringAddress);
					
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpresionContext extends ParserRuleContext {
		public ComparadorContext comparador;
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public ComparadorContext comparador() {
			return getRuleContext(ComparadorContext.class,0);
		}
		public ExpresionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expresion; }
	}

	public final ExpresionContext expresion() throws RecognitionException {
		ExpresionContext _localctx = new ExpresionContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_expresion);
		try {
			setState(272);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(265);
				exp();
				setState(266);
				((ExpresionContext)_localctx).comparador = comparador();

						// Semantic action #2.10
						this.OperatorStack.push((((ExpresionContext)_localctx).comparador!=null?_input.getText(((ExpresionContext)_localctx).comparador.start,((ExpresionContext)_localctx).comparador.stop):null)); 
					
				setState(268);
				exp();

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
					
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(271);
				exp();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ComparadorContext extends ParserRuleContext {
		public TerminalNode LT() { return getToken(PatitoParserParser.LT, 0); }
		public TerminalNode GT() { return getToken(PatitoParserParser.GT, 0); }
		public TerminalNode EQ() { return getToken(PatitoParserParser.EQ, 0); }
		public TerminalNode NEQ() { return getToken(PatitoParserParser.NEQ, 0); }
		public ComparadorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comparador; }
	}

	public final ComparadorContext comparador() throws RecognitionException {
		ComparadorContext _localctx = new ComparadorContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_comparador);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(274);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 503316480L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpContext extends ParserRuleContext {
		public TerminoContext termino() {
			return getRuleContext(TerminoContext.class,0);
		}
		public List<Operaciones_signoContext> operaciones_signo() {
			return getRuleContexts(Operaciones_signoContext.class);
		}
		public Operaciones_signoContext operaciones_signo(int i) {
			return getRuleContext(Operaciones_signoContext.class,i);
		}
		public ExpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exp; }
	}

	public final ExpContext exp() throws RecognitionException {
		ExpContext _localctx = new ExpContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_exp);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(276);
			termino();

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
				
			setState(281);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(278);
					operaciones_signo();
					}
					} 
				}
				setState(283);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Operaciones_signoContext extends ParserRuleContext {
		public Token PLUS;
		public Token MINUS;
		public TerminalNode PLUS() { return getToken(PatitoParserParser.PLUS, 0); }
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public TerminalNode MINUS() { return getToken(PatitoParserParser.MINUS, 0); }
		public Operaciones_signoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operaciones_signo; }
	}

	public final Operaciones_signoContext operaciones_signo() throws RecognitionException {
		Operaciones_signoContext _localctx = new Operaciones_signoContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_operaciones_signo);
		try {
			setState(290);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PLUS:
				enterOuterAlt(_localctx, 1);
				{
				setState(284);
				((Operaciones_signoContext)_localctx).PLUS = match(PLUS);

						// Semantic action #2.4
						this.OperatorStack.push((((Operaciones_signoContext)_localctx).PLUS!=null?((Operaciones_signoContext)_localctx).PLUS.getText():null)); 
					
				setState(286);
				exp();
				}
				break;
			case MINUS:
				enterOuterAlt(_localctx, 2);
				{
				setState(287);
				((Operaciones_signoContext)_localctx).MINUS = match(MINUS);

						// Semantic action #2.4
						this.OperatorStack.push((((Operaciones_signoContext)_localctx).MINUS!=null?((Operaciones_signoContext)_localctx).MINUS.getText():null)); 
					
				setState(289);
				exp();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TerminoContext extends ParserRuleContext {
		public FactorContext factor() {
			return getRuleContext(FactorContext.class,0);
		}
		public List<Operaciones_factorContext> operaciones_factor() {
			return getRuleContexts(Operaciones_factorContext.class);
		}
		public Operaciones_factorContext operaciones_factor(int i) {
			return getRuleContext(Operaciones_factorContext.class,i);
		}
		public TerminoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_termino; }
	}

	public final TerminoContext termino() throws RecognitionException {
		TerminoContext _localctx = new TerminoContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_termino);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(292);
			factor();

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
				
			setState(297);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(294);
					operaciones_factor();
					}
					} 
				}
				setState(299);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Operaciones_factorContext extends ParserRuleContext {
		public Token MULT;
		public Token DIV;
		public TerminalNode MULT() { return getToken(PatitoParserParser.MULT, 0); }
		public TerminoContext termino() {
			return getRuleContext(TerminoContext.class,0);
		}
		public TerminalNode DIV() { return getToken(PatitoParserParser.DIV, 0); }
		public Operaciones_factorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operaciones_factor; }
	}

	public final Operaciones_factorContext operaciones_factor() throws RecognitionException {
		Operaciones_factorContext _localctx = new Operaciones_factorContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_operaciones_factor);
		try {
			setState(306);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case MULT:
				enterOuterAlt(_localctx, 1);
				{
				setState(300);
				((Operaciones_factorContext)_localctx).MULT = match(MULT);

							// Semantic action #2.5
							this.OperatorStack.push((((Operaciones_factorContext)_localctx).MULT!=null?((Operaciones_factorContext)_localctx).MULT.getText():null)); 
						
				setState(302);
				termino();
				}
				break;
			case DIV:
				enterOuterAlt(_localctx, 2);
				{
				setState(303);
				((Operaciones_factorContext)_localctx).DIV = match(DIV);

							// Semantic action #2.5
							this.OperatorStack.push((((Operaciones_factorContext)_localctx).DIV!=null?((Operaciones_factorContext)_localctx).DIV.getText():null)); 
						
				setState(305);
				termino();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FactorContext extends ParserRuleContext {
		public Token LPAR;
		public Operadores_signoContext operadores_signo;
		public Operandos_factorContext operandos_factor;
		public TerminalNode LPAR() { return getToken(PatitoParserParser.LPAR, 0); }
		public ExpresionContext expresion() {
			return getRuleContext(ExpresionContext.class,0);
		}
		public TerminalNode RPAR() { return getToken(PatitoParserParser.RPAR, 0); }
		public Operadores_signoContext operadores_signo() {
			return getRuleContext(Operadores_signoContext.class,0);
		}
		public Operandos_factorContext operandos_factor() {
			return getRuleContext(Operandos_factorContext.class,0);
		}
		public FactorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_factor; }
	}

	public final FactorContext factor() throws RecognitionException {
		FactorContext _localctx = new FactorContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_factor);
		try {
			setState(318);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LPAR:
				enterOuterAlt(_localctx, 1);
				{
				setState(308);
				((FactorContext)_localctx).LPAR = match(LPAR);

						// Semantic action #2.8
						this.OperatorStack.push((((FactorContext)_localctx).LPAR!=null?((FactorContext)_localctx).LPAR.getText():null)); 
					
				setState(310);
				expresion();

							// Semantic action #2.9
							if(this.OperatorStack.top() == "("){
								this.OperatorStack.pop();
							} else {
								console.error("Invalid expression inside parenthesis");
							}
						
				setState(312);
				match(RPAR);
				}
				break;
			case CTE_ENT:
			case CTE_FLOT:
			case ID:
			case PLUS:
			case MINUS:
				enterOuterAlt(_localctx, 2);
				{
				setState(314);
				((FactorContext)_localctx).operadores_signo = operadores_signo();
				setState(315);
				((FactorContext)_localctx).operandos_factor = operandos_factor();

						// Semantic action #2.3
						const REGEX_ID = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
						const REGEX_CTE_ENT = /^[0-9]+$/;
						const REGEX_CTE_FLOT = /^[0-9]+\.[0-9]+$/;

						this.currVar = (((FactorContext)_localctx).operandos_factor!=null?_input.getText(((FactorContext)_localctx).operandos_factor.start,((FactorContext)_localctx).operandos_factor.stop):null)

						if((((FactorContext)_localctx).operandos_factor!=null?_input.getText(((FactorContext)_localctx).operandos_factor.start,((FactorContext)_localctx).operandos_factor.stop):null).match(REGEX_ID) && (((FactorContext)_localctx).operadores_signo!=null?_input.getText(((FactorContext)_localctx).operadores_signo.start,((FactorContext)_localctx).operadores_signo.stop):null) == '-') {
							let rightOperand =  this.FunctionDir.functions[this.currFunc].variables[this.currVar];
							let leftOperand = this.FunctionDir.addVar('0', 'entero', this.currFunc, false, true);
							let operator = '-';
							let rightType = this.FunctionDir.getVariableType(rightOperand);
							let leftType = this.FunctionDir.getVariableType(leftOperand);
							let resultType = this.SematicCube[operator][rightType][leftType];
							let resultVariable = this.FunctionDir.addVar('t', resultType, this.currFunc, true);
							this.OperandStack.push(resultVariable);
							this.QuadruplesQueue.addQuadruple(this.SematicCube[operator]['code'], leftOperand, rightOperand, resultVariable);
						} else {
							if((((FactorContext)_localctx).operadores_signo!=null?_input.getText(((FactorContext)_localctx).operadores_signo.start,((FactorContext)_localctx).operadores_signo.stop):null) == '-'){
								this.currVar = '-' + this.currVar;
							}

							if((((FactorContext)_localctx).operandos_factor!=null?_input.getText(((FactorContext)_localctx).operandos_factor.start,((FactorContext)_localctx).operandos_factor.stop):null).match(REGEX_ID)) {
								this.OperandStack.push(this.FunctionDir.functions[this.currFunc].variables[this.currVar]);
							} else if((((FactorContext)_localctx).operandos_factor!=null?_input.getText(((FactorContext)_localctx).operandos_factor.start,((FactorContext)_localctx).operandos_factor.stop):null).match(REGEX_CTE_ENT)) {
								let constant = this.FunctionDir.addVar(this.currVar, 'entero', this.currFunc, false, true);
								this.OperandStack.push(constant);
							} else if((((FactorContext)_localctx).operandos_factor!=null?_input.getText(((FactorContext)_localctx).operandos_factor.start,((FactorContext)_localctx).operandos_factor.stop):null).match(REGEX_CTE_FLOT)) {
								let constant = this.FunctionDir.addVar(this.currVar, 'flotante', this.currFunc, false, true);
								this.OperandStack.push(constant);
							} 
						}
					
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Operadores_signoContext extends ParserRuleContext {
		public TerminalNode PLUS() { return getToken(PatitoParserParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(PatitoParserParser.MINUS, 0); }
		public Operadores_signoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operadores_signo; }
	}

	public final Operadores_signoContext operadores_signo() throws RecognitionException {
		Operadores_signoContext _localctx = new Operadores_signoContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_operadores_signo);
		try {
			setState(323);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PLUS:
				enterOuterAlt(_localctx, 1);
				{
				setState(320);
				match(PLUS);
				}
				break;
			case MINUS:
				enterOuterAlt(_localctx, 2);
				{
				setState(321);
				match(MINUS);
				}
				break;
			case CTE_ENT:
			case CTE_FLOT:
			case ID:
				enterOuterAlt(_localctx, 3);
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Operandos_factorContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(PatitoParserParser.ID, 0); }
		public CteContext cte() {
			return getRuleContext(CteContext.class,0);
		}
		public Operandos_factorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operandos_factor; }
	}

	public final Operandos_factorContext operandos_factor() throws RecognitionException {
		Operandos_factorContext _localctx = new Operandos_factorContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_operandos_factor);
		try {
			setState(327);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(325);
				match(ID);
				}
				break;
			case CTE_ENT:
			case CTE_FLOT:
				enterOuterAlt(_localctx, 2);
				{
				setState(326);
				cte();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CteContext extends ParserRuleContext {
		public TerminalNode CTE_ENT() { return getToken(PatitoParserParser.CTE_ENT, 0); }
		public TerminalNode CTE_FLOT() { return getToken(PatitoParserParser.CTE_FLOT, 0); }
		public CteContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cte; }
	}

	public final CteContext cte() throws RecognitionException {
		CteContext _localctx = new CteContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_cte);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(329);
			_la = _input.LA(1);
			if ( !(_la==CTE_ENT || _la==CTE_FLOT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001!\u014c\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018"+
		"\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002\u001b\u0007\u001b"+
		"\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002\u001e\u0007\u001e"+
		"\u0002\u001f\u0007\u001f\u0002 \u0007 \u0002!\u0007!\u0002\"\u0007\"\u0002"+
		"#\u0007#\u0002$\u0007$\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0003\u0001"+
		"Z\b\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003"+
		"\u0001\u0003\u0003\u0003b\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u0006q\b\u0006"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007w\b\u0007"+
		"\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0003\t\u008b\b\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0003\n\u0092"+
		"\b\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0003\u000e\u00a3\b\u000e\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0003\u000f\u00aa\b\u000f\u0001\u0010\u0001"+
		"\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001"+
		"\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001"+
		"\u0011\u0001\u0011\u0005\u0011\u00bb\b\u0011\n\u0011\f\u0011\u00be\t\u0011"+
		"\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0012"+
		"\u0001\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013"+
		"\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013"+
		"\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0005\u0014"+
		"\u00d7\b\u0014\n\u0014\f\u0014\u00da\t\u0014\u0001\u0014\u0001\u0014\u0001"+
		"\u0014\u0001\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0005"+
		"\u0015\u00e4\b\u0015\n\u0015\f\u0015\u00e7\t\u0015\u0001\u0016\u0001\u0016"+
		"\u0005\u0016\u00eb\b\u0016\n\u0016\f\u0016\u00ee\t\u0016\u0001\u0017\u0001"+
		"\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0018\u0001"+
		"\u0018\u0001\u0018\u0001\u0018\u0003\u0018\u00fa\b\u0018\u0001\u0019\u0001"+
		"\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0003\u0019\u0101\b\u0019\u0001"+
		"\u001a\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001a\u0003\u001a\u0108"+
		"\b\u001a\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001"+
		"\u001b\u0001\u001b\u0003\u001b\u0111\b\u001b\u0001\u001c\u0001\u001c\u0001"+
		"\u001d\u0001\u001d\u0001\u001d\u0005\u001d\u0118\b\u001d\n\u001d\f\u001d"+
		"\u011b\t\u001d\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e"+
		"\u0001\u001e\u0003\u001e\u0123\b\u001e\u0001\u001f\u0001\u001f\u0001\u001f"+
		"\u0005\u001f\u0128\b\u001f\n\u001f\f\u001f\u012b\t\u001f\u0001 \u0001"+
		" \u0001 \u0001 \u0001 \u0001 \u0003 \u0133\b \u0001!\u0001!\u0001!\u0001"+
		"!\u0001!\u0001!\u0001!\u0001!\u0001!\u0001!\u0003!\u013f\b!\u0001\"\u0001"+
		"\"\u0001\"\u0003\"\u0144\b\"\u0001#\u0001#\u0003#\u0148\b#\u0001$\u0001"+
		"$\u0001$\u0000\u0000%\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012"+
		"\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFH\u0000\u0003"+
		"\u0001\u0000\u0003\u0004\u0001\u0000\u0019\u001c\u0001\u0000\f\r\u0141"+
		"\u0000J\u0001\u0000\u0000\u0000\u0002Y\u0001\u0000\u0000\u0000\u0004["+
		"\u0001\u0000\u0000\u0000\u0006a\u0001\u0000\u0000\u0000\bc\u0001\u0000"+
		"\u0000\u0000\ni\u0001\u0000\u0000\u0000\fp\u0001\u0000\u0000\u0000\u000e"+
		"v\u0001\u0000\u0000\u0000\u0010x\u0001\u0000\u0000\u0000\u0012\u008a\u0001"+
		"\u0000\u0000\u0000\u0014\u0091\u0001\u0000\u0000\u0000\u0016\u0093\u0001"+
		"\u0000\u0000\u0000\u0018\u0098\u0001\u0000\u0000\u0000\u001a\u009a\u0001"+
		"\u0000\u0000\u0000\u001c\u00a2\u0001\u0000\u0000\u0000\u001e\u00a9\u0001"+
		"\u0000\u0000\u0000 \u00ab\u0001\u0000\u0000\u0000\"\u00b3\u0001\u0000"+
		"\u0000\u0000$\u00c2\u0001\u0000\u0000\u0000&\u00c6\u0001\u0000\u0000\u0000"+
		"(\u00d1\u0001\u0000\u0000\u0000*\u00e0\u0001\u0000\u0000\u0000,\u00e8"+
		"\u0001\u0000\u0000\u0000.\u00ef\u0001\u0000\u0000\u00000\u00f9\u0001\u0000"+
		"\u0000\u00002\u0100\u0001\u0000\u0000\u00004\u0107\u0001\u0000\u0000\u0000"+
		"6\u0110\u0001\u0000\u0000\u00008\u0112\u0001\u0000\u0000\u0000:\u0114"+
		"\u0001\u0000\u0000\u0000<\u0122\u0001\u0000\u0000\u0000>\u0124\u0001\u0000"+
		"\u0000\u0000@\u0132\u0001\u0000\u0000\u0000B\u013e\u0001\u0000\u0000\u0000"+
		"D\u0143\u0001\u0000\u0000\u0000F\u0147\u0001\u0000\u0000\u0000H\u0149"+
		"\u0001\u0000\u0000\u0000JK\u0006\u0000\uffff\uffff\u0000KL\u0005\u0001"+
		"\u0000\u0000LM\u0005\u000f\u0000\u0000MN\u0006\u0000\uffff\uffff\u0000"+
		"NO\u0005\u0011\u0000\u0000OP\u0003\u0002\u0001\u0000PQ\u0003\u000e\u0007"+
		"\u0000QR\u0005\n\u0000\u0000RS\u0006\u0000\uffff\uffff\u0000ST\u0003\u001a"+
		"\r\u0000TU\u0005\u000b\u0000\u0000UV\u0006\u0000\uffff\uffff\u0000V\u0001"+
		"\u0001\u0000\u0000\u0000WZ\u0003\u0004\u0002\u0000XZ\u0001\u0000\u0000"+
		"\u0000YW\u0001\u0000\u0000\u0000YX\u0001\u0000\u0000\u0000Z\u0003\u0001"+
		"\u0000\u0000\u0000[\\\u0005\u0002\u0000\u0000\\]\u0003\b\u0004\u0000]"+
		"^\u0003\u0006\u0003\u0000^\u0005\u0001\u0000\u0000\u0000_b\u0003\b\u0004"+
		"\u0000`b\u0001\u0000\u0000\u0000a_\u0001\u0000\u0000\u0000a`\u0001\u0000"+
		"\u0000\u0000b\u0007\u0001\u0000\u0000\u0000cd\u0003\n\u0005\u0000de\u0005"+
		"\u0012\u0000\u0000ef\u0003\u0018\f\u0000fg\u0006\u0004\uffff\uffff\u0000"+
		"gh\u0005\u0011\u0000\u0000h\t\u0001\u0000\u0000\u0000ij\u0005\u000f\u0000"+
		"\u0000jk\u0003\f\u0006\u0000k\u000b\u0001\u0000\u0000\u0000lm\u0005\u0013"+
		"\u0000\u0000mn\u0005\u000f\u0000\u0000nq\u0003\f\u0006\u0000oq\u0001\u0000"+
		"\u0000\u0000pl\u0001\u0000\u0000\u0000po\u0001\u0000\u0000\u0000q\r\u0001"+
		"\u0000\u0000\u0000rs\u0003\u0010\b\u0000st\u0003\u000e\u0007\u0000tw\u0001"+
		"\u0000\u0000\u0000uw\u0001\u0000\u0000\u0000vr\u0001\u0000\u0000\u0000"+
		"vu\u0001\u0000\u0000\u0000w\u000f\u0001\u0000\u0000\u0000xy\u0005\u0005"+
		"\u0000\u0000yz\u0005\u000f\u0000\u0000z{\u0006\b\uffff\uffff\u0000{|\u0005"+
		"\u0014\u0000\u0000|}\u0003\u0012\t\u0000}~\u0005\u0015\u0000\u0000~\u007f"+
		"\u0005\u0016\u0000\u0000\u007f\u0080\u0003\u0002\u0001\u0000\u0080\u0081"+
		"\u0006\b\uffff\uffff\u0000\u0081\u0082\u0003\u001a\r\u0000\u0082\u0083"+
		"\u0005\u0017\u0000\u0000\u0083\u0084\u0005\u0011\u0000\u0000\u0084\u0085"+
		"\u0006\b\uffff\uffff\u0000\u0085\u0011\u0001\u0000\u0000\u0000\u0086\u0087"+
		"\u0003\u0016\u000b\u0000\u0087\u0088\u0003\u0014\n\u0000\u0088\u008b\u0001"+
		"\u0000\u0000\u0000\u0089\u008b\u0001\u0000\u0000\u0000\u008a\u0086\u0001"+
		"\u0000\u0000\u0000\u008a\u0089\u0001\u0000\u0000\u0000\u008b\u0013\u0001"+
		"\u0000\u0000\u0000\u008c\u008d\u0005\u0013\u0000\u0000\u008d\u008e\u0003"+
		"\u0016\u000b\u0000\u008e\u008f\u0003\u0014\n\u0000\u008f\u0092\u0001\u0000"+
		"\u0000\u0000\u0090\u0092\u0001\u0000\u0000\u0000\u0091\u008c\u0001\u0000"+
		"\u0000\u0000\u0091\u0090\u0001\u0000\u0000\u0000\u0092\u0015\u0001\u0000"+
		"\u0000\u0000\u0093\u0094\u0005\u000f\u0000\u0000\u0094\u0095\u0005\u0012"+
		"\u0000\u0000\u0095\u0096\u0003\u0018\f\u0000\u0096\u0097\u0006\u000b\uffff"+
		"\uffff\u0000\u0097\u0017\u0001\u0000\u0000\u0000\u0098\u0099\u0007\u0000"+
		"\u0000\u0000\u0099\u0019\u0001\u0000\u0000\u0000\u009a\u009b\u0005\u0016"+
		"\u0000\u0000\u009b\u009c\u0003\u001c\u000e\u0000\u009c\u009d\u0005\u0017"+
		"\u0000\u0000\u009d\u001b\u0001\u0000\u0000\u0000\u009e\u009f\u0003\u001e"+
		"\u000f\u0000\u009f\u00a0\u0003\u001c\u000e\u0000\u00a0\u00a3\u0001\u0000"+
		"\u0000\u0000\u00a1\u00a3\u0001\u0000\u0000\u0000\u00a2\u009e\u0001\u0000"+
		"\u0000\u0000\u00a2\u00a1\u0001\u0000\u0000\u0000\u00a3\u001d\u0001\u0000"+
		"\u0000\u0000\u00a4\u00aa\u0003 \u0010\u0000\u00a5\u00aa\u0003\"\u0011"+
		"\u0000\u00a6\u00aa\u0003&\u0013\u0000\u00a7\u00aa\u0003(\u0014\u0000\u00a8"+
		"\u00aa\u0003.\u0017\u0000\u00a9\u00a4\u0001\u0000\u0000\u0000\u00a9\u00a5"+
		"\u0001\u0000\u0000\u0000\u00a9\u00a6\u0001\u0000\u0000\u0000\u00a9\u00a7"+
		"\u0001\u0000\u0000\u0000\u00a9\u00a8\u0001\u0000\u0000\u0000\u00aa\u001f"+
		"\u0001\u0000\u0000\u0000\u00ab\u00ac\u0005\u000f\u0000\u0000\u00ac\u00ad"+
		"\u0006\u0010\uffff\uffff\u0000\u00ad\u00ae\u0005\u0018\u0000\u0000\u00ae"+
		"\u00af\u0006\u0010\uffff\uffff\u0000\u00af\u00b0\u00036\u001b\u0000\u00b0"+
		"\u00b1\u0006\u0010\uffff\uffff\u0000\u00b1\u00b2\u0005\u0011\u0000\u0000"+
		"\u00b2!\u0001\u0000\u0000\u0000\u00b3\u00b4\u0005\u0006\u0000\u0000\u00b4"+
		"\u00b5\u0005\u0014\u0000\u0000\u00b5\u00b6\u00036\u001b\u0000\u00b6\u00b7"+
		"\u0005\u0015\u0000\u0000\u00b7\u00b8\u0006\u0011\uffff\uffff\u0000\u00b8"+
		"\u00bc\u0003\u001a\r\u0000\u00b9\u00bb\u0003$\u0012\u0000\u00ba\u00b9"+
		"\u0001\u0000\u0000\u0000\u00bb\u00be\u0001\u0000\u0000\u0000\u00bc\u00ba"+
		"\u0001\u0000\u0000\u0000\u00bc\u00bd\u0001\u0000\u0000\u0000\u00bd\u00bf"+
		"\u0001\u0000\u0000\u0000\u00be\u00bc\u0001\u0000\u0000\u0000\u00bf\u00c0"+
		"\u0005\u0011\u0000\u0000\u00c0\u00c1\u0006\u0011\uffff\uffff\u0000\u00c1"+
		"#\u0001\u0000\u0000\u0000\u00c2\u00c3\u0005\u0007\u0000\u0000\u00c3\u00c4"+
		"\u0006\u0012\uffff\uffff\u0000\u00c4\u00c5\u0003\u001a\r\u0000\u00c5%"+
		"\u0001\u0000\u0000\u0000\u00c6\u00c7\u0005\b\u0000\u0000\u00c7\u00c8\u0006"+
		"\u0013\uffff\uffff\u0000\u00c8\u00c9\u0005\u0014\u0000\u0000\u00c9\u00ca"+
		"\u00036\u001b\u0000\u00ca\u00cb\u0005\u0015\u0000\u0000\u00cb\u00cc\u0006"+
		"\u0013\uffff\uffff\u0000\u00cc\u00cd\u0005\t\u0000\u0000\u00cd\u00ce\u0003"+
		"\u001a\r\u0000\u00ce\u00cf\u0005\u0011\u0000\u0000\u00cf\u00d0\u0006\u0013"+
		"\uffff\uffff\u0000\u00d0\'\u0001\u0000\u0000\u0000\u00d1\u00d2\u0005\u000f"+
		"\u0000\u0000\u00d2\u00d3\u0006\u0014\uffff\uffff\u0000\u00d3\u00d4\u0005"+
		"\u0014\u0000\u0000\u00d4\u00d8\u0006\u0014\uffff\uffff\u0000\u00d5\u00d7"+
		"\u0003*\u0015\u0000\u00d6\u00d5\u0001\u0000\u0000\u0000\u00d7\u00da\u0001"+
		"\u0000\u0000\u0000\u00d8\u00d6\u0001\u0000\u0000\u0000\u00d8\u00d9\u0001"+
		"\u0000\u0000\u0000\u00d9\u00db\u0001\u0000\u0000\u0000\u00da\u00d8\u0001"+
		"\u0000\u0000\u0000\u00db\u00dc\u0006\u0014\uffff\uffff\u0000\u00dc\u00dd"+
		"\u0005\u0015\u0000\u0000\u00dd\u00de\u0006\u0014\uffff\uffff\u0000\u00de"+
		"\u00df\u0005\u0011\u0000\u0000\u00df)\u0001\u0000\u0000\u0000\u00e0\u00e1"+
		"\u00036\u001b\u0000\u00e1\u00e5\u0006\u0015\uffff\uffff\u0000\u00e2\u00e4"+
		"\u0003,\u0016\u0000\u00e3\u00e2\u0001\u0000\u0000\u0000\u00e4\u00e7\u0001"+
		"\u0000\u0000\u0000\u00e5\u00e3\u0001\u0000\u0000\u0000\u00e5\u00e6\u0001"+
		"\u0000\u0000\u0000\u00e6+\u0001\u0000\u0000\u0000\u00e7\u00e5\u0001\u0000"+
		"\u0000\u0000\u00e8\u00ec\u0005\u0013\u0000\u0000\u00e9\u00eb\u0003*\u0015"+
		"\u0000\u00ea\u00e9\u0001\u0000\u0000\u0000\u00eb\u00ee\u0001\u0000\u0000"+
		"\u0000\u00ec\u00ea\u0001\u0000\u0000\u0000\u00ec\u00ed\u0001\u0000\u0000"+
		"\u0000\u00ed-\u0001\u0000\u0000\u0000\u00ee\u00ec\u0001\u0000\u0000\u0000"+
		"\u00ef\u00f0\u0005\u000e\u0000\u0000\u00f0\u00f1\u0005\u0014\u0000\u0000"+
		"\u00f1\u00f2\u00030\u0018\u0000\u00f2\u00f3\u0005\u0015\u0000\u0000\u00f3"+
		"\u00f4\u0005\u0011\u0000\u0000\u00f4/\u0001\u0000\u0000\u0000\u00f5\u00f6"+
		"\u00034\u001a\u0000\u00f6\u00f7\u00032\u0019\u0000\u00f7\u00fa\u0001\u0000"+
		"\u0000\u0000\u00f8\u00fa\u0001\u0000\u0000\u0000\u00f9\u00f5\u0001\u0000"+
		"\u0000\u0000\u00f9\u00f8\u0001\u0000\u0000\u0000\u00fa1\u0001\u0000\u0000"+
		"\u0000\u00fb\u00fc\u0005\u0013\u0000\u0000\u00fc\u00fd\u00034\u001a\u0000"+
		"\u00fd\u00fe\u00032\u0019\u0000\u00fe\u0101\u0001\u0000\u0000\u0000\u00ff"+
		"\u0101\u0001\u0000\u0000\u0000\u0100\u00fb\u0001\u0000\u0000\u0000\u0100"+
		"\u00ff\u0001\u0000\u0000\u0000\u01013\u0001\u0000\u0000\u0000\u0102\u0103"+
		"\u00036\u001b\u0000\u0103\u0104\u0006\u001a\uffff\uffff\u0000\u0104\u0108"+
		"\u0001\u0000\u0000\u0000\u0105\u0106\u0005\u0010\u0000\u0000\u0106\u0108"+
		"\u0006\u001a\uffff\uffff\u0000\u0107\u0102\u0001\u0000\u0000\u0000\u0107"+
		"\u0105\u0001\u0000\u0000\u0000\u01085\u0001\u0000\u0000\u0000\u0109\u010a"+
		"\u0003:\u001d\u0000\u010a\u010b\u00038\u001c\u0000\u010b\u010c\u0006\u001b"+
		"\uffff\uffff\u0000\u010c\u010d\u0003:\u001d\u0000\u010d\u010e\u0006\u001b"+
		"\uffff\uffff\u0000\u010e\u0111\u0001\u0000\u0000\u0000\u010f\u0111\u0003"+
		":\u001d\u0000\u0110\u0109\u0001\u0000\u0000\u0000\u0110\u010f\u0001\u0000"+
		"\u0000\u0000\u01117\u0001\u0000\u0000\u0000\u0112\u0113\u0007\u0001\u0000"+
		"\u0000\u01139\u0001\u0000\u0000\u0000\u0114\u0115\u0003>\u001f\u0000\u0115"+
		"\u0119\u0006\u001d\uffff\uffff\u0000\u0116\u0118\u0003<\u001e\u0000\u0117"+
		"\u0116\u0001\u0000\u0000\u0000\u0118\u011b\u0001\u0000\u0000\u0000\u0119"+
		"\u0117\u0001\u0000\u0000\u0000\u0119\u011a\u0001\u0000\u0000\u0000\u011a"+
		";\u0001\u0000\u0000\u0000\u011b\u0119\u0001\u0000\u0000\u0000\u011c\u011d"+
		"\u0005\u001d\u0000\u0000\u011d\u011e\u0006\u001e\uffff\uffff\u0000\u011e"+
		"\u0123\u0003:\u001d\u0000\u011f\u0120\u0005\u001e\u0000\u0000\u0120\u0121"+
		"\u0006\u001e\uffff\uffff\u0000\u0121\u0123\u0003:\u001d\u0000\u0122\u011c"+
		"\u0001\u0000\u0000\u0000\u0122\u011f\u0001\u0000\u0000\u0000\u0123=\u0001"+
		"\u0000\u0000\u0000\u0124\u0125\u0003B!\u0000\u0125\u0129\u0006\u001f\uffff"+
		"\uffff\u0000\u0126\u0128\u0003@ \u0000\u0127\u0126\u0001\u0000\u0000\u0000"+
		"\u0128\u012b\u0001\u0000\u0000\u0000\u0129\u0127\u0001\u0000\u0000\u0000"+
		"\u0129\u012a\u0001\u0000\u0000\u0000\u012a?\u0001\u0000\u0000\u0000\u012b"+
		"\u0129\u0001\u0000\u0000\u0000\u012c\u012d\u0005\u001f\u0000\u0000\u012d"+
		"\u012e\u0006 \uffff\uffff\u0000\u012e\u0133\u0003>\u001f\u0000\u012f\u0130"+
		"\u0005 \u0000\u0000\u0130\u0131\u0006 \uffff\uffff\u0000\u0131\u0133\u0003"+
		">\u001f\u0000\u0132\u012c\u0001\u0000\u0000\u0000\u0132\u012f\u0001\u0000"+
		"\u0000\u0000\u0133A\u0001\u0000\u0000\u0000\u0134\u0135\u0005\u0014\u0000"+
		"\u0000\u0135\u0136\u0006!\uffff\uffff\u0000\u0136\u0137\u00036\u001b\u0000"+
		"\u0137\u0138\u0006!\uffff\uffff\u0000\u0138\u0139\u0005\u0015\u0000\u0000"+
		"\u0139\u013f\u0001\u0000\u0000\u0000\u013a\u013b\u0003D\"\u0000\u013b"+
		"\u013c\u0003F#\u0000\u013c\u013d\u0006!\uffff\uffff\u0000\u013d\u013f"+
		"\u0001\u0000\u0000\u0000\u013e\u0134\u0001\u0000\u0000\u0000\u013e\u013a"+
		"\u0001\u0000\u0000\u0000\u013fC\u0001\u0000\u0000\u0000\u0140\u0144\u0005"+
		"\u001d\u0000\u0000\u0141\u0144\u0005\u001e\u0000\u0000\u0142\u0144\u0001"+
		"\u0000\u0000\u0000\u0143\u0140\u0001\u0000\u0000\u0000\u0143\u0141\u0001"+
		"\u0000\u0000\u0000\u0143\u0142\u0001\u0000\u0000\u0000\u0144E\u0001\u0000"+
		"\u0000\u0000\u0145\u0148\u0005\u000f\u0000\u0000\u0146\u0148\u0003H$\u0000"+
		"\u0147\u0145\u0001\u0000\u0000\u0000\u0147\u0146\u0001\u0000\u0000\u0000"+
		"\u0148G\u0001\u0000\u0000\u0000\u0149\u014a\u0007\u0002\u0000\u0000\u014a"+
		"I\u0001\u0000\u0000\u0000\u0017Yapv\u008a\u0091\u00a2\u00a9\u00bc\u00d8"+
		"\u00e5\u00ec\u00f9\u0100\u0107\u0110\u0119\u0122\u0129\u0132\u013e\u0143"+
		"\u0147";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}