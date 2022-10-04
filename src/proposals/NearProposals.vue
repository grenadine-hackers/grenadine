<script setup lang="ts">
import { SlotType, isLunch, isDinner } from "@/proposals/domain/slot";
import { useNearProposals } from "@/proposals/use-cases/useNearProposals";

const { proposals } = useNearProposals();

defineProps<{ slotType: SlotType }>();
</script>

<template>
  <div>
    <h1 v-if="isLunch(slotType)">Prochain midi</h1>
    <h1 v-if="isDinner(slotType)">Prochain afterwork</h1>

    <strong v-if="isLunch(slotType)">Aucun midi disponible</strong>
    <strong v-if="isDinner(slotType)">Aucun afterwork disponible</strong>
    <article v-for="proposal in proposals" :key="proposal.id">
      {{ proposal.date }}
    </article>
  </div>
</template>
