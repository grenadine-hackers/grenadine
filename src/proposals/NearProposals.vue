<script setup lang="ts">
import { SlotType, isLunch, isDinner } from "@/proposals/domain/slot";
import { inject } from "vue";
import type { Calendars } from "@/proposals/domain/day";
import type {
  Proposal,
  ProposalRepository,
  Proposals,
} from "@/proposals/domain/proposal";
import { ProposalInMemoryRepository } from "@/infrastructure/proposalInMemoryRepository";
import dayjs from "dayjs";
import { calendar } from "@/infrastructure/calendars";
const calendars = inject<Calendars>("calendars", calendar);
const { getProposals } = inject<ProposalRepository>(
  "proposals",
  ProposalInMemoryRepository
);
const isOutdated = (proposal: Proposal): boolean =>
  dayjs(proposal.date).isSameOrAfter(calendars.today().date);

const proposals: Proposals = getProposals().filter(isOutdated);

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
