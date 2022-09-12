import React from 'react';
import { ProposalInMemoryRepository, ProposalRepository } from './domain/proposal';

export const ProposalContext = React.createContext<{ repository: ProposalRepository }>({
  repository: ProposalInMemoryRepository,
});

export const ProposalProvider: React.FC<{ children: React.ReactElement; repository: ProposalRepository }> = ({
  children,
  repository,
}) => {
  return <ProposalContext.Provider value={{ repository }}>{children}</ProposalContext.Provider>;
};
