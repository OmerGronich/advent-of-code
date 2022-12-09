import { readData } from '../utils';
import chalk from 'chalk';

const RPS_SCORES = {
  A: 1,
  X: 1,
  B: 2,
  Y: 2,
  C: 3,
  Z: 3,
};

function calculateTotalScore(strategy: string[]): number {
  let totalScore = 0;

  for (const line of strategy) {
    const [opponentMove, yourMove] = line.split(' ');
    const yourScore = RPS_SCORES[yourMove];

    switch (opponentMove) {
      case 'A':
        if (yourMove === 'X') {
          totalScore += 3;
        } else if (yourMove === 'Y') {
          totalScore += 6;
        } else if (yourMove === 'Z') {
          totalScore += 0;
        }
        break;
      case 'B':
        if (yourMove === 'X') {
          totalScore += 0;
        } else if (yourMove === 'Y') {
          totalScore += 3;
        } else if (yourMove === 'Z') {
          totalScore += 6;
        }
        break;
      case 'C':
        if (yourMove === 'X') {
          totalScore += 6;
        } else if (yourMove === 'Y') {
          totalScore += 0;
        } else if (yourMove === 'Z') {
          totalScore += 3;
        }
        break;
    }

    totalScore += yourScore;
  }

  return totalScore;
}

export async function day2a(dataPath?: string) {
  const data = await readData(dataPath);
  return calculateTotalScore(data);
}

// don't change below this line
// this makes sure we don't call the function when we import it for tests
if (process.argv.includes('--run')) {
  day2a().then((answer) => {
    console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
  });
}
