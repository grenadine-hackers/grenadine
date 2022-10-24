import type {
  Proposal,
  ProposalCollection,
  Proposals,
} from "@/proposals/domain/proposal";

import { calendars } from "@/infrastructure/calendars";
import { createClient } from "@supabase/supabase-js";
import { createProposal } from "@/proposals/domain/proposal";
import dayjs from "dayjs";
import type { definitions } from "./types/supabase";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

type SupabaseProposal = definitions["proposals"];

const loadProposals = async (): Promise<ProposalCollection> => {
  const { data, error } = await supabase
    .from("proposals")
    .select()
    .gte("date", calendars.today().date);
  const supaProposal = data as SupabaseProposal[];
  return supaProposal.map<Proposal>((supaProposal) => {
    return {
      id: supaProposal.id,
      date: dayjs(supaProposal.date).toISOString(),
      slot: supaProposal.slot,
      user: supaProposal.user,
    } as Proposal;
  });
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
