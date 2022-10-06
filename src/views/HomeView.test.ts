import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import HomeView from "./HomeView.vue";
import { testSetup } from "@/testSetup";

describe("HomeView", () => {
  it("should render the home page", async () => {
    expect.assertions(1);
    render(HomeView, testSetup());
    expect(screen.getByRole("heading", { name: "Grenadine" })).toBeTruthy();
  });
  it("has next lunch informations", () => {
    expect.assertions(1);
    render(HomeView, testSetup());
    expect(screen.getByRole("heading", { name: "Prochain midi" })).toBeTruthy();
  });
  it("has next afterwork informations", () => {
    expect.assertions(1);
    render(HomeView, testSetup());
    expect(
      screen.getByRole("heading", { name: "Prochain afterwork" })
    ).toBeTruthy();
  });
});
