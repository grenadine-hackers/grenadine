import React from 'react';
import { render, screen } from '@testing-library/react';
import { NearProposals } from './NearProposals';
import { TestWrapper } from '../../TestWrapper';
import { ProposalInMemoryRepository } from '../../infrastructure/proposalInMemoryRepository';
import { proposals } from '../domain/proposal.fixture';

describe('<NearProposals />', () => {
  it('displays next lunch dates', () => {
    render(
      <TestWrapper>
        <NearProposals />
      </TestWrapper>,
    );

    screen.getByRole('heading', { name: 'Prochain midi' });
  });

  it('bfruiebgti', () => {
    render(
      <TestWrapper
        proposalRepository={{
          ...ProposalInMemoryRepository,
          getNearestProposals: () => [...proposals],
        }}
      >
        <NearProposals />
      </TestWrapper>,
    );

    const articles = screen.getAllByRole('article');
    expect(articles.length).toBe(proposals.length);
  });
});
