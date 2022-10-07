import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/vue";
import AddProposal from "@/proposals/AddProposal.vue";
import { testSetup } from "@/testSetup";
import type { Proposal, Proposals } from "@/proposals/domain/proposal";
import { InMemoryProposals } from "@/infrastructure/inMemoryProposals";
import { SlotType } from "@/proposals/domain/slot";
import { j0 } from "@/proposals/domain/day.fixture";

describe("AddProposal", () => {
  it("displays a button to propose a lunch on the given date", () => {
    expect.assertions(1);

    render(AddProposal, testSetup({ props: { day: j0 } }));

    expect(screen.getByRole("button", { name: "Midi" })).toBeTruthy();
  });
  it("displays a button to propose an afterwork on the given date", () => {
    expect.assertions(1);

    render(AddProposal, testSetup({ props: { day: j0 } }));

    expect(screen.getByRole("button", { name: "Afterwork" })).toBeTruthy();
  });

  it("calls add proposals when clicking on a valid proposal", async () => {
    expect.assertions(1);
    const proposals: Proposals = {
      ...InMemoryProposals,
      addProposal: (proposal: Proposal) => {},
    };

    const addProposal = vi.spyOn(proposals, "addProposal");
    render(AddProposal, testSetup({ props: { day: j0 }, proposals }));

    const button = screen.getByRole("button", { name: "Midi" });
    await fireEvent.click(button);

    expect(addProposal).toHaveBeenCalledOnce();
  });
});
