import React from "react";
import {InMemoryProposalRepository, ProposalRepository} from "./domain/proposal";

export const ProposalContext = React.createContext<{proposalRepository: ProposalRepository}>({proposalRepository: InMemoryProposalRepository});

export const ProposalProvider: React.FC<{children: React.ReactElement, proposalRepository: ProposalRepository}> = ({children}) => {
  return(<ProposalContext.Provider value={{proposalRepository: InMemoryProposalRepository}}>
    {children}
  </ProposalContext.Provider>)
}