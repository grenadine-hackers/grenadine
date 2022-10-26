<template>
  <span class="checkoxButton">
    <input
      class="checkoxButton__checkbox"
      type="checkbox"
      :name="id"
      :id="id"
      @change="change"
      :checked="!!checked"
      :aria-checked="!!checked"
    />
    <label class="checkoxButton__label" :for="id"><slot></slot></label>
  </span>
</template>

<script lang="ts" setup>
defineProps<{ id: string; checked: boolean }>();
const emit = defineEmits(["change"]);

const change = (evt: Event) => {
  emit("change", (evt.target as HTMLInputElement).value);
};
</script>

<style scoped lang="scss">
//✓
.checkoxButton {
  &__checkbox {
    display: none;
  }
  &__label {
    background: var(grenadine);
    display: inline-block;
    padding: var(--spacing-xs) var(--spacing-s);
    border-radius: var(--spacing-l);
    transition: all ease 0.5s;
    cursor: pointer;
    border: 2px solid var(--grenadine);
    background: var(--grenadine);
    &::before {
      content: "";
      margin-right: var(--spacing-xs);
    }
  }
  &__checkbox:checked + &__label {
    &::before {
      content: "✓";
      color: var(--grenadine);
    }
    background: var(--light-grenadine);
    color: var(--chocolate);
  }
}
</style>
