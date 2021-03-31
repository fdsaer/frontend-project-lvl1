import readlineSync from 'readline-sync';

const interval = {
  min: 1,
  max: 1000,
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (number) => number % 2 === 0;

export default (name) => {
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(interval.min, interval.max);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const numberIsEven = isEven(number);
    if (numberIsEven && answer === 'yes') {
      console.log('Correct!');
    } else if (!numberIsEven && answer === 'no') {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${numberIsEven ? 'yes' : 'no'}'.\n\rLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
