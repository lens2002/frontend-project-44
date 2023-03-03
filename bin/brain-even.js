#!/usr/bin/env node

import readlineSync from 'readline-sync';
import checkAnswer from '../src/check-answer.js';
import randomNumber from '../src/get-number.js';

const name = readlineSync.question('May I have your name? ');

console.log('Welcome to the Brain Games!');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const answersNumbers = 3;

let rightAnswersCounter = 0;

while (rightAnswersCounter < answersNumbers) {
  const number = randomNumber(77);
  const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `);

  const isCorrect = checkAnswer(number, userAnswer);

  if (isCorrect) {
    rightAnswersCounter += 1;
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
    break;
  }
}

if (rightAnswersCounter === answersNumbers) {
  console.log(`Congratulations, ${name}!`);
}
