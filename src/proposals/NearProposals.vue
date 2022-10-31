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
    <ol v-else class="nearProposal__result">
      <li
        v-for="(vote, index) in votes"
        :key="vote.date"
        :class="`proposalResult proposalResult--${index}`"
        aria-label="available date"
      >
        <span :class="`medal medal--${index + 1}`">{{ index + 1 }}</span>
        {{ dayFormat(vote) }}
        ({{ displayVote(vote.vote) }})
      </li>
    </ol>
  </div>
</template>

<style lang="scss" scoped>
.nearProposal {
  margin-bottom: var(--spacing-l);
  &__result {
    padding: 0;
    display: flex;
    gap: var(--spacing-m);

    flex-wrap: nowrap;
  }
  .proposalResult {
    color: var(--gold);
    text-transform: capitalize;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;

    &::marker {
      display: none;
    }
    &:nth-child(2n) {
      color: var(--silver);
    }
    &:nth-child(3n) {
      color: var(--bronze);
    }
  }
  .medal {
    display: inline-block;
    width: var(--spacing-s);
    height: var(--spacing-s);
    text-align: center;
    padding: var(--spacing-xs);
    border-radius: var(--spacing-m);
    font-style: italic;
    font-size: var(--spacing-s);
    font-weight: 400;
    margin: var(--spacing-m);
    &--1 {
      background-color: var(--gold);
      color: var(--chocolate);
    }
    &--2 {
      background-color: var(--silver-medal);
      color: var(--silver);
    }
    &--3 {
      background-color: var(--bronze-medal);
      color: var(--bronze);
    }
  }
}
</style>
