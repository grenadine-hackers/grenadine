<script setup lang="ts">
import NearProposals from "@/proposals/NearProposals.vue";
import { SlotType } from "@/proposals/domain/slot";
import MyProposals from "@/proposals/MyProposals.vue";
</script>

<template>
  <h1><img src="grenadine.svg" height="48" width="48" /> Grenadine</h1>
  <NearProposals :slot-type="SlotType.LUNCH" />
  <NearProposals :slot-type="SlotType.DINNER" />
  <MyProposals />
</template>
