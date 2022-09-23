import React from 'react';
import { render, screen } from '@testing-library/react';
import { NearProposals } from './NearProposals';
import { TestWrapper } from '../../TestWrapper';
import { ProposalInMemoryRepository } from '../../infrastructure/proposalInMemoryRepository';
import { proposals } from '../domain/proposal.fixture';
import { j0, jOutdated } from '../domain/day.fixture';

describe('<NearProposals />', () => {
  it('displays next lunch dates', () => {
    render(
      <TestWrapper>
        <NearProposals />
      </TestWrapper>,
    );

    screen.getByRole('heading', { name: 'Prochain midi' });
  });

  it('finds no proposals', () => {
    render(
      <TestWrapper
        proposalRepository={{
          ...ProposalInMemoryRepository,
          getNearestProposals: () => [],
        }}
      >
        <NearProposals />
      </TestWrapper>,
    );

    screen.getByText('Aucun midi disponible');
  });

  it('finds outdated proposals', () => {
    render(
      <TestWrapper
        proposalRepository={{
          ...ProposalInMemoryRepository,
          getNearestProposals: () => [...proposals],
        }}
        today={jOutdated}
      >
        <NearProposals />
      </TestWrapper>,
    );

    screen.getByText('Aucun midi disponible');
  });

  it('finds proposals', () => {
    render(
      <TestWrapper
        proposalRepository={{
          ...ProposalInMemoryRepository,
          getNearestProposals: () => [...proposals],
        }}
        today={j0}
      >
        <NearProposals />
      </TestWrapper>,
    );

    const availablesDates = screen.getAllByRole('article');
    expect(availablesDates).toHaveLength(proposals.length);
  });
});
