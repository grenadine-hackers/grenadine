import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import type { Component } from "vue";

const testedComponent: Component = {
  template: `
      <h1>
        Hello World
      </h1>`,
};

describe("NearProposals", () => {
  it("tetet", () => {
    render(testedComponent, {});
    const head = screen.getByRole("heading", { name: "Hello World" });
    expect(head).toBeTruthy();
  });
});
