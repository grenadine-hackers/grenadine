import React from "react";
import {render, screen} from "@testing-library/react";
import Vote from "~/routes/vote";

describe('health page', () => {
  it('fails', () => {
    render(<Vote></Vote>)

    expect(screen.getByRole('heading', {name: 'Vote'}))
  })
})