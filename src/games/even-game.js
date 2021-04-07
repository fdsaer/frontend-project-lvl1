import cli from '../cli.js';

const interval = {
  min: 1,
  max: 1000,
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (number) => number % 2 === 0;

const calcRightAnswer = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
};

let number = 0;

const getRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const getQuestion = () => {
  number = getRandomInt(interval.min, interval.max);
  console.log(`Question: ${number}`);
};

const getAnswer = () => cli('Your answer: ');

const getRightAnswer = () => calcRightAnswer(number);

export {
  getRules, getQuestion, getAnswer, getRightAnswer,
};
