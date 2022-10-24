import type {
  Proposal,
  ProposalCollection,
  Proposals,
} from "@/proposals/domain/proposal";

import { calendars } from "@/infrastructure/calendars";
import { createClient } from "@supabase/supabase-js";
import { createProposal } from "@/proposals/domain/proposal";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

const loadProposals = async (): Promise<ProposalCollection> => {
  const { data, error } = await supabase
    .from("proposals")
    .select()
    .gte("date", calendars.today().date);
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

const deleteProposal = async (proposal: Proposal) => {
  const { error } = await supabase
    .from("proposals")
    .delete()
    .eq("id", proposal.id);
};

export const supabaseProposals: Proposals = {
  createProposal,
  addProposal,
  loadProposals,
  deleteProposal,
};
