import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import antlr4 from "antlr4";
import PatitoLexer from "../../PatitoLexer.js";
import PatitoParserParser from "../../PatitoParserParser.js";
import { fail } from 'assert';

describe('Patito Fibonacci', () => {
    let text, chars, lexer, tokens, parser;

    beforeEach(async () => {
        // Get the current file's directory
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        // Construct the path to the file in the same directory
        const filePath = join(__dirname, 'fibonacci.txt');

        text = await readFile(filePath, { encoding: 'utf8' });

        chars = new antlr4.InputStream(text);
        lexer = new PatitoLexer(chars);
        tokens = new antlr4.CommonTokenStream(lexer);
        parser = new PatitoParserParser(tokens);
    });

    test('shows no errors', () => {
        parser.buildParseTrees = true;
        const tree = parser.programa();

        console.log(tree.toStringTree(parser.ruleNames));
    });
});