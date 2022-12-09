import { day1b } from './b';

describe('Puzzle 1 b', () => {
  test('given example', async () => {
    expect(await day1b('data/day-1/b-test.txt')).toBe(45000);
  });

  test('real data', async () => {
    expect(await day1b('data/day-1/b.txt')).toBe(199628);
  });
});
