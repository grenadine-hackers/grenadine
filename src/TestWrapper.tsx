import React from 'react';
import { CalendarRepository, ProposalProvider } from './proposal/ProposalContext';
import { calendarRepository as calendarInMemoryRepository } from './infrastructure/calendarRepository';
import { ProposalInMemoryRepository } from './infrastructure/proposalInMemoryRepository';
import { ProposalRepository } from './proposal/domain/proposal';
import { j0 } from './proposal/domain/day.fixture';

export const TestWrapper: React.FC<{
  children: React.ReactElement;
  proposalRepository?: ProposalRepository;
  calendarRepository?: CalendarRepository;
}> = ({
  children,
  proposalRepository = ProposalInMemoryRepository,
  calendarRepository = calendarInMemoryRepository ?? {
    getNextWeeks: () => calendarRepository.getNextWeeks(j0),
  },
}) => {
  return (
    <ProposalProvider proposalRepository={proposalRepository} calendarRepository={calendarRepository}>
      {children}
    </ProposalProvider>
  );
};
