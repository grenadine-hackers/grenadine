import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/vue";

import NearProposals from "@/proposal/NearProposals.vue";
import { SlotType } from "@/proposal/domain/slot";

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

        render(NearProposals, { props: { slotType } });

        const heading = screen.getByRole("heading", { name: expectedName });
        expect(heading).toBeTruthy();
      });
      it(`finds no proposals for ${slotType}`, () => {
        expect.assertions(1);

        render(NearProposals, { props: { slotType } });

        const noLunch = screen.getByText(expectedNoResults);
        expect(noLunch).toBeTruthy();
      });
    }
  );
});

/*

  it('finds outdated proposals', () => {
    expect.assertions(1);
    render(
      <TestWrapper
        proposalRepository={{
    ...ProposalInMemoryRepository,
        getNearestProposals: () => [...proposals],
    }}
    today={jOutdated}
      >
      <NearProposals />
      </TestWrapper>,
  );

    const noLunch = screen.getByText('Aucun midi disponible');
    expect(noLunch).toBeInTheDocument();
  });

  it('finds proposals', () => {
    expect.assertions(1);
    render(
      <TestWrapper
        proposalRepository={{
    ...ProposalInMemoryRepository,
        getNearestProposals: () => [...proposals],
    }}
    today={j0}
      >
      <NearProposals />
      </TestWrapper>,
  );

    const availablesDates = screen.getAllByRole('article');
    expect(availablesDates).toHaveLength(proposals.length);
  });*/
