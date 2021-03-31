#!/usr/bin/env node
import evenCode from '../src/even-code.js';
import cli from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = cli();
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
evenCode(name);
