import { inject } from "vue";
import { calendar } from "@/infrastructure/calendars";
import type { Calendars } from "@/proposals/domain/day";
import { calendarSymbol } from "@/infrastructure/symbols";

export const useDayFormat = () => {
  const { format } = inject<Calendars>(calendarSymbol, calendar);
  return { dayFormat: format };
};
