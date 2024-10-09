class Queue {
    constructor() {
        this.items = [];
    }
    
    push(element) {
        return this.items.push(element);
    }

    pop(){
        if(!this.isEmpty()) {
            return this.items.shift();
        }

        console.warn("Queue is empty");
        return null;
    }

    front(){
        if (!this.isEmpty()) {
            return this.items[0];
        }
        
        console.warn("Queue is empty");
        return null;
    }

    size(){
        return this.items.length;
    }

    isEmpty(){
        return this.size() == 0;
    }

    clear(){
        this.items = [];
    }

    toString(){
        return this.items.toString();
    }
}

module.exports = Queue;