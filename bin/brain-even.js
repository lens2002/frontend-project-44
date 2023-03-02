#!/usr/bin/env node

import name from '../src/getUserName.js';
import checkAnswer from '../src/answer-checker.js';

console.log('Welcome to the Brain Games!');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

checkAnswer();
