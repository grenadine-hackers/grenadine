import React from 'react';
import { ProposalProvider } from './proposal/ProposalContext';

export const TestWrapper: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  return <ProposalProvider>{children}</ProposalProvider>;
};
