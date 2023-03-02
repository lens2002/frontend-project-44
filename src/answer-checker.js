import readlineSync from 'readline-sync';
import name from './getUserName.js';
import randomNumber from './random-number.js';

export default function checkAnswer() {
  let numberOfRightAnswers = 0;
  let result = null;

  function rrr() {
    const getNumber = randomNumber();
    const userAnswer = readlineSync.question(`Question: ${getNumber}\nYour answer: `);
    let rightAnswer = '';

    if (getNumber % 2 === 0) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }

    if (rightAnswer === userAnswer.toLowerCase()) {
      console.log('Correct!');
      numberOfRightAnswers += 1;

      if (numberOfRightAnswers === 3) {
        console.log(`Congratulations, ${name}!`);
      } else {
        rrr();
      }
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
    }
  }
  result = rrr();
  return result;
}
