<script setup lang="ts">
defineProps<{
  type: "submit" | "button";
}>();
</script>

<template>
  <button :type="type" class="button">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button {
  background: var(--colors-red-3);
  border-radius: var(--spacing-l);
  border: none;
  padding: var(--spacing-xs) var(--spacing-l);
  &:hover {
    background: var(--colors-red-4);
  }
}
</style>
