<template>
  <h2>Prochaines dates</h2>
  <ul>
    <li v-for="day in nextWeeks" :key="day.date" aria-label="date">
      {{ dayFormat(day) }}
      <AddProposal :day="day" :slot-type="lunch" :my-proposal="myProposal(lunch, day)" />
      <AddProposal :day="day" :slot-type="dinner" :my-proposal="myProposal(dinner, day)" />
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

<style scoped>

</style>
