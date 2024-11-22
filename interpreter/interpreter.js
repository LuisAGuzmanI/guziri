import { readFile } from 'fs/promises';

export class VirtualMachine {
    constructor(fileName) {
        this.quadruples = [];
        this.fileName = fileName;
        this.memoryStartPoints = [];
        this.globalMemory = [];
        this.functions = {};
        this.callStack = [];
        this.localMemoryStack = [];
    }

    getMemoryCategory(address) {
        return Math.floor(address / 5000);
    }

    getReducedMemoryAddress(address) {
        const category = this.getMemoryCategory(address);
        address = category == 0 ? address - 1000 : address;
        const place = address % 5000;

        if (category < 4 || category > 5) {
            return this.memoryStartPoints[category] + place;
        } else { // Checks for local memory
            return this.localMemoryStack[this.localMemoryStack.length - 1].memoryStartPoints[category - 4] + place;
        }

    }

    getValue(address) {
        const category = this.getMemoryCategory(address);
        if (category < 4 || category > 5) {
            return this.globalMemory[this.getReducedMemoryAddress(address)];
        } else { // Checks for local memory
            return this.localMemoryStack[this.localMemoryStack.length - 1].memory[this.getReducedMemoryAddress(address)];
        }
    }

    setValue(address, value) {
        const category = this.getMemoryCategory(address);
        if (category < 4 || category > 5) {
            this.globalMemory[this.getReducedMemoryAddress(address)] = value;
        } else { // Checks for local memory
            this.localMemoryStack[this.localMemoryStack.length - 1].memory[this.getReducedMemoryAddress(address)] = value;
        }
    }

    async loadObj() {
        try {
            const objText = await readFile(`./output/${this.fileName}_obj.txt`, { encoding: 'utf8' });

            // Quadruples, Functions, Constants, Allocated Memory
            let [q, f, c, m] = objText.split('$')
            q = q.trim();
            f = f.trim();
            c = c.trim();
            m = m.trim();

            this.quadruples = q.split('\n').map(line => {
                const [operator, leftOperand, rightOperand, result] = line.split(',').map(value => value.trim());
                return {
                    operator: Number(operator),
                    leftOperand: leftOperand !== '' ? (operator !== '15' ? Number(leftOperand) : leftOperand) : null,
                    rightOperand: rightOperand !== '' ? Number(rightOperand) : null,
                    result: result !== '' ? Number(result) : null
                };
            });

            f.split('\n').map(line => {
                const [name, type, start, intResources, floatResources] = line.split(',').map(value => value.trim());
                this.functions[name] = {
                    name,
                    type,
                    start: Number(start),
                    intResources: Number(intResources),
                    floatResources: Number(floatResources),
                }
            })

            let totalMemory = 0;

            const allocatedMemory = m.split(',').map(Number);

            allocatedMemory.forEach(element => {
                this.memoryStartPoints.push(totalMemory);
                totalMemory += element;
            });

            this.globalMemory = new Array(totalMemory).fill(null);

            c.split('\n').map(line => {
                const [dir, value] = line.split(',').map(value => value.trim());
                this.globalMemory[this.getReducedMemoryAddress(dir)] = dir >= 40000 ? value : Number(value);
            })

        } catch (err) {
            console.error('Error loading quadruples:', err);
        }
    }

    async execute() {
        await this.loadObj();
        if (this.quadruples.length === 0) {
            console.log('No quadruples loaded. Please call loadQuadruples() first.');
            return;
        }

        let instructionPointer = 0;
        // Era 
        let name, type, start, intResources, floatResources;

        while (instructionPointer < this.quadruples.length) {
            let { operator, leftOperand, rightOperand, result } = this.quadruples[instructionPointer];
            switch (operator) {
                case 1: // Addition
                    this.setValue(result, this.getValue(leftOperand) + this.getValue(rightOperand));
                    break;

                case 2: // Subtraction
                    this.setValue(result, this.getValue(leftOperand) - this.getValue(rightOperand));
                    break;

                case 3: // Multiplication
                    this.setValue(result, this.getValue(leftOperand) * this.getValue(rightOperand));
                    break;

                case 4: // Division
                    this.setValue(result, this.getValue(leftOperand) / this.getValue(rightOperand));
                    break;

                case 5: // More than
                    this.setValue(result, Number(this.getValue(leftOperand) > this.getValue(rightOperand)));
                    break;

                case 6: // Less than
                    this.setValue(result, Number(this.getValue(leftOperand) < this.getValue(rightOperand)));
                    break;

                case 7: // Equals
                    this.setValue(result, Number(this.getValue(leftOperand) === this.getValue(rightOperand)));
                    break;

                case 8: // Doesn't equal
                    this.setValue(result, Number(this.getValue(leftOperand) !== this.getValue(rightOperand)));
                    break;

                case 9: // Assignation
                    this.setValue(result, this.getValue(leftOperand));
                    break;

                case 10: // Print
                    console.log('PRINT:', this.getValue(result));
                    break;

                case 11: // Goto
                    instructionPointer = result;
                    continue;

                case 12: // Goto if True
                    if (this.getValue(leftOperand)) {
                        instructionPointer = result;
                        continue;
                    }
                    break;

                case 13: // Goto if False
                    if (!this.getValue(leftOperand)) {
                        instructionPointer = result;
                        continue;
                    }
                    break;

                case 14: // End Function
                    this.localMemoryStack.pop();
                    instructionPointer = this.callStack.pop();
                    break;

                case 15: // Activation Record (era)
                    ({ name, type, start, intResources, floatResources } = this.functions[leftOperand]);
                    this.localMemoryStack.push({
                        memory: new Array(intResources + floatResources).fill(null),
                        memoryStartPoints: [0, intResources],
                    })
                    break;

                case 16: // Go to Subroutine (gosub)
                    this.callStack.push(instructionPointer);
                    instructionPointer = result;
                    continue;

                case 17: // Parameter
                    this.setValue(result, this.getValue(leftOperand));
                    break;

                default:
                    console.error(`Unhandled operator: ${operator}`);
                    break;
            }
            instructionPointer++;
        }
    }
}