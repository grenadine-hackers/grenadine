import { period } from './period';

describe('period calculation', () => {
  it('retuns the next week', () => {
    const testedPeriod = period({ weeks: 4 }, '2022-14-09');

    expect(testedPeriod).toEqual([
      { day: '2022-09-14' },
      { day: '2022-09-15' },
      { day: '2022-09-16' },
      { day: '2022-09-19' },
      { day: '2022-09-20' },
      { day: '2022-09-21' },
      { day: '2022-09-22' },
      { day: '2022-09-23' },
      { day: '2022-09-26' },
      { day: '2022-09-27' },
      { day: '2022-09-28' },
      { day: '2022-09-29' },
      { day: '2022-09-30' },
      { day: '2022-10-03' },
      { day: '2022-10-04' },
      { day: '2022-10-05' },
      { day: '2022-10-06' },
    ]);
  });
});
