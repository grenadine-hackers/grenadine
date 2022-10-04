<template>
  <ul>
    <li v-for="day in nextWeeks" :key="day.date" aria-label="date">
      {{ day.date }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useNextWeeks } from "@/proposals/use-cases/useNextWeeks";

const { nextWeeks } = useNextWeeks();
</script>
<style scoped></style>
