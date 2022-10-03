<script setup lang="ts">
import { SlotType, isLunch, isDinner } from "@/proposal/domain/slot";
import { inject } from "vue";
import type { Calendars } from "@/proposal/domain/day";
import type { ProposalRepository, Proposals } from "@/proposal/domain/proposal";
import { ProposalInMemoryRepository } from "@/infrastructure/proposalInMemoryRepository";
import dayjs from "dayjs";
import { calendar } from "@/infrastructure/calendars";
const calendars = inject<Calendars>("calendars", calendar);
const { getNearestProposals } = inject<ProposalRepository>(
  "proposals",
  ProposalInMemoryRepository
);
const proposals: Proposals = getNearestProposals().filter((proposal) =>
  dayjs(proposal.date).isSameOrAfter(calendars.today().date)
);

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
