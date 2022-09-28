import { calendarRepository } from "./calendarRepository";
import { j0, weekDays } from "@/proposal/domain/day.fixture";
import { describe, expect, it } from "vitest";

describe("calendarRepository", () => {
  it("returns the next four weeks without weekends", () => {
    expect.assertions(1);
    const testedPeriod = calendarRepository.getNextWeeks(j0);

    expect(testedPeriod).toStrictEqual([...weekDays]);
  });
});
