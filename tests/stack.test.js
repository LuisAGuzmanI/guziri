const Stack = require("../classes/stack")

describe('Stack', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    test('should add new elements to the stack', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.toString()).toBe('1,2,3');
    });

    test('should describe the size of the stack', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.size()).toBe(3);
    });

    test('should remove the first element from the stack on pop', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.pop();
        expect(stack.toString()).toBe('1,2');
    });

    test('should check the top element of the stack', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.top()).toBe(3);
        stack.pop();
        expect(stack.top()).toBe(2);
    });

    test('should check if the stack is empty', () => {
        stack.push(1);
        stack.pop();
        expect(stack.isEmpty()).toBe(true);
    });

    test('should check if the stack is not empty', () => {
        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
    });

    test('should clear the stack', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.clear();
        expect(stack.isEmpty()).toBe(true);
    });
});