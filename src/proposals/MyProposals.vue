<template>
  <h2>Mes prochaines disponibilités</h2>
  <ul class="myProposals">
    <li
      v-for="day in nextWeeks"
      :key="day.date"
      aria-label="date"
      :class="`dateProposal ${
        myProposal(lunch, day) || myProposal(dinner, day)
          ? 'dateProposal--selected'
          : ''
      }`"
    >
      <span>{{ dayFormat(day) }}</span>
      <div class="action">
        <AddProposal
          :day="day"
          :slot-type="lunch"
          :my-proposal="myProposal(lunch, day)"
        />
        <AddProposal
          :day="day"
          :slot-type="dinner"
          :my-proposal="myProposal(dinner, day)"
        />
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { lunch, dinner } from "@/proposals/domain/slot";
import { useNextWeeks } from "@/proposals/use-cases/useNextWeeks";
import { useDayFormat } from "@/proposals/use-cases/useDayFormat";
import AddProposal from "@/proposals/AddProposal.vue";
import { useMyProposals } from "./use-cases/useMyProposals";

const { nextWeeks } = useNextWeeks();
const { dayFormat } = useDayFormat();
const { myProposal } = useMyProposals();
</script>

<style scoped lang="scss">
.myProposals {
  padding-left: var(--spacing-m);
  margin: 0;
  border-left: 4px solid var(--dark-chocolate);
}
.dateProposal {
  position: relative;
  text-transform: capitalize;
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: calc((var(--spacing-m) * -1.5) - 2px);
    width: var(--spacing-m);
    height: var(--spacing-m);
    background: var(--dark-chocolate);
    border-radius: var(--spacing-m);
    transition: background-color 0.5s ease;
  }
  display: flex;
  background: var(--dark-chocolate);
  padding: var(--spacing-s);
  margin-bottom: var(--spacing-s);
  border-radius: var(--spacing-s);
  width: auto;
  align-items: center;
  justify-content: space-between;
  &--selected {
    &::before {
      background: var(--grenadine);
    }
  }
}
</style>
