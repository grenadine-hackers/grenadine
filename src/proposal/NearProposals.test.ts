import { describe, expect, it } from "vitest";
import { render, screen, type RenderOptions } from "@testing-library/vue";

import NearProposals from "@/proposal/NearProposals.vue";
import { SlotType } from "@/proposal/domain/slot";
import type { Day } from "@/proposal/domain/day";
import type { Proposals } from "@/proposal/domain/proposal";
import { testSetup } from "./testSetup";
import { jOutdated } from "@/proposal/domain/day.fixture";
import { proposals } from "@/proposal/domain/proposal.fixture";

export type SetupOptions = RenderOptions & { today?: Day } & {
  nearProposals?: Proposals;
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

      it("finds proposals", () => {
        expect.assertions(1);
        render(
          NearProposals,
          testSetup({ props: { slotType }, nearProposals: proposals })
        );

        const availablesDates = screen.getAllByRole("article");
        expect(availablesDates).toHaveLength(proposals.length);
      });

      it("finds outdated proposals", () => {
        expect.assertions(1);
        render(
          NearProposals,
          testSetup({
            props: { slotType },
            nearProposals: proposals,
            today: jOutdated,
          })
        );

        const noLunch = screen.getByText(expectedNoResults);
        expect(noLunch).toBeTruthy();
      });
    }
  );
});
