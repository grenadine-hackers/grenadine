<script setup lang="ts">
import { SlotType, isLunch, isDinner } from "@/proposal/domain/slot";

defineProps<{ slotType: SlotType }>();
</script>

<template>
  <article>
    <h1 v-if="isLunch(slotType)">Prochain midi</h1>
    <h1 v-if="isDinner(slotType)">Prochain afterwork</h1>

    <strong v-if="isLunch(slotType)">Aucun midi disponible</strong>
    <strong v-if="isDinner(slotType)">Aucun afterwork disponible</strong>
  </article>
</template>
