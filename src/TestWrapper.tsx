import React from 'react';
import { ProposalProvider } from './proposal/ProposalContext';
import { ProposalInMemoryRepository } from './proposal/domain/proposal';
import { calendarRepository } from './infrastructure/calendarRepository';

export const TestWrapper: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  return (
    <ProposalProvider proposalRepository={ProposalInMemoryRepository} calendarRepository={calendarRepository}>
      {children}
    </ProposalProvider>
  );
};
