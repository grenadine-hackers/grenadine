<template>
  <span>{{ user.id }}</span>
</template>

<script setup lang="ts">
import { useCurrentUser } from "@/proposals/use-cases/useCurrentUser";

const user = useCurrentUser();
</script>

<style scoped></style>
