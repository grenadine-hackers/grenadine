<template>
  <input type="checkbox" :name="checkboxId" :id="checkboxId" @change="newProposal()" :checked="isSelected"
    :aria-checked="isSelected" />
  <label :for="checkboxId">{{ label }}</label>
</template>

<script setup lang="ts">
import type { Day } from "@/proposals/domain/day";
import { useAddProposal } from "@/proposals/use-cases/useAddProposal";
import { isLunch, SlotType } from "@/proposals/domain/slot";
import { useCurrentUser } from "@/proposals/use-cases/useCurrentUser";
import { createProposal } from "@/proposals/domain/proposal";
import { computed } from "vue";

const { addProposal } = useAddProposal();
const user = useCurrentUser();
const props = defineProps<{
  day: Day;
  slotType: SlotType;
  isSelected: boolean;
}>();

const newProposal = () => {
  const proposal = createProposal({ slot: props.slotType, ...props.day }, user);
  addProposal(proposal);
};

const label = computed((): string =>
  isLunch(props.slotType) ? "Midi" : "Afterwork"
);

const checkboxId = computed((): string => `${props.day.date}-${label.value}`);
</script>

<style scoped>

</style>
