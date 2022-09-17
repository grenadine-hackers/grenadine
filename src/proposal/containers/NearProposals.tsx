import React from 'react';
import type { Proposals } from '../domain/proposal';
import { useNearProposals } from '../hooks/useNearProposals';
import { ProposalCard } from '../components/ProposalCard';
import { Day } from '../domain/day';
import { useCalendar } from '../hooks/useCalendar';

export const NearProposals: React.FC = () => {
  const proposals: Proposals = useNearProposals();
  const days: Day[] = useCalendar().getNextWeeks({ date: new Date().toISOString() });

  return (
    <>
      <h1>NearProposals</h1>
      <ul>
        {days.map((day) => (
          <li key={day.date}>{day.date}</li>
        ))}
      </ul>
      {proposals.map((proposal) => (
        <ProposalCard proposal={proposal} key={proposal.id} />
      ))}
    </>
  );
};
