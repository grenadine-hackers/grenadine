<template>
  <h2>Mes disponibilités</h2>
  <ul>
    <li v-for="day in nextWeeks" :key="day.date" aria-label="date">
      {{ dayFormat(day) }}
      <AddProposal />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useNextWeeks } from "@/proposals/use-cases/useNextWeeks";
import { useDayFormat } from "@/proposals/use-cases/useDayFormat";
import AddProposal from "@/proposals/AddProposal.vue";

const { nextWeeks } = useNextWeeks();
const { dayFormat } = useDayFormat();
</script>
<style scoped></style>
