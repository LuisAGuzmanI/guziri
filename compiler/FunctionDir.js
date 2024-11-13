export class FunctionDir {
    constructor() {
        this.functions = {};

        this.memoryCounters = {
            'global': {
                'entero': 1000, // INT [1000, 4999]
                'flotante': 5000, // FLOAT [5000, 9999]
            },
            'temporal': {
                'entero': 10000, // INT [10000, 14999]
                'flotante': 15000, // FLOAT [15000, 19999]
            },
            'local': {
                'entero': 20000, // INT [20000, 24999]
                'flotante': 25000, // FLOAT [25000, 29999]
            },
            'constant': {
                'entero': 30000, // INT [30000, 34999]
                'flotante': 35000, // FLOAT [35000, 39999]
                'letrero': 40000, // STRING [40000, 44999]
            },
        }
    }

    getFunctions() {
        for (const _function in this.functions) {
            if (this.functions.hasOwnProperty(_function)) {
                const element = this.functions[_function];
                console.log(`==${_function}==`)
                console.log(`Name: ${element.name}`)
                console.log(`Type: ${element.type}`)
                console.log(`Variables: ${JSON.stringify(element.variables)}`);
            }
        }
    }

    addFunction(name, type) {
        if (this.functions[name]) {
            console.error('This function already exists');
        } else {
            this.functions[name] = { name, type, variables: {} };
        }
    }

    hasFunction(name) {
        return this.functions.hasOwnProperty(name)
    }

    getVariableType(address) {
        console.log('Address', address)
        if (address >= 1000 && address <= 4999) return 'entero';
        if (address >= 5000 && address <= 9999) return 'flotante';
        if (address >= 10000 && address <= 14999) return 'entero';
        if (address >= 15000 && address <= 19999) return 'flotante';
        if (address >= 20000 && address <= 24999) return 'entero';
        if (address >= 25000 && address <= 29999) return 'flotante';
        if (address >= 30000 && address <= 34999) return 'entero';
        if (address >= 35000 && address <= 39999) return 'flotante';
        if (address >= 40000 && address <= 44999) return 'letrero';

        console.error('Invalid address')

        return null;
    }

    addVar(name, type, currentFunction, isTemporal = false, isConstant = false) {
        if (this.functions[currentFunction].variables[name] && !isTemporal && !isConstant) {
            console.error('This variable already exists');
            return null;
        }

        let memoryAddress;

        if (isTemporal) {
            memoryAddress = this.memoryCounters['temporal'][type]++;
            name += memoryAddress;
        } else if (isConstant) {
            memoryAddress = this.memoryCounters['constant'][type]++;
            name += memoryAddress;
        } else {
            const scope = this.functions[currentFunction].type == 'programa' ? 'global' : 'local';
            memoryAddress = this.memoryCounters[scope][type]++;
        }

        this.functions[currentFunction].variables[name] = memoryAddress;
        return memoryAddress;
    }

    hasVariable(currentFunction, name) {
        return this.functions[currentFunction].variables.hasOwnProperty(name)
    }

}

export class VarTable {
    constructor() {
        this.variables = {};
    }

    getVars() {
        return JSON.stringify(this.variables);
    }
}