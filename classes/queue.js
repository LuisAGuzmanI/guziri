export class Queue {
    constructor() {
        this.items = [];
    }

    // Adds a new element to the queue
    push(element) {
        return this.items.push(element);
    }

    // Removes the first added element to the queue. Returns said element
    pop() {
        if (!this.isEmpty()) {
            return this.items.shift();
        } else {
            return null;
        }
    }

    // Returns the first added element to the queue
    front() {
        if (!this.isEmpty()) {
            return this.items[0];
        } else {
            return null;
        }
    }

    // Returns the number of elements currently present on the queue
    size() {
        return this.items.length;
    }

    // Returns true if there are 0 elements on the queue
    isEmpty() {
        return this.size() == 0;
    }

    // Clears the queue of any elements. Returns an empy array
    clear() {
        this.items = [];
    }

    // Returns the items array value as a strings
    toString() {
        return JSON.stringify(this.items);
    }
}