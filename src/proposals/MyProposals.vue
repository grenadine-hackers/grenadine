<template>
  <h2>Mes prochaines disponibilités</h2>
  <ul class="myProposals">
    <template v-for="day in nextWeeks" :key="day.date">
      <li v-if="isOtherWeek(day)" class="weekSeparator">{{ weekLabel() }}</li>
      <li
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
    </template>
  </ul>
</template>

<script setup lang="ts">
import { dinner, lunch } from "@/proposals/domain/slot";
import { useNextWeeks } from "@/proposals/use-cases/useNextWeeks";
import { useDayFormat } from "@/proposals/use-cases/useDayFormat";
import AddProposal from "@/proposals/AddProposal.vue";
import { useMyProposals } from "./use-cases/useMyProposals";
import dayjs from "dayjs";
import type { Day } from "@/proposals/domain/day";
import { useToday } from "@/proposals/use-cases/useToday";

const { nextWeeks } = useNextWeeks();
const { dayFormat } = useDayFormat();
const { myProposal } = useMyProposals();
const today = useToday();

let week = 0;

const isOtherWeek = (day: Day): boolean => {
  const weekDiff = dayjs(day.date).week() - dayjs(today().date).week();

  const sameWeek = weekDiff === week;
  if (!sameWeek) {
    week = weekDiff;
  }

  return !sameWeek;
};

const weekLabel = () => {
  const weekLabels = [
    "cette semaine",
    "semaine prochaine",
    "dans 2 semaines",
    "dans 3 semaines",
    "dans 4 semaines",
  ];
  return weekLabels[week] ?? weekLabels[0];
};
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

.weekSeparator {
  text-align: center;
  padding: var(--spacing-m);
  text-transform: capitalize;
  &::marker {
    content: "";
  }
}
</style>
