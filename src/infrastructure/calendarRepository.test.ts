import { calendarRepository } from './calendarRepository';
import { j0, weekDays } from '../proposal/domain/day.fixture';

describe('calendarRepository', () => {
  it('retuns the next four weeks without weekends', () => {
    const testedPeriod = calendarRepository.getNextWeeks(j0);

    expect(testedPeriod).toEqual([...weekDays]);
  });
});
