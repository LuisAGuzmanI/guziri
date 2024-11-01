// Generated from /Users/luisangelguzmaniribe/Documents/GitHub/guziri/PatitoLexer.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class PatitoLexer extends Lexer {
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
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"PROGRAM", "VARS", "ENTERO", "FLOTANTE", "NULA", "SI", "SINO", "MIENTRAS", 
			"HAZ", "INICIO", "FIN", "CTE_ENT", "CTE_FLOT", "ESCRIBE", "ID", "LETRERO", 
			"SEMICOLON", "COLON", "COMMA", "LPAR", "RPAR", "LBRACE", "RBRACE", "ASSIGN", 
			"GT", "LT", "NEQ", "EQ", "PLUS", "MINUS", "MULT", "DIV", "WS"
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


	public PatitoLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "PatitoLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000!\u00d7\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002"+
		"\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002"+
		"\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002"+
		"\u0018\u0007\u0018\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002"+
		"\u001b\u0007\u001b\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002"+
		"\u001e\u0007\u001e\u0002\u001f\u0007\u001f\u0002 \u0007 \u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t"+
		"\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\u000b\u0004\u000b\u0088\b\u000b\u000b\u000b\f\u000b\u0089"+
		"\u0001\f\u0004\f\u008d\b\f\u000b\f\f\f\u008e\u0001\f\u0001\f\u0004\f\u0093"+
		"\b\f\u000b\f\f\f\u0094\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r"+
		"\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0005\u000e\u00a1\b\u000e\n\u000e"+
		"\f\u000e\u00a4\t\u000e\u0001\u000f\u0001\u000f\u0005\u000f\u00a8\b\u000f"+
		"\n\u000f\f\u000f\u00ab\t\u000f\u0001\u000f\u0001\u000f\u0001\u0010\u0001"+
		"\u0010\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0013\u0001"+
		"\u0013\u0001\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0001\u0016\u0001"+
		"\u0016\u0001\u0017\u0001\u0017\u0001\u0018\u0001\u0018\u0001\u0019\u0001"+
		"\u0019\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001b\u0001\u001b\u0001"+
		"\u001b\u0001\u001c\u0001\u001c\u0001\u001d\u0001\u001d\u0001\u001e\u0001"+
		"\u001e\u0001\u001f\u0001\u001f\u0001 \u0004 \u00d2\b \u000b \f \u00d3"+
		"\u0001 \u0001 \u0001\u00a9\u0000!\u0001\u0001\u0003\u0002\u0005\u0003"+
		"\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015"+
		"\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012"+
		"%\u0013\'\u0014)\u0015+\u0016-\u0017/\u00181\u00193\u001a5\u001b7\u001c"+
		"9\u001d;\u001e=\u001f? A!\u0001\u0000\u0004\u0001\u000009\u0003\u0000"+
		"AZ__az\u0004\u000009AZ__az\u0003\u0000\t\n\r\r  \u00dc\u0000\u0001\u0001"+
		"\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001"+
		"\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000"+
		"\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000"+
		"\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000"+
		"\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000"+
		"\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000"+
		"\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000"+
		"\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000"+
		"\u0000#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000\u0000\u0000\'"+
		"\u0001\u0000\u0000\u0000\u0000)\u0001\u0000\u0000\u0000\u0000+\u0001\u0000"+
		"\u0000\u0000\u0000-\u0001\u0000\u0000\u0000\u0000/\u0001\u0000\u0000\u0000"+
		"\u00001\u0001\u0000\u0000\u0000\u00003\u0001\u0000\u0000\u0000\u00005"+
		"\u0001\u0000\u0000\u0000\u00007\u0001\u0000\u0000\u0000\u00009\u0001\u0000"+
		"\u0000\u0000\u0000;\u0001\u0000\u0000\u0000\u0000=\u0001\u0000\u0000\u0000"+
		"\u0000?\u0001\u0000\u0000\u0000\u0000A\u0001\u0000\u0000\u0000\u0001C"+
		"\u0001\u0000\u0000\u0000\u0003L\u0001\u0000\u0000\u0000\u0005Q\u0001\u0000"+
		"\u0000\u0000\u0007X\u0001\u0000\u0000\u0000\ta\u0001\u0000\u0000\u0000"+
		"\u000bf\u0001\u0000\u0000\u0000\ri\u0001\u0000\u0000\u0000\u000fn\u0001"+
		"\u0000\u0000\u0000\u0011w\u0001\u0000\u0000\u0000\u0013{\u0001\u0000\u0000"+
		"\u0000\u0015\u0082\u0001\u0000\u0000\u0000\u0017\u0087\u0001\u0000\u0000"+
		"\u0000\u0019\u008c\u0001\u0000\u0000\u0000\u001b\u0096\u0001\u0000\u0000"+
		"\u0000\u001d\u009e\u0001\u0000\u0000\u0000\u001f\u00a5\u0001\u0000\u0000"+
		"\u0000!\u00ae\u0001\u0000\u0000\u0000#\u00b0\u0001\u0000\u0000\u0000%"+
		"\u00b2\u0001\u0000\u0000\u0000\'\u00b4\u0001\u0000\u0000\u0000)\u00b6"+
		"\u0001\u0000\u0000\u0000+\u00b8\u0001\u0000\u0000\u0000-\u00ba\u0001\u0000"+
		"\u0000\u0000/\u00bc\u0001\u0000\u0000\u00001\u00be\u0001\u0000\u0000\u0000"+
		"3\u00c0\u0001\u0000\u0000\u00005\u00c2\u0001\u0000\u0000\u00007\u00c5"+
		"\u0001\u0000\u0000\u00009\u00c8\u0001\u0000\u0000\u0000;\u00ca\u0001\u0000"+
		"\u0000\u0000=\u00cc\u0001\u0000\u0000\u0000?\u00ce\u0001\u0000\u0000\u0000"+
		"A\u00d1\u0001\u0000\u0000\u0000CD\u0005p\u0000\u0000DE\u0005r\u0000\u0000"+
		"EF\u0005o\u0000\u0000FG\u0005g\u0000\u0000GH\u0005r\u0000\u0000HI\u0005"+
		"a\u0000\u0000IJ\u0005m\u0000\u0000JK\u0005a\u0000\u0000K\u0002\u0001\u0000"+
		"\u0000\u0000LM\u0005v\u0000\u0000MN\u0005a\u0000\u0000NO\u0005r\u0000"+
		"\u0000OP\u0005s\u0000\u0000P\u0004\u0001\u0000\u0000\u0000QR\u0005e\u0000"+
		"\u0000RS\u0005n\u0000\u0000ST\u0005t\u0000\u0000TU\u0005e\u0000\u0000"+
		"UV\u0005r\u0000\u0000VW\u0005o\u0000\u0000W\u0006\u0001\u0000\u0000\u0000"+
		"XY\u0005f\u0000\u0000YZ\u0005l\u0000\u0000Z[\u0005o\u0000\u0000[\\\u0005"+
		"t\u0000\u0000\\]\u0005a\u0000\u0000]^\u0005n\u0000\u0000^_\u0005t\u0000"+
		"\u0000_`\u0005e\u0000\u0000`\b\u0001\u0000\u0000\u0000ab\u0005n\u0000"+
		"\u0000bc\u0005u\u0000\u0000cd\u0005l\u0000\u0000de\u0005a\u0000\u0000"+
		"e\n\u0001\u0000\u0000\u0000fg\u0005s\u0000\u0000gh\u0005i\u0000\u0000"+
		"h\f\u0001\u0000\u0000\u0000ij\u0005s\u0000\u0000jk\u0005i\u0000\u0000"+
		"kl\u0005n\u0000\u0000lm\u0005o\u0000\u0000m\u000e\u0001\u0000\u0000\u0000"+
		"no\u0005m\u0000\u0000op\u0005i\u0000\u0000pq\u0005e\u0000\u0000qr\u0005"+
		"n\u0000\u0000rs\u0005t\u0000\u0000st\u0005r\u0000\u0000tu\u0005a\u0000"+
		"\u0000uv\u0005s\u0000\u0000v\u0010\u0001\u0000\u0000\u0000wx\u0005h\u0000"+
		"\u0000xy\u0005a\u0000\u0000yz\u0005z\u0000\u0000z\u0012\u0001\u0000\u0000"+
		"\u0000{|\u0005i\u0000\u0000|}\u0005n\u0000\u0000}~\u0005i\u0000\u0000"+
		"~\u007f\u0005c\u0000\u0000\u007f\u0080\u0005i\u0000\u0000\u0080\u0081"+
		"\u0005o\u0000\u0000\u0081\u0014\u0001\u0000\u0000\u0000\u0082\u0083\u0005"+
		"f\u0000\u0000\u0083\u0084\u0005i\u0000\u0000\u0084\u0085\u0005n\u0000"+
		"\u0000\u0085\u0016\u0001\u0000\u0000\u0000\u0086\u0088\u0007\u0000\u0000"+
		"\u0000\u0087\u0086\u0001\u0000\u0000\u0000\u0088\u0089\u0001\u0000\u0000"+
		"\u0000\u0089\u0087\u0001\u0000\u0000\u0000\u0089\u008a\u0001\u0000\u0000"+
		"\u0000\u008a\u0018\u0001\u0000\u0000\u0000\u008b\u008d\u0007\u0000\u0000"+
		"\u0000\u008c\u008b\u0001\u0000\u0000\u0000\u008d\u008e\u0001\u0000\u0000"+
		"\u0000\u008e\u008c\u0001\u0000\u0000\u0000\u008e\u008f\u0001\u0000\u0000"+
		"\u0000\u008f\u0090\u0001\u0000\u0000\u0000\u0090\u0092\u0005.\u0000\u0000"+
		"\u0091\u0093\u0007\u0000\u0000\u0000\u0092\u0091\u0001\u0000\u0000\u0000"+
		"\u0093\u0094\u0001\u0000\u0000\u0000\u0094\u0092\u0001\u0000\u0000\u0000"+
		"\u0094\u0095\u0001\u0000\u0000\u0000\u0095\u001a\u0001\u0000\u0000\u0000"+
		"\u0096\u0097\u0005e\u0000\u0000\u0097\u0098\u0005s\u0000\u0000\u0098\u0099"+
		"\u0005c\u0000\u0000\u0099\u009a\u0005r\u0000\u0000\u009a\u009b\u0005i"+
		"\u0000\u0000\u009b\u009c\u0005b\u0000\u0000\u009c\u009d\u0005e\u0000\u0000"+
		"\u009d\u001c\u0001\u0000\u0000\u0000\u009e\u00a2\u0007\u0001\u0000\u0000"+
		"\u009f\u00a1\u0007\u0002\u0000\u0000\u00a0\u009f\u0001\u0000\u0000\u0000"+
		"\u00a1\u00a4\u0001\u0000\u0000\u0000\u00a2\u00a0\u0001\u0000\u0000\u0000"+
		"\u00a2\u00a3\u0001\u0000\u0000\u0000\u00a3\u001e\u0001\u0000\u0000\u0000"+
		"\u00a4\u00a2\u0001\u0000\u0000\u0000\u00a5\u00a9\u0005\"\u0000\u0000\u00a6"+
		"\u00a8\t\u0000\u0000\u0000\u00a7\u00a6\u0001\u0000\u0000\u0000\u00a8\u00ab"+
		"\u0001\u0000\u0000\u0000\u00a9\u00aa\u0001\u0000\u0000\u0000\u00a9\u00a7"+
		"\u0001\u0000\u0000\u0000\u00aa\u00ac\u0001\u0000\u0000\u0000\u00ab\u00a9"+
		"\u0001\u0000\u0000\u0000\u00ac\u00ad\u0005\"\u0000\u0000\u00ad \u0001"+
		"\u0000\u0000\u0000\u00ae\u00af\u0005;\u0000\u0000\u00af\"\u0001\u0000"+
		"\u0000\u0000\u00b0\u00b1\u0005:\u0000\u0000\u00b1$\u0001\u0000\u0000\u0000"+
		"\u00b2\u00b3\u0005,\u0000\u0000\u00b3&\u0001\u0000\u0000\u0000\u00b4\u00b5"+
		"\u0005(\u0000\u0000\u00b5(\u0001\u0000\u0000\u0000\u00b6\u00b7\u0005)"+
		"\u0000\u0000\u00b7*\u0001\u0000\u0000\u0000\u00b8\u00b9\u0005{\u0000\u0000"+
		"\u00b9,\u0001\u0000\u0000\u0000\u00ba\u00bb\u0005}\u0000\u0000\u00bb."+
		"\u0001\u0000\u0000\u0000\u00bc\u00bd\u0005=\u0000\u0000\u00bd0\u0001\u0000"+
		"\u0000\u0000\u00be\u00bf\u0005>\u0000\u0000\u00bf2\u0001\u0000\u0000\u0000"+
		"\u00c0\u00c1\u0005<\u0000\u0000\u00c14\u0001\u0000\u0000\u0000\u00c2\u00c3"+
		"\u0005!\u0000\u0000\u00c3\u00c4\u0005=\u0000\u0000\u00c46\u0001\u0000"+
		"\u0000\u0000\u00c5\u00c6\u0005=\u0000\u0000\u00c6\u00c7\u0005=\u0000\u0000"+
		"\u00c78\u0001\u0000\u0000\u0000\u00c8\u00c9\u0005+\u0000\u0000\u00c9:"+
		"\u0001\u0000\u0000\u0000\u00ca\u00cb\u0005-\u0000\u0000\u00cb<\u0001\u0000"+
		"\u0000\u0000\u00cc\u00cd\u0005*\u0000\u0000\u00cd>\u0001\u0000\u0000\u0000"+
		"\u00ce\u00cf\u0005/\u0000\u0000\u00cf@\u0001\u0000\u0000\u0000\u00d0\u00d2"+
		"\u0007\u0003\u0000\u0000\u00d1\u00d0\u0001\u0000\u0000\u0000\u00d2\u00d3"+
		"\u0001\u0000\u0000\u0000\u00d3\u00d1\u0001\u0000\u0000\u0000\u00d3\u00d4"+
		"\u0001\u0000\u0000\u0000\u00d4\u00d5\u0001\u0000\u0000\u0000\u00d5\u00d6"+
		"\u0006 \u0000\u0000\u00d6B\u0001\u0000\u0000\u0000\u0007\u0000\u0089\u008e"+
		"\u0094\u00a2\u00a9\u00d3\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}