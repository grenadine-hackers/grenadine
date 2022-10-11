<script setup lang="ts">
import { isDinner, isLunch, SlotType } from "@/proposals/domain/slot";
import { useDayFormat } from "@/proposals/use-cases/useDayFormat";
import { useProposalStore } from "@/stores/ProposalStore";
import { computed } from "vue";

const props = defineProps<{ slotType: SlotType }>();

const { dayFormat } = useDayFormat();
const proposalStore = useProposalStore();

const votes = computed(() =>
  isLunch(props.slotType) ? proposalStore.nextLunch : proposalStore.nextDinner
);

const displayVote = (voteCount: number) =>
  voteCount > 1 ? `${voteCount} votes` : `1 vote`;
</script>

<template>
  <div>
    <h1 v-if="isLunch(slotType)">Prochain midi</h1>
    <h1 v-if="isDinner(slotType)">Prochain afterwork</h1>

    <div v-if="votes.length === 0">
      <strong v-if="isLunch(slotType)">Aucun midi disponible</strong>
      <strong v-if="isDinner(slotType)">Aucun afterwork disponible</strong>
    </div>
    <ol v-else>
      <li v-for="vote in votes" :key="vote.date" aria-label="available date">
        {{ dayFormat(vote) }}
        ({{ displayVote(vote.vote) }})
      </li>
    </ol>
  </div>
</template>
