import { describe, expect, it } from "vitest";
import { j10, j11, j3, j5 } from "@/proposals/domain/day.fixture";
import { render, screen } from "@testing-library/vue";

import NearProposals from "@/proposals/NearProposals.vue";
import { SlotType } from "@/proposals/domain/slot";
import { createProposal } from "@/proposals/domain/proposal";
import { testSetup } from "@/testSetup";
import { userDefault } from "@/proposals/domain/user.fixture";

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

      it("displays a single date when finding multiple proposals on a single incomming day", () => {
        expect.assertions(2);
        render(
          NearProposals,
          testSetup({
            props: { slotType },
            foundProposals: [
              createProposal({ slot: slotType, ...j3 }, userDefault),
              createProposal({ slot: slotType, ...j3 }, userDefault),
              createProposal({ slot: slotType, ...j3 }, userDefault),
              createProposal({ slot: slotType, ...j3 }, userDefault),
              createProposal({ slot: slotType, ...j3 }, userDefault),
              createProposal({ slot: slotType, ...j3 }, userDefault),
            ],
          })
        );

        const availablesDates = screen.getAllByRole("listitem", {
          name: "available date",
        });
        const displayedDate = screen.getByText(
          "lundi 17 octobre 2022 (6 votes)"
        );

        expect(availablesDates).toHaveLength(1);
        expect(displayedDate).toBeTruthy();
      });

      it("displays two dates when finding two proposals on an incoming days", () => {
        expect.assertions(3);
        render(
          NearProposals,
          testSetup({
            props: { slotType },
            foundProposals: [
              createProposal({ slot: slotType, ...j3 }, userDefault),
              createProposal({ slot: slotType, ...j3 }, userDefault),
              createProposal({ slot: slotType, ...j3 }, userDefault),
              createProposal({ slot: slotType, ...j5 }, userDefault),
              createProposal({ slot: slotType, ...j5 }, userDefault),
              createProposal({ slot: slotType, ...j5 }, userDefault),
            ],
          })
        );

        const availablesDates = screen.getAllByRole("listitem", {
          name: "available date",
        });
        const firstDate = screen.getByText("lundi 17 octobre 2022 (3 votes)");
        const secondDate = screen.getByText(
          "mercredi 19 octobre 2022 (3 votes)"
        );

        expect(availablesDates).toHaveLength(2);
        expect(firstDate).toBeTruthy();
        expect(secondDate).toBeTruthy();
      });

      it("displays a maximum of three dates when finding more than three proposals on incoming days", () => {
        expect.assertions(1);
        render(
          NearProposals,
          testSetup({
            props: { slotType },
            foundProposals: [
              createProposal({ slot: slotType, ...j10 }, userDefault),
              createProposal({ slot: slotType, ...j11 }, userDefault),
              createProposal({ slot: slotType, ...j3 }, userDefault),
              createProposal({ slot: slotType, ...j5 }, userDefault),
              createProposal({ slot: slotType, ...j5 }, userDefault),
              createProposal({ slot: slotType, ...j5 }, userDefault),
            ],
          })
        );

        const availablesDates = screen.getAllByRole("listitem", {
          name: "available date",
        });

        expect(availablesDates).toHaveLength(3);
      });

      it("displays only the three nearest dates", () => {
        expect.assertions(4);
        render(
          NearProposals,
          testSetup({
            props: { slotType },
            foundProposals: [
              createProposal({ slot: slotType, ...j10 }, userDefault),
              createProposal({ slot: slotType, ...j11 }, userDefault),
              createProposal({ slot: slotType, ...j3 }, userDefault),
              createProposal({ slot: slotType, ...j5 }, userDefault),
              createProposal({ slot: slotType, ...j5 }, userDefault),
              createProposal({ slot: slotType, ...j5 }, userDefault),
            ],
          })
        );

        const firstDate = screen.getByText("lundi 17 octobre 2022 (1 vote)");
        const secondDate = screen.getByText(
          "mercredi 19 octobre 2022 (3 votes)"
        );
        const thirdDate = screen.getByText("lundi 24 octobre 2022 (1 vote)");
        const fourthDate = screen.queryByText("mardi 25 octobre 2022 (1 vote)");

        expect(firstDate).toBeTruthy();
        expect(secondDate).toBeTruthy();
        expect(thirdDate).toBeTruthy();
        expect(fourthDate).toBeFalsy();
      });
    }
  );
});
