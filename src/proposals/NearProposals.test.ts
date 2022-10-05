import { describe, expect, it } from "vitest";
import { render, type RenderOptions, screen } from "@testing-library/vue";

import NearProposals from "@/proposals/NearProposals.vue";
import { SlotType } from "@/proposals/domain/slot";
import type { Day } from "@/proposals/domain/day";
import type { ProposalCollection } from "@/proposals/domain/proposal";
import { createProposal } from "@/proposals/domain/proposal";
import { testSetup } from "@/testSetup";
import { j3 } from "@/proposals/domain/day.fixture";

export type SetupOptions = RenderOptions & { today?: Day } & {
  nearProposals?: ProposalCollection;
};

describe("NearProposals", () => {
  describe.each([
    {
      slotType: SlotType.LUNCH,
      expectedName: "Prochain midi",
      expectedNoResults: "Aucun midi disponible",
    },
    {
      slotType: SlotType.DINNER,
      expectedName: "Prochain afterwork",
      expectedNoResults: "Aucun afterwork disponible",
    },
  ])(
    "Near proposals on $slotType",
    ({ slotType, expectedName, expectedNoResults }) => {
      it(`displays next ${slotType} dates`, () => {
        expect.assertions(1);

        render(NearProposals, testSetup({ props: { slotType } }));

        const heading = screen.getByRole("heading", { name: expectedName });
        expect(heading).toBeTruthy();
      });

      it(`finds no proposals for ${slotType}`, () => {
        expect.assertions(1);

        render(NearProposals, testSetup({ props: { slotType } }));

        const noLunch = screen.getByText(expectedNoResults);
        expect(noLunch).toBeTruthy();
      });

      it("displays a single date when finding multiple proposals on a single day", () => {
        expect.assertions(2);
        render(
          NearProposals,
          testSetup({
            props: { slotType },
            nearProposals: [
              createProposal({ slot: SlotType.LUNCH, ...j3 }),
              createProposal({ slot: SlotType.LUNCH, ...j3 }),
              createProposal({ slot: SlotType.LUNCH, ...j3 }),
              createProposal({ slot: SlotType.LUNCH, ...j3 }),
              createProposal({ slot: SlotType.LUNCH, ...j3 }),
              createProposal({ slot: SlotType.LUNCH, ...j3 }),
              createProposal({ slot: SlotType.DINNER, ...j3 }),
              createProposal({ slot: SlotType.DINNER, ...j3 }),
              createProposal({ slot: SlotType.DINNER, ...j3 }),
              createProposal({ slot: SlotType.DINNER, ...j3 }),
              createProposal({ slot: SlotType.DINNER, ...j3 }),
              createProposal({ slot: SlotType.DINNER, ...j3 }),
            ],
          })
        );

        const availablesDates = screen.getAllByRole("listitem", {
          name: "next date",
        });
        const displayedDate = screen.getByText("lundi 17 octobre 2022");

        expect(availablesDates).toHaveLength(1);
        expect(displayedDate).toBeTruthy();
      });
    }
  );
});
