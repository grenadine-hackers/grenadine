import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { Day } from '../proposal/domain/day';
import { CalendarRepository } from '../proposal/ProposalContext';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isSameOrBefore);

const getNextWeeks = (startDay: Day): Day[] => {
  let startDate = dayjs(startDay.date);
  const endDate = startDate.add(4, 'weeks');

  const finalPeriod: Day[] = [];
  while (startDate.isSameOrBefore(endDate, 'day')) {
    if (!(startDate.day() === 0 || startDate.day() === 6)) {
      finalPeriod.push({ date: startDate.toISOString() });
    }
    startDate = startDate.add(1, 'day');
  }

  return finalPeriod;
};

export const calendarRepository: CalendarRepository = {
  getNextWeeks,
};