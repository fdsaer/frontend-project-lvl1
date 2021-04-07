import cli from '../cli.js';

const numberInterval = {
  min: 1,
  max: 20,
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isDivisor = (divisor, number) => number % divisor === 0;

const isPrime = (number) => {
  for (let i = number - 1; i > 1; i -= 1) {
    if (isDivisor(i, number)) return false;
  }
  return true;
};

const calcRightAnswer = (number) => {
  const result = isPrime(number) ? 'yes' : 'no';
  return result;
};

let number = 0;

const getRules = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

const getQuestion = () => {
  number = getRandomInt(numberInterval.min, numberInterval.max);
  console.log(`Question: ${number}`);
};

const getAnswer = () => cli('Your answer: ');

const getRightAnswer = () => calcRightAnswer(number);

export {
  getRules, getQuestion, getAnswer, getRightAnswer,
};
