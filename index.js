import { readFile } from 'fs/promises';

import antlr4 from "antlr4";
import PatitoLexer from "./PatitoLexer.js";
import PatitoParserParser from "./PatitoParserParser.js";


try {
    const text = await readFile('./tests/patito/fibonacci.txt', { encoding: 'utf8' });

    const chars = new antlr4.InputStream(text);
    const lexer = new PatitoLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new PatitoParserParser(tokens);

    parser.buildParseTrees = true;
    const tree = parser.programa();

    console.log(tree.toStringTree(parser.ruleNames));

} catch (err) {
    console.error("Coudln't read file", err);
}