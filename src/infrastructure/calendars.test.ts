import { describe, expect, it } from "vitest";
import { j0, weekDays } from "@/proposals/domain/day.fixture";

import { calendar } from "./calendars";

describe("calendars", () => {
  it("returns the next four weeks without weekends", () => {
    expect.assertions(1);
    const testedPeriod = calendar.getNextWeeks(j0);

    expect(testedPeriod).toStrictEqual([...weekDays]);
  });
});
