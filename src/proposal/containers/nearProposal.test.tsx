import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NearProposals } from './NearProposals';
import { TestWrapper } from '../../TestWrapper';
import { ProposalInMemoryRepository } from '../../infrastructure/proposalInMemoryRepository';
import { proposals } from '../domain/proposal.fixture';
import { j0, jOutdated } from '../domain/day.fixture';

describe('<NearProposals />', () => {
  it('displays next lunch dates', () => {
    expect.assertions(1);

    render(
      <TestWrapper>
        <NearProposals />
      </TestWrapper>,
    );

    const heading = screen.getByRole('heading', { name: 'Prochain midi' });
    expect(heading).toBeInTheDocument();
  });

  it('finds no proposals', () => {
    expect.assertions(1);

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

    const noLunch = screen.getByText('Aucun midi disponible');
    expect(noLunch).toBeInTheDocument();
  });

  it('finds outdated proposals', () => {
    expect.assertions(1);
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

    const noLunch = screen.getByText('Aucun midi disponible');
    expect(noLunch).toBeInTheDocument();
  });

  it('finds proposals', () => {
    expect.assertions(1);
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
