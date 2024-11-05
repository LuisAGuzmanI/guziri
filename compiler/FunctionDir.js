export class FunctionDir {
    constructor() {
        this.functions = {};
    }

    getFunctions() {
        for (const _function in this.functions) {
            if (this.functions.hasOwnProperty(_function)) {
                const element = this.functions[_function];
                console.log(`==${_function}==`)
                console.log(`Name: ${element.name}`)
                console.log(`Type: ${element.type}`)
                console.log(`Variables: ${element.variables.getVars()}`);
            }
        }
    }

    addFunction(name, type) {
        if (this.functions[name]) {
            console.error('This function already exists');
        } else {
            this.functions[name] = { name, type, variables: new VarTable() };
        }

    }

    hasFunction(name) {
        return this.functions.hasOwnProperty(name)
    }
}

export class VarTable {
    constructor() {
        this.variables = {};
    }

    getVars() {
        return JSON.stringify(this.variables);
    }

    addVar(name, type) {
        if (this.variables[name]) {
            console.error('This variable already exists');
        }

        this.variables[name] = { name, type };
    }

    hasVariable(name) {
        return this.variables.hasOwnProperty(name)
    }
}