import React from 'react';
import { render, screen } from '@testing-library/react';
import { NearProposals } from './NearProposals';
import { TestWrapper } from '../../TestWrapper';
import { ProposalInMemoryRepository } from '../../infrastructure/proposalInMemoryRepository';
import { proposals } from '../domain/proposal.fixture';
import { j0 } from '../domain/day.fixture';
import { calendarRepository } from '../../infrastructure/calendarRepository';

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
});
