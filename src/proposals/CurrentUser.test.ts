import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import { testSetup } from "@/testSetup";
import CurrentUser from "@/proposals/CurrentUser.vue";
import type { User } from "@/proposals/domain/user";

describe("userPlugin", () => {
  it(" irbneitnruight", () => {
    expect.assertions(1);

    const user: User = {
      id: "123",
    };
    render(CurrentUser, testSetup({ user }));
    // run assertions
    expect(screen.getByText("123")).toBeTruthy();
  });
});
