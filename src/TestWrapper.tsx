import React from 'react';
import { CalendarRepository, ProposalProvider } from './proposal/ProposalContext';
import { calendarRepository as calendarInMemoryRepository } from './infrastructure/calendarRepository';
import { ProposalInMemoryRepository } from './infrastructure/proposalInMemoryRepository';
import { ProposalRepository } from './proposal/domain/proposal';

export const TestWrapper: React.FC<{
  children: React.ReactElement;
  proposalRepository?: ProposalRepository;
  calendarRepository?: CalendarRepository;
}> = ({
  children,
  proposalRepository = ProposalInMemoryRepository,
  calendarRepository = calendarInMemoryRepository,
}) => {
  return (
    <ProposalProvider proposalRepository={proposalRepository} calendarRepository={calendarRepository}>
      {children}
    </ProposalProvider>
  );
};
