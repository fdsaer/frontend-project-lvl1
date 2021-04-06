import cli from '../cli.js';

const numberInterval = {
  min: 1,
  max: 100,
};

const expressionNumber = {
  min: 1,
  max: 3,
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateQuestion = (firstNumber, secondNumber, operator) => {
  let string = '';
  switch (operator) {
    case 1:
      string = `${firstNumber} + ${secondNumber}`;
      break;
    case 2:
      string = `${firstNumber} - ${secondNumber}`;
      break;
    default:
      string = `${firstNumber} * ${secondNumber}`;
      break;
  }
  return string;
};

const calcRightAnswer = (firstNumber, secondNumber, operator) => {
  let result;
  switch (operator) {
    case 1:
      result = firstNumber + secondNumber;
      break;
    case 2:
      result = firstNumber - secondNumber;
      break;
    default:
      result = firstNumber * secondNumber;
      break;
  }
  return result;
};

let firstNumber = 0;
let secondNumber = 0;
let operation = 0;

const getRules = () => {
  console.log('What is the result of the expression?');
};

const getQuestion = () => {
  firstNumber = getRandomInt(numberInterval.min, numberInterval.max);
  secondNumber = getRandomInt(numberInterval.min, numberInterval.max);
  operation = getRandomInt(expressionNumber.min, expressionNumber.max);
  console.log(`Question: ${generateQuestion(firstNumber, secondNumber, operation)}`);
};

const getAnswer = () => parseInt(cli('Your answer: '), 10);

const getRightAnswer = () => calcRightAnswer(firstNumber, secondNumber, operation);

export {
  getRules, getQuestion, getAnswer, getRightAnswer,
};
