import cli from '../cli.js';

const numberInterval = {
  min: 1,
  max: 20,
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isDivisor = (divisor, number) => number % divisor === 0;

const calcRightAnswer = (firstNumber, secondNumber) => {
  if (firstNumber === secondNumber) return firstNumber;
  const smallerNumber = firstNumber < secondNumber ? firstNumber : secondNumber;
  const biggerNumber = smallerNumber === firstNumber ? secondNumber : firstNumber;
  for (let i = smallerNumber; i > 1; i -= 1) {
    if (isDivisor(i, smallerNumber) && isDivisor(i, biggerNumber)) return i;
  }
  return 1;
};

let firstNumber = 0;
let secondNumber = 0;

const getRules = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

const getQuestion = () => {
  firstNumber = getRandomInt(numberInterval.min, numberInterval.max);
  secondNumber = getRandomInt(numberInterval.min, numberInterval.max);
  console.log(`Question: ${firstNumber} ${secondNumber}`);
};

const getAnswer = () => parseInt(cli('Your answer: '), 10);

const getRightAnswer = () => calcRightAnswer(firstNumber, secondNumber);

export {
  getRules, getQuestion, getAnswer, getRightAnswer,
};
