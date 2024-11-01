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

## Version #1

### ANTLR
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

### Generating parser and lexer
1. Add the following to your `.bash_profile` or `.zshrc` file to make ANTLR available globally.
```bash
export CLASSPATH=".:/usr/local/lib/antlr-4.13.0-complete.jar:$CLASSPATH"
alias antlr4='java -Xmx500M -cp "/usr/local/lib/antlr-4.13.0-complete.jar:$CLASSPATH" org.antlr.v4.Tool'
alias grun='java -Xmx500M -cp "/usr/local/lib/antlr-4.13.0-complete.jar:$CLASSPATH" org.antlr.v4.gui.TestRig'
```
2. Execute `antlr4 -Dlanguage=JavaScript PatitoLexer.g4` to generate the ANTLR lexer files.
3. Execute `antlr4 -Dlanguage=JavaScript PatitoParser.g4` to generate the ANTLR parser files.

## Version #2

### Sematic Cube
The semantic cube in this compiler is represented by a JavaScript which you can find on `compiler/SemanticCube.js`. This allows for easy *O(1)* complexity access to the information. The cube concists of a series of nested objects which act as dictionaries that look like this: 

```js
sematicCube = {
    '+': { // addition
        'ent': {
            'ent': 'ent',
            'flot': 'flot',
        },
        'flot': {
            'ent': 'flot',
            'flot': 'flot',
        },
    }
    // ...
}
```

In the future this will allow for acces to the information to look like this: `type = sematicCube['+']['ent']['flot']`, in the same order a quadruples.

### Functions Directory

The function directory is a managed by a class which contains a JavaScript object, which allows for easy access to functions present on a program, you can find it on `compiler/FunctionDir.js`. This class also provides utility functions to add functions to the directory, consult the list of cuntions and check if a function already exists. 

The class has the following structure.

```js
class FunctionDir {
    constructor() {
        this.functions = {};
    }
    getFunctions() { }

    addFunction(name, type) { }

    hasFunction(name) { }
}
```

The `functions` attribute looks like this.
```js
{
  test1: {
    name: 'test1',
    type: 'programa',
    variables: VarTable { variables: [Object] }
  },
  suma: {
    name: 'suma',
    type: 'nula',
    variables: VarTable { variables: [Object] }
  }
}
```
 
### Variable Table
Each function in the directory has a `variable` attribute which contains the variable table for the function, it is implemented as a JavaScript class which contains a dictionary which stores the variables for the function; you can find it on `compiler/FunctionDir.js`.

The class has the following structure.

```js
class VarTable {
    constructor() {
        this.variables = {};
    }

    getVars() { }

    addVar(name, type) { }

    hasVariable(name) { }
}
```

The `variables` attribute looks like this.
```js
{
    "x":{"name":"x","type":"entero"},
    "y":{"name":"y","type":"entero"},
    "z":{"name":"z","type":"entero"}
}
```

### Neural Points
In order to populate this tables, a series of neural points were implemented on the grammar to aid the semantic analysis based on the lexical analysis. This was done embeding JavaScript code on the `PatitoParser.g4` file. 4 points were implemented to manage the functions and the variables on the file.

1. 	This action is executed when the `programa` rule is matched. It sets the `currType` to `programa`, assigns `currFunc` to the program’s name (ID), and adds the main function to the Function Directory with its type and identifier.

2. This action is performed when a `variable` declaration (with type and identifiers) is encountered. It sets `currType` to the declared type and splits the identifier list (`lista_ids`) into individual variables. Each variable is then added to the current function’s variable table with the specified type.

3. When a new function declaration is detected, this action sets `currType` to `nula`, indicating a void function. It assigns `currFunc` to the function identifier. If the function already exists in the Function Directory, it logs an error. Otherwise, it adds the new function to the Function Directory with its identifier and type.

4. 	Executed when parsing a function parameter, this action sets `currType` to the parameter’s type and `currVar` to its identifier. It checks if the parameter is already defined in the current function’s variable list. If not, it adds the parameter to the current function’s variables in Function Directory with its type.

## Testing
1. To run the tests that verify the functionality of the data structure implementations, parser and lexer, you need to install `node`.

2. Once installed, download the repository and run `npm install` to install the necessary dependencies.

3. Run `npm run test` to execute the tests.