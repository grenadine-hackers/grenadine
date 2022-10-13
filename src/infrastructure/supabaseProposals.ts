import type {
  Proposal,
  ProposalCollection,
  Proposals,
} from "@/proposals/domain/proposal";
import { createProposal } from "@/proposals/domain/proposal";

import { createClient } from "@supabase/supabase-js";
import { calendar } from "@/infrastructure/calendars";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

const loadProposals = async (): Promise<ProposalCollection> => {
  const { data, error } = await supabase
    .from("proposals")
    .select()
    .gte("date", calendar.today().date);
  return data as ProposalCollection;
};
const addProposal = async (proposal: Proposal) => {
  const { error } = await supabase.from("proposals").insert({
    id: proposal.id,
    date: proposal.date,
    slot: proposal.slot,
    user: proposal.user,
  });
};

export const supabaseProposals: Proposals = {
  createProposal,
  addProposal,
  loadProposals,
};
