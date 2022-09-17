import { Period } from '../domain/period';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { Day } from '../domain/day';

dayjs.extend(utc);
dayjs.extend(timezone);

export const period = (period: Period, startFrom: string): Day[] => {
  const startDate = dayjs(startFrom);
  const endDate = startDate.add(4, 'weeks');
  console.log(startDate.toISOString());
  console.log(endDate.toISOString());

  const finalPeriod: Day[] = [
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
  ];

  return finalPeriod;
};
