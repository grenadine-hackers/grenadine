import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import MyProposals from "@/proposals/MyProposals.vue";
import { weekDays } from "@/proposals/domain/day.fixture";
import { testSetup } from "@/testSetup";

describe("MyProposals", () => {
  it("has a title", () => {
    expect.assertions(1);
    render(MyProposals, testSetup());
    const title = screen.getByRole("heading", { name: "Mes disponibilités" });
    expect(title).toBeTruthy();
  });
  it("lists the next dates", () => {
    expect.assertions(1);
    render(MyProposals, testSetup());
    const dates = screen.getAllByRole("listitem", { name: "date" });
    expect(dates).toHaveLength(weekDays.length);
  });
});
