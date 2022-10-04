<script setup lang="ts">
import NearProposals from "@/proposals/NearProposals.vue";
import { SlotType } from "@/proposals/domain/slot";
</script>

<template>
  <NearProposals :slot-type="SlotType.LUNCH" />
  <NearProposals :slot-type="SlotType.DINNER" />
</template>
