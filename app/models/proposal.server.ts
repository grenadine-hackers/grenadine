export type Proposal = {
    id: number;
    date: Date;
    moment: string;
};

export async function getProposals(): Promise<Proposal[]> {
    return [
        {
            id: 1,
            date: new Date(),
            moment: "Midi",
          },
          {
            id: 2,
            date: new Date(),
            moment: "Soir",
          },
    ];
}