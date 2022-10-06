import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import AddProposal from "@/proposals/AddProposal.vue";
import { testSetup } from "@/testSetup";

describe("AddProposal", () => {
  it("displays a button to proposal a lunch on the given date", () => {
    expect.assertions(1);

    render(AddProposal, testSetup());

    expect(screen.getByRole("button", { name: "Midi" })).toBeTruthy();
  });
  it("displays a button to proposal a lunch on the given date", () => {
    expect.assertions(1);

    render(AddProposal, testSetup());

    expect(screen.getByRole("button", { name: "Afternoon" })).toBeTruthy();
  });
});
