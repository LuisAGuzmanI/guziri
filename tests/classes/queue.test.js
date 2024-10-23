import Queue from"../../classes/queue";

describe('Queue', () => {
    let queue;

    beforeEach(() => {
        queue = new Queue();
    });

    test('should add new elements to the queue', () => {
        queue.push(1);
        queue.push(2);
        queue.push(3);
        expect(queue.toString()).toBe('1,2,3');
    });

    test('should describe the size of the queue', () => {
        queue.push(1);
        queue.push(2);
        queue.push(3);
        expect(queue.size()).toBe(3);
    });

    test('should remove the first element from the queue on pop', () => {
        queue.push(1);
        queue.push(2);
        queue.push(3);
        queue.pop();
        expect(queue.toString()).toBe('2,3');
    });

    test('should check the first element of the queue', () => {
        queue.push(1);
        queue.push(2);
        queue.push(3);
        expect(queue.front()).toBe(1);
        queue.pop();
        expect(queue.front()).toBe(2);
    });

    test('should check if the queue is empty', () => {
        queue.push(1);
        queue.pop();
        expect(queue.isEmpty()).toBe(true);
    });

    test('should check if the queue is not empty', () => {
        queue.push(1);
        expect(queue.isEmpty()).toBe(false);
    });

    test('should clear the queue', () => {
        queue.push(1);
        queue.push(2);
        queue.push(3);
        queue.clear();
        expect(queue.isEmpty()).toBe(true);
    });
});