<template>
  <button @click="newProposal(lunch)">Midi</button>
  <button @click="newProposal(dinner)">Afterwork</button>
</template>

<script setup lang="ts">
import type { Day } from "@/proposals/domain/day";
import { useAddProposal } from "@/proposals/use-cases/useAddProposal";
import { SlotType, lunch, dinner } from "@/proposals/domain/slot";
import { useCurrentUser } from "@/proposals/use-cases/useCurrentUser";
import { createProposal } from "@/proposals/domain/proposal";

const { addProposal } = useAddProposal();
const user = useCurrentUser();
const props = defineProps<{ day: Day }>();

const newProposal = (slotType: SlotType) => {
  const proposal = createProposal({ slot: slotType, ...props.day }, user);
  addProposal(proposal);
};
</script>

<style scoped></style>
