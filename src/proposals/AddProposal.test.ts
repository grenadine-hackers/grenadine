import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/vue";

import AddProposal from "@/proposals/AddProposal.vue";
import { InMemoryProposals } from "@/infrastructure/inMemoryProposals";
import { createProposal, type Proposals } from "@/proposals/domain/proposal";
import { SlotType } from "@/proposals/domain/slot";
import { j0, j3 } from "@/proposals/domain/day.fixture";
import { testSetup } from "@/testSetup";
import { userA, userDefault } from "./domain/user.fixture";

describe("AddProposal", () => {
  describe.each([
    {
      slotType: SlotType.LUNCH,
      ctaLabel: "Midi",
    },
    {
      slotType: SlotType.DINNER,
      ctaLabel: "Afterwork",
    },
  ])("add proposal for $slotType", ({ slotType, ctaLabel }) => {
    it(`displays a checkbox to propose a ${ctaLabel} on the given date`, () => {
      expect.assertions(1);

      render(AddProposal, testSetup({ props: { day: j0, slotType } }));

      expect(screen.getByRole("checkbox", { name: ctaLabel })).toBeTruthy();
    });

    it("calls add proposals method when clicking on a valid proposal", async () => {
      expect.assertions(1);
      const proposals: Proposals = {
        ...InMemoryProposals(),
        addProposal: () => {},
      };

      const addProposal = vi.spyOn(proposals, "addProposal");

      render(
        AddProposal,
        testSetup({
          props: { day: j0, slotType },
          proposals,
          foundProposals: [
            createProposal({ slot: slotType, ...j3 }, userDefault),
          ],
        })
      );

      const button = screen.getByRole("checkbox", { name: ctaLabel });
      await fireEvent.click(button);

      expect(addProposal).toHaveBeenCalledOnce();
    });

    it("calls delete proposals method when clicking on a valid proposal", async () => {
      expect.assertions(1);
      const proposals: Proposals = {
        ...InMemoryProposals(),
        deleteProposal: () => {},
      };

      const deleteProposal = vi.spyOn(proposals, "deleteProposal");

      const myProposal = createProposal({ slot: slotType, ...j3 }, userA);
      render(
        AddProposal,
        testSetup({
          props: { day: j0, slotType, myProposal },
          proposals,
          foundProposals: [
            createProposal({ slot: slotType, ...j3 }, userDefault),
            myProposal,
          ],
        })
      );

      const button = screen.getByRole("checkbox", { name: ctaLabel });
      await fireEvent.click(button);

      expect(deleteProposal).toHaveBeenCalledOnce();
    });
  });
});
