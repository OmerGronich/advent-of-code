// noinspection DuplicatedCode

import { readData } from '../utils';
import chalk from 'chalk';

export const getCaloriesPerElf = (data: string[]) => {
  let elfNumber = 0;
  const caloriesPerElf = [];
  for (const datum of data) {
    if (datum === '') {
      elfNumber++;
      continue;
    }

    caloriesPerElf[elfNumber] = (caloriesPerElf[elfNumber] || 0) + +datum;
  }
  return caloriesPerElf;
}
export async function day1a(dataPath?: string) {
  const data = await readData(dataPath);
  return Math.max(...getCaloriesPerElf(data));
}

// don't change below this line
// this makes sure we don't call the function when we import it for tests
if (process.argv.includes('--run')) {
  day1a().then((answer) => {
    console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
  });
}
