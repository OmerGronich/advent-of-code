import { readData } from '../utils';
import chalk from 'chalk';

function calculateTotalScore(strategy: string[]): number {
  let totalScore = 0;

  for (const line of strategy) {
    const [opponentMove, winLoseOrDraw] = line.split(' ');

    switch (opponentMove) {
      case 'A':
        if (winLoseOrDraw === 'X') {
          totalScore += 0 + 3;
        } else if (winLoseOrDraw === 'Y') {
          totalScore += 3 + 1;
        } else if (winLoseOrDraw === 'Z') {
          totalScore += 6 + 2;
        }
        break;
      case 'B':
        if (winLoseOrDraw === 'X') {
          totalScore += 0 + 1;
        } else if (winLoseOrDraw === 'Y') {
          totalScore += 3 + 2;
        } else if (winLoseOrDraw === 'Z') {
          totalScore += 6 + 3;
        }
        break;
      case 'C':
        if (winLoseOrDraw === 'X') {
          totalScore += 0 + 2;
        } else if (winLoseOrDraw === 'Y') {
          totalScore += 3 + 3;
        } else if (winLoseOrDraw === 'Z') {
          totalScore += 6 + 1;
        }
        break;
    }
  }

  return totalScore;
}

export async function day2b(dataPath?: string) {
  const data = await readData(dataPath);
  return calculateTotalScore(data);
}

// don't change below this line
// this makes sure we don't call the function when we import it for tests
if (process.argv.includes('--run')) {
  day2b().then((answer) => {
    console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
  });
}
