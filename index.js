import { readFile } from 'fs/promises';

import antlr4 from "antlr4";
import PatitoLexer from "./PatitoLexer.js";
import PatitoParserParser from "./PatitoParserParser.js";

import { FunctionDir } from './compiler/FunctionDir.js';

try {
    const text = await readFile('./tests/patito/sum_func.txt', { encoding: 'utf8' });

    const chars = new antlr4.InputStream(text);
    const lexer = new PatitoLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new PatitoParserParser(tokens);

    // Sematic action #1
    const functions = new FunctionDir();
    parser.FunctionDir = functions;

    parser.buildParseTrees = true;
    const tree = parser.programa();

    // console.log(tree.toStringTree(parser.ruleNames));

    // Entrega 2
    console.log("---Entrega 2---")
    functions.getFunctions();

} catch (err) {
    console.error("Coudln't read file", err);
}