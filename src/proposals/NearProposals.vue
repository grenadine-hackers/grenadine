<script setup lang="ts">
import { SlotType, isLunch, isDinner } from "@/proposals/domain/slot";
import { useNextMeetDays } from "@/proposals/use-cases/useNextMeetDays";
import { useDayFormat } from "@/proposals/use-cases/useDayFormat";

const props = defineProps<{ slotType: SlotType }>();
const { days } = useNextMeetDays(props.slotType);
const { dayFormat } = useDayFormat();
</script>

<template>
  <div>
    <h1 v-if="isLunch(slotType)">Prochain midi</h1>
    <h1 v-if="isDinner(slotType)">Prochain afterwork</h1>

    <div v-if="days.length === 0">
      <strong v-if="isLunch(slotType)">Aucun midi disponible</strong>
      <strong v-if="isDinner(slotType)">Aucun afterwork disponible</strong>
    </div>
    <ul v-else>
      <li v-for="day in days" :key="day.date" aria-label="available date">
        {{ dayFormat(day) }}
      </li>
    </ul>
  </div>
</template>
