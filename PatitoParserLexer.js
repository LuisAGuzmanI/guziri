// Generated from PatitoParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,2,16,6,-1,2,0,7,0,2,1,7,1,1,0,1,0,1,0,1,0,1,0,
1,0,1,0,1,1,1,1,1,1,1,1,0,0,2,1,1,3,2,1,0,0,15,0,1,1,0,0,0,0,3,1,0,0,0,1,
5,1,0,0,0,3,12,1,0,0,0,5,6,5,105,0,0,6,7,5,110,0,0,7,8,5,105,0,0,8,9,5,99,
0,0,9,10,5,105,0,0,10,11,5,111,0,0,11,2,1,0,0,0,12,13,5,102,0,0,13,14,5,
105,0,0,14,15,5,110,0,0,15,4,1,0,0,0,1,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class PatitoParserLexer extends antlr4.Lexer {

    static grammarFileName = "PatitoParser.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'inicio'", "'fin'" ];
	static symbolicNames = [  ];
	static ruleNames = [ "T__0", "T__1" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

PatitoParserLexer.EOF = antlr4.Token.EOF;
PatitoParserLexer.T__0 = 1;
PatitoParserLexer.T__1 = 2;



