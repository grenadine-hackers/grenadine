export type Day = {
  date: string;
};

export type DayCollection = Day[];

export interface Calendars {
  today: () => Day;
  getNextWeeks: (startDay: Day) => DayCollection;
  format: (day: Day) => string;
}

export const createDay = (date: {
  year: number;
  month: number;
  day: number;
}): Day => ({
  date: new Date(
    Date.UTC(date.year, date.month, date.day, 0, 0, 0)
  ).toISOString(),
});
