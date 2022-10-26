<script setup lang="ts"></script>

<template>
  <div class="layout">
    <header class="layout__header"><slot name="header"></slot></header>
    <main class="layout__main"><slot></slot></main>
  </div>
</template>

<style scoped lang="scss">
.layout {
  min-height: 100vh;
  &__header {
    display: flex;
    padding: var(--spacing-m);
    align-items: center;
    border-bottom: 2px solid var(--dark-chocolate);
  }
}
</style>
