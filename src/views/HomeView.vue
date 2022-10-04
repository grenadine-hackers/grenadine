<script setup lang="ts">
import NearProposals from "@/proposals/NearProposals.vue";
import { SlotType } from "@/proposals/domain/slot";
import FillProposals from "@/proposals/FillProposals.vue";
</script>

<template>
  <h1>Grenadine</h1>
  <NearProposals :slot-type="SlotType.LUNCH" />
  <NearProposals :slot-type="SlotType.DINNER" />
  <button>Add my availabilities</button>
  <FillProposals />
</template>
