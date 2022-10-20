import { inject } from "vue";
import { calendars } from "@/infrastructure/calendars";
import type { Calendars } from "@/proposals/domain/day";
import { calendarSymbol } from "@/infrastructure/symbols";

export const useDayFormat = () => {
  const { format } = inject<Calendars>(calendarSymbol, calendars);
  return { dayFormat: format };
};
