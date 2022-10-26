<template>
  <DsCheckboxButton
    :id="checkboxId"
    @change="checkProposal()"
    :checked="!!myProposal"
    >{{ label }}</DsCheckboxButton
  >
</template>

<script setup lang="ts">
import type { Day } from "@/proposals/domain/day";
import { useAddProposal } from "@/proposals/use-cases/useAddProposal";
import { useDeleteProposal } from "@/proposals/use-cases/useDeleteProposal";
import { isLunch, SlotType } from "@/proposals/domain/slot";
import { useCurrentUser } from "@/proposals/use-cases/useCurrentUser";
import { createProposal, type Proposal } from "@/proposals/domain/proposal";
import { computed } from "vue";
import DsCheckboxButton from "@/components/DsCheckboxButton.vue";

const { addProposal } = useAddProposal();
const { deleteProposal } = useDeleteProposal();
const user = useCurrentUser();
const props = defineProps<{
  day: Day;
  slotType: SlotType;
  myProposal?: Proposal;
}>();

const checkProposal = () => {
  const proposal = createProposal({ slot: props.slotType, ...props.day }, user);
  props.myProposal ? deleteProposal(props.myProposal) : addProposal(proposal);
};

const label = computed((): string =>
  isLunch(props.slotType) ? "Midi" : "Afterwork"
);

const checkboxId = computed((): string => `${props.day.date}-${label.value}`);
</script>

<style scoped></style>
