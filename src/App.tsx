import React from 'react';

import './App.css';
import { NearProposals } from './proposal/containers/NearProposals';
import { ProposalProvider } from './proposal/ProposalContext';
import { calendarRepository } from './infrastructure/calendarRepository';
import { ProposalInMemoryRepository } from './infrastructure/proposalInMemoryRepository';

export const App: React.FC = () => {
  return (
    <ProposalProvider proposalRepository={ProposalInMemoryRepository} calendarRepository={calendarRepository}>
      <NearProposals />
    </ProposalProvider>
  );
};
