import { createDay, Day } from './day';

export const j0 = createDay({ year: 2022, month: 9, day: 14 });
export const j1 = createDay({ year: 2022, month: 9, day: 15 }); // weekend
export const j2 = createDay({ year: 2022, month: 9, day: 16 }); // weekend
export const j3 = createDay({ year: 2022, month: 9, day: 17 });
export const j4 = createDay({ year: 2022, month: 9, day: 18 });
export const j5 = createDay({ year: 2022, month: 9, day: 19 });
export const j6 = createDay({ year: 2022, month: 9, day: 20 });
export const j7 = createDay({ year: 2022, month: 9, day: 21 });
export const j8 = createDay({ year: 2022, month: 9, day: 22 }); // weekend
export const j9 = createDay({ year: 2022, month: 9, day: 23 }); // weekend
export const j10 = createDay({ year: 2022, month: 9, day: 24 });
export const j11 = createDay({ year: 2022, month: 9, day: 25 });
export const j12 = createDay({ year: 2022, month: 9, day: 26 });
export const j13 = createDay({ year: 2022, month: 9, day: 27 });
export const j14 = createDay({ year: 2022, month: 9, day: 28 });
export const j15 = createDay({ year: 2022, month: 9, day: 29 }); // weekend
export const j16 = createDay({ year: 2022, month: 9, day: 30 }); // weekend
export const j17 = createDay({ year: 2022, month: 9, day: 31 });
export const j18 = createDay({ year: 2022, month: 10, day: 1 });
export const j19 = createDay({ year: 2022, month: 10, day: 2 });
export const j20 = createDay({ year: 2022, month: 10, day: 3 });
export const j21 = createDay({ year: 2022, month: 10, day: 4 });
export const j22 = createDay({ year: 2022, month: 10, day: 5 }); // weekend
export const j23 = createDay({ year: 2022, month: 10, day: 6 }); // weekend
export const j24 = createDay({ year: 2022, month: 10, day: 7 });
export const j25 = createDay({ year: 2022, month: 10, day: 8 });
export const j26 = createDay({ year: 2022, month: 10, day: 9 });
export const j27 = createDay({ year: 2022, month: 10, day: 10 });
export const j28 = createDay({ year: 2022, month: 10, day: 11 });
export const j29 = createDay({ year: 2022, month: 10, day: 12 }); // weekend

export const weekDays: Day[] = [
  j0,
  j3,
  j4,
  j5,
  j6,
  j7,
  j10,
  j11,
  j12,
  j13,
  j14,
  j17,
  j18,
  j19,
  j20,
  j21,
  j24,
  j25,
  j26,
  j27,
  j28,
];

export const weekends: Day[] = [j1, j2, j8, j9, j15, j16, j22, j23, j29];
