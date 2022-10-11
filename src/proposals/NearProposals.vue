<script setup lang="ts">
import { isDinner, isLunch, SlotType } from "@/proposals/domain/slot";
import { useDayFormat } from "@/proposals/use-cases/useDayFormat";
import { useProposalStore } from "@/stores/ProposalStore";
import { computed } from "vue";

const props = defineProps<{ slotType: SlotType }>();

const { dayFormat } = useDayFormat();
const proposalStore = useProposalStore();

const days = computed(() =>
  isLunch(props.slotType) ? proposalStore.nextLunch : proposalStore.nextDinner
);
</script>

<template>
  <div>
    <h1 v-if="isLunch(slotType)">Prochain midi</h1>
    <h1 v-if="isDinner(slotType)">Prochain afterwork</h1>

    <div v-if="days.length === 0">
      <strong v-if="isLunch(slotType)">Aucun midi disponible</strong>
      <strong v-if="isDinner(slotType)">Aucun afterwork disponible</strong>
    </div>
    <ul v-else>
      <li v-for="day in days" :key="day.date" aria-label="available date">
        {{ dayFormat(day) }}
      </li>
    </ul>
  </div>
</template>
