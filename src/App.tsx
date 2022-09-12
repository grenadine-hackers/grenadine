import React from 'react';

import './App.css';
import { NearProposals } from './proposal/containers/NearProposals';
import { ProposalProvider } from './proposal/ProposalContext';

export const App: React.FC = () => {
  return (
    <ProposalProvider>
      <NearProposals />
    </ProposalProvider>
  );
};
