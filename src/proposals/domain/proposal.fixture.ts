import type { ProposalCollection } from "./proposal";
import { createProposal } from "./proposal";
import { SlotType } from "./slot";
import { j3 } from "@/proposals/domain/day.fixture";
import { defaultUser } from "@/proposals/domain/user.fixture";

export const proposals: ProposalCollection = [
  createProposal({ slot: SlotType.DINNER, ...j3 }, defaultUser),
  createProposal({ slot: SlotType.DINNER, ...j3 }, defaultUser),
  createProposal({ slot: SlotType.DINNER, ...j3 }, defaultUser),
  createProposal({ slot: SlotType.LUNCH, ...j3 }, defaultUser),
  createProposal({ slot: SlotType.LUNCH, ...j3 }, defaultUser),
  createProposal({ slot: SlotType.LUNCH, ...j3 }, defaultUser),
];
