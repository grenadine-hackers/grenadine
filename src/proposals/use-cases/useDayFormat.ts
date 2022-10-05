import { inject } from "vue";
import { calendar } from "@/infrastructure/calendars";
import type { Calendars } from "@/proposals/domain/day";

export const useDayFormat = () => {
  const { format } = inject<Calendars>("calendars", calendar);
  return { dayFormat: format };
};
