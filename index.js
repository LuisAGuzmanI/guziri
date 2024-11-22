import { compile } from './compiler/compiler.js';
import { VirtualMachine } from './interpreter/interpreter.js'

await compile('factorial_recursivo', true);
const vm = new VirtualMachine('factorial_recursivo');
vm.execute();