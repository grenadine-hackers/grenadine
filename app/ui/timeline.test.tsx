import React from 'react';
import {render, screen} from "@testing-library/react";
import {getProposals} from "../proposal/domain/proposal.fixture";
import {Timeline} from "./timeline";

describe('<Timeline />', () => {
    it('show list of proposals', () => {
        render(<Timeline proposals={getProposals} />);
        const proposals = screen.getAllByRole('article');
        expect(proposals.length).toBe(2);
    });
});