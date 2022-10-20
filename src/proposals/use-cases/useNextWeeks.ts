import type { Calendars, DayCollection } from "@/proposals/domain/day";
import { inject } from "vue";
import { calendars } from "@/infrastructure/calendars";
import { calendarSymbol } from "@/infrastructure/symbols";

export const useNextWeeks = (): { nextWeeks: DayCollection } => {
  const { getNextWeeks, today } = inject<Calendars>(calendarSymbol, calendars);
  return { nextWeeks: getNextWeeks(today()) };
};
