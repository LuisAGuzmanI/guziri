# Guziri
This project is an implementation of a compiler for a simple C-based programming laguage for the class *Advanced Applications Development in Computer Science (Group 502)*. The implementation is done in JavaScript using ANTLR. You can find the basic grammar [here](./Gramatica.pdf). 

## Student Information

* Name: Luis Ángel Guzmán Iribe
* ID: a01747157
* Email: a01747157@tec.mx

## Repository Structure

* Top Level: The top level of this repository contains files related to ANTLR which serve as the basis for the compiler.
* `/classes`
    Implementations of the data structures specified in assignment 1
* `/tests`
    * Test cases for each of the implemented data structures
    * Test cases for different test programs
* `index.js`
    Root file of the repository, currently not in use.

## ANTLR
ANTLR was chosen over other alternatives for generating the parser and lexer for its ease of use, popularity, availaibity of documentaation and simple syntax. The rules are difned on the `PatitoLexer.g4` (which defines the valid tokens) and `PatitoParser.g4` (which defines the grammar).

The tokens are defined in ANTLR (`.g4`) format, such as:
```
VARS: 'vars';
CTE_ENT: [0-9]+;
SEMICOLON: ';';
```

The grammar is simmilarly defined in ANTLR (`.g4`) format, the appear like this:
```
programa: PROGRAM ID SEMICOLON tiene_vars lista_funcs INICIO cuerpo FIN;
ciclo: MIENTRAS LPAR expresion RPAR HAZ cuerpo SEMICOLON;
imprime: ESCRIBE LPAR lista_impresiones RPAR SEMICOLON;
```

## Generating parser and lexer
1. Add the following to your `.bash_profile` or `.zshrc` file to make ANTLR available globally.
```
export CLASSPATH=".:/usr/local/lib/antlr-4.13.0-complete.jar:$CLASSPATH"
alias antlr4='java -Xmx500M -cp "/usr/local/lib/antlr-4.13.0-complete.jar:$CLASSPATH" org.antlr.v4.Tool'
alias grun='java -Xmx500M -cp "/usr/local/lib/antlr-4.13.0-complete.jar:$CLASSPATH" org.antlr.v4.gui.TestRig'
```
2. Execute `antlr4 -Dlanguage=JavaScript PatitoLexer.g4` to generate the ANTLR lexer files.
3. Execute `antlr4 -Dlanguage=JavaScript PatitoParser.g4` to generate the ANTLR parser files.

## Testing
1. To run the tests that verify the functionality of the data structure implementations, parser and lexer, you need to install `node`.

2. Once installed, download the repository and run `npm install` to install the necessary dependencies.

3. Run `npm run test` to execute the tests.