import * as calcGame from './games/calc-game.js';
import * as evenGame from './games/even-game.js';
import cli from './cli.js';

const defineFunction = (name) => {
  let func;
  switch (name) {
    case 'calc':
      func = calcGame;
      break;
    default:
      func = evenGame;
      break;
  }
  return func;
};

export default (game) => {
  const func = defineFunction(game);
  console.log('Welcome to the Brain Games!');
  const name = cli('May I have your name?');
  console.log(`Hello, ${name}!`);
  func.getRules();
  for (let i = 0; i < 3; i += 1) {
    func.getQuestion();
    const answer = func.getAnswer();
    const rightAnswer = func.getRightAnswer();
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\n\rLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
