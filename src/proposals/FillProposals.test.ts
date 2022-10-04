import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import FillProposals from "@/proposals/FillProposals.vue";
import { weekDays } from "@/proposals/domain/day.fixture";
import { testSetup } from "@/testSetup";

describe("FillProposals", () => {
  it("lists the next dates", () => {
    expect.assertions(1);
    render(FillProposals, testSetup());
    const dates = screen.getAllByRole("listitem", { name: "date" });
    expect(dates).toHaveLength(weekDays.length);
  });
});
