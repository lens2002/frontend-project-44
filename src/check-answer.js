export default function checkAnswer(number, userAnswer) {
  const rightAnswer = number % 2 === 0 ? 'yes' : 'no';

  return rightAnswer === userAnswer.toLowerCase();
}
