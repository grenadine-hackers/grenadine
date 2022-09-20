import type { Proposals } from './proposal';
import { createProposal } from './proposal';
import { SlotType } from './slot';

export const proposals: Proposals = [
  createProposal({ slot: SlotType.DINNER, date: '2022-09-28T00:00:00Z ' }),
  createProposal({ slot: SlotType.DINNER, date: '2022-09-28T00:00:00Z ' }),
  createProposal({ slot: SlotType.DINNER, date: '2022-09-28T00:00:00Z ' }),
  createProposal({ slot: SlotType.LUNCH, date: '2022-09-28T00:00:00Z ' }),
  createProposal({ slot: SlotType.LUNCH, date: '2022-09-28T00:00:00Z ' }),
  createProposal({ slot: SlotType.DINNER, date: '2022-09-23T00:00:00Z ' }),
  createProposal({ slot: SlotType.LUNCH, date: '2022-09-23T00:00:00Z ' }),
  createProposal({ slot: SlotType.DINNER, date: '2022-09-28T00:00:00Z ' }),
];
