<script setup lang="ts">
import { SlotType, isLunch, isDinner } from "@/proposal/domain/slot";

defineProps<{ slotType: SlotType }>();
</script>

<template>
  <div>
    <h1 v-if="isLunch">Prochain midi</h1>
    <h1 v-if="isDinner">Prochain afterwork</h1>
  </div>
</template>
