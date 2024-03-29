import * as calcGame from './games/calc-game.js';
import * as evenGame from './games/even-game.js';
import * as gcdGame from './games/gcd-game.js';
import * as progressionGame from './games/progression-game.js';
import * as primeGame from './games/prime-game.js';
import cli from './cli.js';

const defineFunction = (name) => {
  let func;
  switch (name) {
    case 'prime':
      func = primeGame;
      break;
    case 'progression':
      func = progressionGame;
      break;
    case 'gcd':
      func = gcdGame;
      break;
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
