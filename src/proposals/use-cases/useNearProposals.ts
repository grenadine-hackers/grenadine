import { inject } from "vue";
import { ProposalInMemoryRepository } from "@/infrastructure/proposalInMemoryRepository";
import dayjs from "dayjs";
import type { Calendars } from "@/proposals/domain/day";
import { calendar } from "@/infrastructure/calendars";
import type {
  Proposal,
  Proposals,
  ProposalCollection,
} from "@/proposals/domain/proposal";

export const useNearProposals = () => {
  const calendars = inject<Calendars>("calendars", calendar);
  const { getProposals } = inject<Proposals>(
    "proposals",
    ProposalInMemoryRepository
  );
  const isOutdated = (proposal: Proposal): boolean =>
    dayjs(proposal.date).isSameOrAfter(calendars.today().date);

  const proposals: ProposalCollection = getProposals().filter(isOutdated);
  return { proposals };
};
