import React from 'react';
import {ProposalCard} from "./ProposalCard";
import {Proposals} from "../proposal/domain/proposal";

interface Props {
    proposals: Proposals
}

export const Timeline: React.FC<Props> = ({proposals}) => {
    return (
        <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
            <h1 className="text-3xl text-center font-bold text-blue-500">Grenadine</h1>
            {proposals.map((proposal, index) =>
                <ProposalCard key={`proposal_${index}`}/>
            )}
        </div>
    );
}