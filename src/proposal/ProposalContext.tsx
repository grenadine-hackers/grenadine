import React from "react";

export const ProposalContext = React.createContext({toto: ''});

export const ProposalProvider: React.FC<{children: React.ReactElement}> = ({children}) => {
  return(<ProposalContext.Provider value={{toto: 'tutu'}}>
    {children}
  </ProposalContext.Provider>)
}