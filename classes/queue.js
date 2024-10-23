export default class Queue {
    constructor() {
        this.items = [];
    }

    // Adds a new element to the queue
    push(element) {
        return this.items.push(element);
    }

    // Removes the first added element to the queue. Returns said element
    pop(){
        if(!this.isEmpty()) {
            return this.items.shift();
        }

        console.warn("Queue is empty");
        return null;
    }

    // Returns the first added element to the queue
    front(){
        if (!this.isEmpty()) {
            return this.items[0];
        }
        
        console.warn("Queue is empty");
        return null;
    }

    // Returns the number of elements currently present on the queue
    size(){
        return this.items.length;
    }

    // Returns true if there are 0 elements on the queue
    isEmpty(){
        return this.size() == 0;
    }

    // Clears the queue of any elements. Returns an empy array
    clear(){
        this.items = [];
    }

    // Returns the items array value as a strings
    toString(){
        return this.items.toString();
    }
}