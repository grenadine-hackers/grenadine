import React from 'react';
import { ProposalProvider } from './proposal/ProposalContext';
import { ProposalInMemoryRepository } from './proposal/domain/proposal';

export const TestWrapper: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  return <ProposalProvider repository={ProposalInMemoryRepository}>{children}</ProposalProvider>;
};
