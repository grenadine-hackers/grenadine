import type { Calendars as Calendar, Day } from "@/proposals/domain/day";

import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

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

const format = (day: Day): string => {
  const date = new Date(day.date);
  // Then specify how you want your dates to be formatted
  return date.toLocaleDateString("FR-fr", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const calendars: Calendar = {
  today,
  getNextWeeks,
  format,
};
