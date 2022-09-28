import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import type { CalendarRepository, Day } from "@/proposal/domain/day";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

const today = (): Day => ({
  date: dayjs().utc().toISOString(),
});

const getNextWeeks = (startDay: Day): Day[] => {
  let startDate = dayjs(startDay.date).utc();
  const endDate = startDate.add(4, "weeks");

  const finalPeriod: Day[] = [];
  while (startDate.isSameOrBefore(endDate, "day")) {
    if (!(startDate.day() === 0 || startDate.day() === 6)) {
      finalPeriod.push({ date: startDate.toISOString() });
    }
    startDate = startDate.add(1, "day");
  }

  return finalPeriod;
};

export const calendarRepository: CalendarRepository = {
  today,
  getNextWeeks,
};
