import React from "react";
import { ProposalRepository } from "./domain/proposal";

export const ProposalContext = React.createContext({toto: ''});

export const ProposalProvider: React.FC<{children: React.ReactElement, proposalRepository: ProposalRepository}> = ({children}) => {
  return(<ProposalContext.Provider value={{toto: 'tutu'}}>
    {children}
  </ProposalContext.Provider>)
}