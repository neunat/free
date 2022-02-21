import {a } from './o.mjs';
import Module from 'module';



const require = Module.createRequire('/home/runner/IdealisticSparseCamel/index.js');

console.log(a, new Module());
console.log(require('./t'))