enum ProposalSlot {
    MIDI,
    SOIR
};

export type Proposal = {
    date: Date;
    slot: ProposalSlot;
};