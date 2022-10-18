import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/vue";
import AddProposal from "@/proposals/AddProposal.vue";
import { testSetup } from "@/testSetup";
import type { Proposals } from "@/proposals/domain/proposal";
import { InMemoryProposals } from "@/infrastructure/inMemoryProposals";
import { j0 } from "@/proposals/domain/day.fixture";
import { SlotType } from "@/proposals/domain/slot";

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
  });

  // TODO UNSKIP THIS TEST
  it.skip("calls add proposals when clicking on a valid proposal", async () => {
    expect.assertions(1);
    const proposals: Proposals = {
      ...InMemoryProposals,
      addProposal: () => {},
    };

    const addProposal = vi.spyOn(proposals, "addProposal");
    render(AddProposal, testSetup({ props: { day: j0 }, proposals }));

    const button = screen.getByRole("button", { name: "Midi" });
    await fireEvent.click(button);

    expect(addProposal).toHaveBeenCalledOnce();
  });
});
