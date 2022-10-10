<template>
  <button @click="newProposal(lunch)">Midi</button>
  <button @click="newProposal(afterwork)">Afterwork</button>
</template>

<script setup lang="ts">
import type { Day } from "@/proposals/domain/day";
import { useAddProposal } from "@/proposals/use-cases/useAddProposal";
import { SlotType } from "@/proposals/domain/slot";
import { useCurrentUser } from "@/proposals/use-cases/useCurrentUser";
import { createProposal } from "@/proposals/domain/proposal";
import { useGetProposals } from "@/proposals/use-cases/useGetProposals";

const lunch = SlotType.LUNCH;
const afterwork = SlotType.DINNER;

const { addProposal } = useAddProposal();
const user = useCurrentUser();
const day = defineProps<{ day: Day }>();
const { proposals } = useGetProposals();

const newProposal = (slotType: SlotType) => {
  const proposal = createProposal({ slot: slotType, ...day }, user);
  addProposal(proposal);
};
</script>

<style scoped></style>
