import { describe, expect, it } from "vitest";
import { j0, j1, j3, j5 } from "./domain/day.fixture";
import { render, screen } from "@testing-library/vue";
import { userA, userDefault } from "./domain/user.fixture";

import MyProposals from "@/proposals/MyProposals.vue";
import { SlotType } from "./domain/slot";
import { createProposal } from "./domain/proposal";
import { testSetup } from "@/testSetup";
import { weekDays } from "@/proposals/domain/day.fixture";

describe("MyProposals", () => {
  it("has a title", () => {
    expect.assertions(1);
    render(MyProposals, testSetup());
    const title = screen.getByRole("heading", {
      name: "Mes prochaines disponibilités",
    });
    expect(title).toBeTruthy();
  });
  it("lists the next dates", () => {
    expect.assertions(1);
    render(MyProposals, testSetup());
    const dates = screen.getAllByRole("listitem", { name: "date" });
    expect(dates).toHaveLength(weekDays.length);
  });
  describe("shows the proposals made by the user", () => {
    it("does not check a proposal I did not made", async () => {
      expect.assertions(1);

      render(
        MyProposals,
        testSetup({
          foundProposals: [
            createProposal({ slot: SlotType.LUNCH, ...j3 }, userDefault),
          ],
          user: userA,
        })
      );

      const boxes = screen.queryAllByRole("checkbox", { checked: true });

      expect(boxes).toHaveLength(0);
    });

    it("checks a proposal I made", async () => {
      expect.assertions(1);

      render(
        MyProposals,
        testSetup({
          foundProposals: [
            createProposal({ slot: SlotType.LUNCH, ...j3 }, userA),
          ],
          user: userA,
        })
      );

      const boxes = screen.queryAllByRole("checkbox", { checked: true });

      expect(boxes).toHaveLength(1);
    });
  });
});
