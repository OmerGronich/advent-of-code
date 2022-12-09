import { day2b } from './b';

describe('Puzzle 2 b', () => {
  test('given example', async () => {
    expect(await day2b('data/day-2/b-test.txt')).toBe(12);
  });

  test('real data', async () => {
    expect(await day2b('data/day-2/b.txt')).toBe(13726);
  });
});
