import React from "react";
import {render, screen} from "@testing-library/react";
import Health from "./health";

describe('health page', () => {
  it('fails', () => {
    render(<Health></Health>)

    expect(screen.getByRole('heading', {name: 'Healthy'}))
  })
})