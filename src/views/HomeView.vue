<script setup lang="ts">
import NearProposals from "@/proposal/NearProposals.vue";
import { SlotType } from "@/proposal/domain/slot";
</script>

<template>
  <NearProposals :slot-type="SlotType.LUNCH" />
  <NearProposals :slot-type="SlotType.DINNER" />
</template>
