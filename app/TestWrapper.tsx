import React from "react";
import { ProposalProvider } from "./proposal/ProposalContext";
import {InMemoryProposalRepository} from './proposal/domain/proposal'
import type {ProposalRepository} from './proposal/domain/proposal'

interface TestProps {
    children: React.ReactNode,
    proposalRepository: ProposalRepository
}

export const TestWrapper: React.FC<TestProps> = ({children, proposalRepository = InMemoryProposalRepository}: TestProps) => {
    return <ProposalProvider proposalRepository={proposalRepository}>{children}</ProposalProvider>;
};