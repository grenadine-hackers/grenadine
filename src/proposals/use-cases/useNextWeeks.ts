import type { Calendars, DayCollection } from "@/proposals/domain/day";
import { inject } from "vue";
import { calendar } from "@/infrastructure/calendars";
import { calendarSymbol } from "@/infrastructure/symbols";

export const useNextWeeks = (): { nextWeeks: DayCollection } => {
  const { getNextWeeks, today } = inject<Calendars>(calendarSymbol, calendar);
  return { nextWeeks: getNextWeeks(today()) };
};
