import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/vue";

import NearProposals from "@/proposal/NearProposals.vue";
import { SlotType } from "@/proposal/domain/slot";

describe("NearProposals", () => {
  it("displays next lunch dates", () => {
    expect.assertions(1);

    render(NearProposals, { props: { slotType: SlotType.LUNCH } });

    const heading = screen.getByRole("heading", { name: "Prochain midi" });
    expect(heading).toBeTruthy();
  });

  it("displays next lunch dates", () => {
    expect.assertions(1);

    render(NearProposals, { props: { slotType: SlotType.DINNER } });

    const heading = screen.getByRole("heading", { name: "Prochain afterwork" });
    expect(heading).toBeTruthy();
  });

  /*
  it('finds no proposals', () => {
    expect.assertions(1);

    render(
      <TestWrapperé
        proposalRepository={{
    ...ProposalInMemoryRepository,
        getNearestProposals: () => [],
    }}
  >
    <NearProposals />
    </TestWrapper>,
  );

    const noLunch = screen.getByText('Aucun midi disponible');
    expect(noLunch).toBeInTheDocument();
  });

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
});
