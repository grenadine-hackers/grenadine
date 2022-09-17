import { calendarRepository } from './calendarRepository';

describe('calendarRepository', () => {
  it('retuns the next four weeks without weekends', () => {
    const testedPeriod = calendarRepository.getNextWeeks({ date: '2022-09-14T00:00:00.000Z' });

    expect(testedPeriod).toEqual([
      { date: '2022-09-14T00:00:00.000Z' },
      { date: '2022-09-15T00:00:00.000Z' },
      { date: '2022-09-16T00:00:00.000Z' },
      { date: '2022-09-19T00:00:00.000Z' },
      { date: '2022-09-20T00:00:00.000Z' },
      { date: '2022-09-21T00:00:00.000Z' },
      { date: '2022-09-22T00:00:00.000Z' },
      { date: '2022-09-23T00:00:00.000Z' },
      { date: '2022-09-26T00:00:00.000Z' },
      { date: '2022-09-27T00:00:00.000Z' },
      { date: '2022-09-28T00:00:00.000Z' },
      { date: '2022-09-29T00:00:00.000Z' },
      { date: '2022-09-30T00:00:00.000Z' },
      { date: '2022-10-03T00:00:00.000Z' },
      { date: '2022-10-04T00:00:00.000Z' },
      { date: '2022-10-05T00:00:00.000Z' },
      { date: '2022-10-06T00:00:00.000Z' },
      { date: '2022-10-07T00:00:00.000Z' },
      { date: '2022-10-10T00:00:00.000Z' },
      { date: '2022-10-11T00:00:00.000Z' },
      { date: '2022-10-12T00:00:00.000Z' },
    ]);
  });
});
