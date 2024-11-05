export class Stack {
    constructor() {
        this.items = [];
    }

    // Adds a new element to the stack
    push(element) {
        return this.items.push(element);
    }

    // Removes the most recently added element to the stack. Returns said element
    pop() {
        if (!this.isEmpty()) {
            return this.items.pop();
        } else {
            return null;
        }

    }

    // Returns the most recently added element to the stack
    top() {
        if (!this.isEmpty()) {
            return this.items[this.size() - 1];
        } else {
            return null;
        }

    }

    // Returns the number of elements currently present on the stack
    size() {
        return this.items.length;
    }

    // Returns true if there are 0 elements on the stack
    isEmpty() {
        return this.size() == 0;
    }

    // Clears the stack of any elements. Returns an empy array
    clear() {
        this.items = [];
        return this.items;
    }

    // Returns the items array value as a strings
    toString() {
        return JSON.stringify(this.items);
    }
}