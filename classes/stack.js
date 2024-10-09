class Stack {
    constructor() {
        this.items = [];
    }
    
    push(element) {
        return this.items.push(element);
    }

    pop(){
        if(!this.isEmpty()) {
            return this.items.pop();
        }

        console.warn("Stack is empty");
        return null;
    }

    top(){
        if (!this.isEmpty()) {
            return this.items[this.size() - 1];
        }

        console.warn("Stack is empty");
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
        return this.items;
    }

    toString(){
        return this.items.toString();
    }
}

module.exports = Stack