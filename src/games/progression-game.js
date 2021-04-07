import cli from '../cli.js';

const stepInterval = {
  min: 1,
  max: 10,
};

const signInterval = {
  min: 1,
  max: 2,
};

const startNumberInterval = {
  min: -100,
  max: 100,
};

const questionNumberInterval = {
  min: 0,
  max: 9,
};

const itemsCount = 10;

const progression = [];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (startNumber, step) => {
  for (let i = 0; i < itemsCount; i += 1) {
    progression[i] = startNumber + step * i;
  }
};

const generateQuestion = (array, number) => {
  const tempArray = array.slice();
  tempArray[number] = '..';
  return tempArray.join(' ');
};

let startNumber = 0;
let step = 1;
let questionNumber = 0;

const getRules = () => {
  console.log('What number is missing in the progression?');
};

const getQuestion = () => {
  startNumber = getRandomInt(startNumberInterval.min, startNumberInterval.max);
  const stepSign = (-1) ** getRandomInt(signInterval.min, signInterval.max);
  step = getRandomInt(stepInterval.min, stepInterval.max) * stepSign;
  questionNumber = getRandomInt(questionNumberInterval.min, questionNumberInterval.max);
  generateProgression(startNumber, step);
  console.log(`Question: ${generateQuestion(progression, questionNumber)}`);
};

const getAnswer = () => parseInt(cli('Your answer: '), 10);

const getRightAnswer = () => progression[questionNumber];

export {
  getRules, getQuestion, getAnswer, getRightAnswer,
};
