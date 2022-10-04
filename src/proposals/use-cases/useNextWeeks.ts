import type { Day } from "@/proposals/domain/day";
import { inject } from "vue";
import type { Calendars } from "@/proposals/domain/day";
import { calendar } from "@/infrastructure/calendars";

export const useNextWeeks = (): { nextWeeks: Day[] } => {
  const { getNextWeeks, today } = inject<Calendars>("calendars", calendar);
  return { nextWeeks: getNextWeeks(today()) };
};
