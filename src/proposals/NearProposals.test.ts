import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/vue";

import NearProposals from "@/proposals/NearProposals.vue";
import { SlotType } from "@/proposals/domain/slot";
import { createProposal } from "@/proposals/domain/proposal";
import { testSetup } from "@/testSetup";
import { j10, j11, j3, j5 } from "@/proposals/domain/day.fixture";
import { defaultUser } from "@/proposals/domain/user.fixture";

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
            nearProposals: [
              createProposal({ slot: slotType, ...j3 }, defaultUser),
              createProposal({ slot: slotType, ...j3 }, defaultUser),
              createProposal({ slot: slotType, ...j3 }, defaultUser),
              createProposal({ slot: slotType, ...j3 }, defaultUser),
              createProposal({ slot: slotType, ...j3 }, defaultUser),
              createProposal({ slot: slotType, ...j3 }, defaultUser),
            ],
          })
        );

        const availablesDates = screen.getAllByRole("listitem", {
          name: "available date",
        });
        const displayedDate = screen.getByText("lundi 17 octobre 2022");

        expect(availablesDates).toHaveLength(1);
        expect(displayedDate).toBeTruthy();
      });

      it("displays two dates when finding two proposals on an incoming days", () => {
        expect.assertions(3);
        render(
          NearProposals,
          testSetup({
            props: { slotType },
            nearProposals: [
              createProposal({ slot: slotType, ...j3 }, defaultUser),
              createProposal({ slot: slotType, ...j3 }, defaultUser),
              createProposal({ slot: slotType, ...j3 }, defaultUser),
              createProposal({ slot: slotType, ...j5 }, defaultUser),
              createProposal({ slot: slotType, ...j5 }, defaultUser),
              createProposal({ slot: slotType, ...j5 }, defaultUser),
            ],
          })
        );

        const availablesDates = screen.getAllByRole("listitem", {
          name: "available date",
        });
        const firstDate = screen.getByText("lundi 17 octobre 2022");
        const secondDate = screen.getByText("mercredi 19 octobre 2022");

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
            nearProposals: [
              createProposal({ slot: slotType, ...j10 }, defaultUser),
              createProposal({ slot: slotType, ...j11 }, defaultUser),
              createProposal({ slot: slotType, ...j3 }, defaultUser),
              createProposal({ slot: slotType, ...j5 }, defaultUser),
              createProposal({ slot: slotType, ...j5 }, defaultUser),
              createProposal({ slot: slotType, ...j5 }, defaultUser),
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
            nearProposals: [
              createProposal({ slot: slotType, ...j10 }, defaultUser),
              createProposal({ slot: slotType, ...j11 }, defaultUser),
              createProposal({ slot: slotType, ...j3 }, defaultUser),
              createProposal({ slot: slotType, ...j5 }, defaultUser),
              createProposal({ slot: slotType, ...j5 }, defaultUser),
              createProposal({ slot: slotType, ...j5 }, defaultUser),
            ],
          })
        );

        const firstDate = screen.getByText("lundi 17 octobre 2022");
        const secondDate = screen.getByText("mercredi 19 octobre 2022");
        const thirdDate = screen.getByText("lundi 24 octobre 2022");
        const fourthDate = screen.queryByText("mardi 25 octobre 2022");

        expect(firstDate).toBeTruthy();
        expect(secondDate).toBeTruthy();
        expect(thirdDate).toBeTruthy();
        expect(fourthDate).toBeFalsy();
      });
    }
  );
});
