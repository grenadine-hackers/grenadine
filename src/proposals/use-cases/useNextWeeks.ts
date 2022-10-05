import type { Calendars, DayCollection } from "@/proposals/domain/day";
import { inject } from "vue";
import { calendar } from "@/infrastructure/calendars";

export const useNextWeeks = (): { nextWeeks: DayCollection } => {
  const { getNextWeeks, today } = inject<Calendars>("calendars", calendar);
  return { nextWeeks: getNextWeeks(today()) };
};
