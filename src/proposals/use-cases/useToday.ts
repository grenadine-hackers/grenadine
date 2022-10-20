import { inject } from "vue";
import { calendarSymbol } from "@/infrastructure/symbols";
import { calendars } from "@/infrastructure/calendars";
import type { Calendars } from "@/proposals/domain/day";

export const useToday = () => {
  const { today } = inject<Calendars>(calendarSymbol, calendars);
  return today;
};
