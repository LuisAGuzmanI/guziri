import { readFile } from 'fs/promises';

import antlr4 from "antlr4";
import PatitoLexer from "./PatitoLexer.js";
import PatitoParserParser from "./PatitoParserParser.js";

import { FunctionDir } from './compiler/FunctionDir.js';

import { OperatorStack, OperandStack, JumpStack } from './compiler/Stacks.js';
import { QuadruplesQueue } from './compiler/Queues.js';

import { sematicCube } from './compiler/SematicCube.js';

try {
    const text = await readFile('./tests/patito/functions.txt', { encoding: 'utf8' });

    const chars = new antlr4.InputStream(text);
    const lexer = new PatitoLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new PatitoParserParser(tokens);

    // Sematic action #1
    const functions = new FunctionDir();
    parser.FunctionDir = functions;

    const operators = new OperatorStack();
    parser.OperatorStack = operators;

    const operands = new OperandStack();
    parser.OperandStack = operands;

    const jumps = new JumpStack();
    parser.JumpStack = jumps;

    const quadruples = new QuadruplesQueue();
    parser.QuadruplesQueue = quadruples;

    parser.SematicCube = sematicCube;

    parser.buildParseTrees = true;
    const tree = parser.programa();

    // console.log(tree.toStringTree(parser.ruleNames));
    quadruples.showQuadruples()

    console.log(JSON.stringify(functions.memoryCounters));

} catch (err) {
    console.error("Coudln't read file", err);
}