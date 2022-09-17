import React from 'react';
import { ProposalProvider } from './proposal/ProposalContext';
import { calendarRepository } from './infrastructure/calendarRepository';
import { ProposalInMemoryRepository } from './infrastructure/proposalInMemoryRepository';

export const TestWrapper: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  return (
    <ProposalProvider proposalRepository={ProposalInMemoryRepository} calendarRepository={calendarRepository}>
      {children}
    </ProposalProvider>
  );
};
