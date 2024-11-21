import { compile } from './compiler/compiler.js';
import { VirtualMachine } from './interpreter/interpreter.js'

await compile('fibonacci_body', true);
const vm = new VirtualMachine('fibonacci_body');
vm.execute();