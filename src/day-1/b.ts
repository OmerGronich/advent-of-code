import { readData } from '../utils';
import chalk from 'chalk';
import {getCaloriesPerElf} from "./a";

export async function day1b(dataPath?: string) {
  const data = await readData(dataPath);
  const caloriesPerElf = getCaloriesPerElf(data);
  caloriesPerElf.sort((a, b) => b - a);
  caloriesPerElf.length = 3;
  return caloriesPerElf.reduce((a, b) => a + b);
}

// don't change below this line
// this makes sure we don't call the function when we import it for tests
if (process.argv.includes('--run')) {
  day1b().then((answer) => {
    console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
  });
}
