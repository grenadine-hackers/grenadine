import React from 'react';
import { ProposalProvider } from './proposal/ProposalContext';
import { calendarRepository as calendarInMemoryRepository } from './infrastructure/calendarRepository';
import { ProposalInMemoryRepository } from './infrastructure/proposalInMemoryRepository';
import { ProposalRepository } from './proposal/domain/proposal';
import { Day } from './proposal/domain/day';
import { j0 } from './proposal/domain/day.fixture';

export const TestWrapper: React.FC<{
  children: React.ReactElement;
  proposalRepository?: ProposalRepository;
  today?: Day;
}> = ({ children, proposalRepository = ProposalInMemoryRepository, today = j0 }) => {
  return (
    <ProposalProvider
      proposalRepository={proposalRepository}
      calendarRepository={{
        ...calendarInMemoryRepository,
        today: () => today,
      }}
    >
      {children}
    </ProposalProvider>
  );
};
