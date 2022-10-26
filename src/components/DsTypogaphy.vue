<script setup lang="ts">
type InlineTag =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "span"
  | "p"
  | "strong";
type Size = "xs" | "s" | "m" | "l" | "xl" | "4xl";
type Color = "primary" | "secondary";
type Weight = "bold" | "normal" | "light";

defineProps<{ tag?: InlineTag; size: Size; color?: Color; weight?: Weight }>();
</script>

<template>
  <component
    :is="tag ?? 'span'"
    class="typo"
    :class="`typo--size-${size} typo--color-${
      color ?? 'primary'
    } typo--weight-${weight ?? 'normal'}`"
  >
    <slot></slot>
  </component>
</template>

<style scoped lang="scss">
.typo {
  font-weight: normal;
  line-height: 125%;
  margin: 0 0 0.5rem;

  &:last-child {
    margin: 0;
  }
  &--size-xs {
    font-size: 0.8125rem;
    letter-spacing: -0.2px;
  }
  &--size-s {
    font-size: 0.9375rem;
    letter-spacing: -0.2px;
  }
  &--size-m {
    font-size: 1rem;
    letter-spacing: -0.2px;
  }
  &--size-l {
    font-size: 2rem;
    letter-spacing: -0.2px;
  }
  &--size-xl {
    font-size: 2.875rem;
    line-height: 105%;
  }
  &--size-4xl {
    font-size: 3.25rem;
    line-height: 105%;
  }
  &--weight-normal {
    font-weight: normal;
  }
  &--weight-bold {
    font-weight: bold;
  }
  &--weight-light {
    font-weight: 300;
  }
  &--color-primary {
    color: var(--primary-font-color);
  }
}
</style>
