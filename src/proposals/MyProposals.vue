<template>
  <h2>Mes disponibilités</h2>
  <ul>
    <li v-for="day in nextWeeks" :key="day.date" aria-label="date">
      {{ dayFormat(day) }}
      <AddProposal :day="day" :slot-type="lunch" />
      <AddProposal :day="day" :slot-type="dinner" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { lunch, dinner } from "@/proposals/domain/slot";
import { useNextWeeks } from "@/proposals/use-cases/useNextWeeks";
import { useDayFormat } from "@/proposals/use-cases/useDayFormat";
import AddProposal from "@/proposals/AddProposal.vue";

const { nextWeeks } = useNextWeeks();
const { dayFormat } = useDayFormat();
</script>
<style scoped></style>
