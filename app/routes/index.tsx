import {getProposal, ProposalSlot} from "~/proposal/domain/proposal";
import {Timeline} from "~/ui/timeline";

export default function Index() {
  return (
    <Timeline proposals={[ getProposal({}), getProposal({}), getProposal({slot: ProposalSlot.SOIR})]}/>
  );
}
