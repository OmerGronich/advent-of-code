import { day1a } from './a';

describe('Puzzle 1 a', () => {
  test('given example', async () => {
    expect(await day1a('data/day-1/a-test.txt')).toBe(24000);
  });

  test('actual data', async () => {
    expect(await day1a('data/day-1/a.txt')).toBe(67633);
  });
});