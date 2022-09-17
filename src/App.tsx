import React from 'react';

import './App.css';
import { NearProposals } from './proposal/containers/NearProposals';
import { ProposalProvider } from './proposal/ProposalContext';
import { ProposalInMemoryRepository } from './proposal/domain/proposal';
import { calendarRepository } from './infrastructure/calendarRepository';

export const App: React.FC = () => {
  return (
    <ProposalProvider proposalRepository={ProposalInMemoryRepository} calendarRepository={calendarRepository}>
      <NearProposals />
    </ProposalProvider>
  );
};
