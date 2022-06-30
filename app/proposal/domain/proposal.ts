export enum ProposalSlot {
    MIDI,
    SOIR
};

export type Proposal = {
    date: Date;
    slot: ProposalSlot;
};

type ProposalProps = {
    date: Date;
    slot: ProposalSlot;
}

export const getProposal = (proposal: Partial<ProposalProps>): Proposal => {
    return { date: proposal.date ?? new Date(), slot: proposal.slot ?? ProposalSlot.MIDI };
}