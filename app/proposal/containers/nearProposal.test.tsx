import React from 'react';
import {render, screen} from "@testing-library/react";
import { TestWrapper } from '../../TestWrapper';
import { NearProposals } from './NearProposals';

describe('<NearProposals />', () => {
    it('display nearest proposals', () => {
        render(<TestWrapper><NearProposals /></TestWrapper>);
        screen.getByRole('heading', {name: 'NearProposals'});
    });

    it('show list of proposals', () => {
        render(<TestWrapper><NearProposals /></TestWrapper>);
        const proposals = screen.getAllByRole('article');
        expect(proposals.length).toBe(2);
    });
});