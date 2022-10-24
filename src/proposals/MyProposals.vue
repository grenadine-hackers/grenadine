<template>
  <h2>Mes disponibilités</h2>
  <ul>
    <li v-for="day in nextWeeks" :key="day.date" aria-label="date">
      {{ dayFormat(day) }}
      <AddProposal :day="day" :slot-type="lunch" :is-selected="isSelected(lunch, day)" />
      <AddProposal :day="day" :slot-type="dinner" :is-selected="isSelected(dinner, day)" />
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
const { isSelected } = useMyProposals();

</script>

<style scoped>

</style>
