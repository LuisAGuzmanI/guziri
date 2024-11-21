import { compile } from './compiler/compiler.js';
import { VirtualMachine } from './interpreter/interpreter.js'

await compile('exppressions', true);
const vm = new VirtualMachine('exppressions');
vm.execute();