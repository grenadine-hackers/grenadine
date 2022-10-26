<script setup lang="ts">
import { isDinner, isLunch, SlotType } from "@/proposals/domain/slot";
import { useDayFormat } from "@/proposals/use-cases/useDayFormat";
import { useProposalStore } from "@/stores/ProposalStore";
import { computed } from "vue";
import { useToday } from "@/proposals/use-cases/useToday";
import DsTypogaphy from "@/components/DsTypogaphy.vue";

const props = defineProps<{ slotType: SlotType }>();

const today = useToday();
const { dayFormat } = useDayFormat();
const proposalStore = useProposalStore();

const votes = computed(() =>
  isLunch(props.slotType)
    ? proposalStore.nextLunch(today())
    : proposalStore.nextDinner(today())
);

const displayVote = (voteCount: number) =>
  voteCount > 1 ? `${voteCount} votes` : `1 vote`;
</script>

<template>
  <div class="nearProposal">
    <DsTypogaphy tag="h2" size="l" weight="light" v-if="isLunch(slotType)">
      Prochain midi
    </DsTypogaphy>

    <DsTypogaphy tag="h2" size="l" weight="light" v-if="isDinner(slotType)">
      Prochain afterwork
    </DsTypogaphy>

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

<style lang="scss" scoped>
.nearProposal {
  margin-bottom: var(--spacing-l);
}
</style>
