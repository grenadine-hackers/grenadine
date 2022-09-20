import React from 'react';
import { ProposalProvider } from './proposal/ProposalContext';
import { calendarRepository } from './infrastructure/calendarRepository';
import { ProposalInMemoryRepository } from './infrastructure/proposalInMemoryRepository';
import { ProposalRepository } from './proposal/domain/proposal';

export const TestWrapper: React.FC<{ children: React.ReactElement; proposalRepository?: ProposalRepository }> = ({
  children,
  proposalRepository = ProposalInMemoryRepository,
}) => {
  return (
    <ProposalProvider proposalRepository={proposalRepository} calendarRepository={calendarRepository}>
      {children}
    </ProposalProvider>
  );
};
