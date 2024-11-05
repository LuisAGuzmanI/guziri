import { Queue } from "../classes/queue.js";

export class QuadruplesQueue extends Queue {
    constructor() {
        super();
        this.tempIndex = 0;
    }

    newTempVariable(type) {
        const tempVariable = {
            name: `t${this.tempIndex}`,
            type
        }
        this.tempIndex += 1;
        return tempVariable;
    }

    addQuadruple(operator, leftOperand, rightOperand, result) {
        this.items.push({
            operator, leftOperand, rightOperand, result
        })
    }

    showQuadruples() {
        console.table(this.items);
    }
}