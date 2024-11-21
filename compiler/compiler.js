import { readFile, writeFile } from 'fs/promises';

import antlr4 from "antlr4";
import PatitoLexer from "../PatitoLexer.js";
import PatitoParserParser from "../PatitoParserParser.js";

import { FunctionDir } from './FunctionDir.js';

import { OperatorStack, OperandStack, JumpStack } from './Stacks.js';
import { QuadruplesQueue } from './Queues.js';

import { sematicCube } from './SematicCube.js';

export const compile = async (fileName = 'functions', showQuadruples) => {
    try {
        const text = await readFile(`./tests/patito/${fileName}.txt`, { encoding: 'utf8' });

        const chars = new antlr4.InputStream(text);
        const lexer = new PatitoLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new PatitoParserParser(tokens);

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
        if (showQuadruples) {
            quadruples.showQuadruples()
        }

        const quadruplesText = quadruples.items
            .map(quad => `${quad.operator},${quad.leftOperand ?? ''},${quad.rightOperand ?? ''},${quad.result ?? ''}`)
            .join('\n');

        const resources = [
            functions.memoryCounters.global.entero - 1000, // INT [1000, 4999]
            functions.memoryCounters.global.flotante - 5000, // FLOAT [5000, 9999]
            functions.memoryCounters.temporal.entero - 10000, // INT [10000, 14999]
            functions.memoryCounters.temporal.flotante - 15000, // FLOAT [15000, 19999]
            functions.memoryCounters.local.entero - 20000, // INT [20000, 24999]
            functions.memoryCounters.local.flotante - 25000, // FLOAT [25000, 29999]
            functions.memoryCounters.constant.entero - 30000, // INT [30000, 34999]
            functions.memoryCounters.constant.flotante - 35000, // FLOAT [35000, 39999]
            functions.memoryCounters.constant.letrero - 40000, // STRING [40000, 44999]
        ]

        const resourcesText = resources.join(',');

        const constantsText = functions.constants
            .map(constant => `${constant.memoryAddress},${constant.value}`)
            .join('\n');

        let functionsText = '';

        for (const f in functions.functions) {
            let func = functions.functions[f];
            if (func.name != 'global') {
                functionsText += `${func.name},${func.type},${func.start}\n`;
            }
        }

        const objText = [quadruplesText, functionsText.trim(), constantsText, resourcesText].join('\n-\n');

        await writeFile(`./output/${fileName}_obj.txt`, objText)

        console.log(`Quadruples written to ./output/${fileName}_obj.txt`);

        return quadruples.items;

    } catch (err) {
        console.error("Coudln't read file", err);
    }

}
