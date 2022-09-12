import React from 'react';

import './App.css';
import { NearProposals } from './proposal/containers/NearProposals';
import { ProposalProvider } from './proposal/ProposalContext';
import { ProposalInMemoryRepository } from './proposal/domain/proposal';

export const App: React.FC = () => {
  return (
    <ProposalProvider repository={ProposalInMemoryRepository}>
      <NearProposals />
    </ProposalProvider>
  );
};
