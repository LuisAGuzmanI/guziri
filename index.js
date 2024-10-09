const Queue = require("./classes/queue.js");
const Stack = require("./classes/stack.js");

// Example usage:
const queue = new Queue();
queue.push(10);
queue.push(20);
queue.push(30);
console.log(queue.front());  // Output: 10
console.log(queue.pop()); // Output: 10
console.log(queue.toString());               // Output: 20,30
console.log(queue.size());   // Output: 2
queue.clear();
console.log(queue.isEmpty()); // Output: true