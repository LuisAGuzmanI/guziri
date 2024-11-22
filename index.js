import { compile } from './compiler/compiler.js';
import { VirtualMachine } from './interpreter/interpreter.js'

await compile('fibonacci', true);
const vm = new VirtualMachine('fibonacci');
vm.execute();