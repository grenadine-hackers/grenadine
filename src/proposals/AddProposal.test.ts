import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/vue";

import AddProposal from "@/proposals/AddProposal.vue";
import { InMemoryProposals } from "@/infrastructure/inMemoryProposals";
import type { Proposals } from "@/proposals/domain/proposal";
import { SlotType } from "@/proposals/domain/slot";
import { j0 } from "@/proposals/domain/day.fixture";
import { testSetup } from "@/testSetup";

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

    it("is selected by props", () => {
      expect.assertions(1);

      render(
        AddProposal,
        testSetup({ props: { day: j0, slotType, isSelected: true } })
      );

      expect(
        screen.getByRole("checkbox", { name: ctaLabel, checked: true })
      ).toBeTruthy();
    });
    it("is unselected by props", () => {
      expect.assertions(1);

      render(
        AddProposal,
        testSetup({ props: { day: j0, slotType, isSelected: false } })
      );

      expect(
        screen.getByRole("checkbox", { name: ctaLabel, checked: false })
      ).toBeTruthy();
    });
  });
});
