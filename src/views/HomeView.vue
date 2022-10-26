<script setup lang="ts">
import NearProposals from "@/proposals/NearProposals.vue";
import { SlotType } from "@/proposals/domain/slot";
import MyProposals from "@/proposals/MyProposals.vue";
import PageHeader from "@/components/PageHeader.vue";
import PageLayout from "@/components/PageLayout.vue";
</script>

<template>
  <PageLayout>
    <template v-slot:header>
      <PageHeader />
    </template>
    <div class="proposals">
      <div class="proposals__near">
        <NearProposals :slot-type="SlotType.LUNCH" />
        <NearProposals :slot-type="SlotType.DINNER" />
      </div>
      <div class="proposals__my">
        <MyProposals />
      </div>
    </div>
  </PageLayout>
</template>

<style lang="scss" scoped>
.proposals {
  display: flex;
  &__near,
  &__my {
    width: 50%;
    padding: var(--spacing-m);
  }
}
</style>
