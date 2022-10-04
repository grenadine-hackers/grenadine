import type { ProposalCollection } from "./proposal";
import { createProposal } from "./proposal";
import { SlotType } from "./slot";
import { j2 } from "./day.fixture";

export const proposals: ProposalCollection = [
  createProposal({ slot: SlotType.DINNER, ...j2 }),
  createProposal({ slot: SlotType.DINNER, ...j2 }),
  createProposal({ slot: SlotType.LUNCH, ...j2 }),
  createProposal({ slot: SlotType.LUNCH, ...j2 }),
  createProposal({ slot: SlotType.LUNCH, ...j2 }),
];
