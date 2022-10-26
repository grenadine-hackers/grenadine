<script setup lang="ts">
defineProps<{
  modelValue: string | number;
  type?: "text" | "number";
  max?: number;
  min?: number;
  id: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const updateValue = (evt: Event) => {
  emit("update:modelValue", (evt.target as HTMLInputElement).value);
};
</script>
<template>
  <fieldset
    class="formField"
    :class="{
      'formField--number': type === 'number',
      'formField--text': type === 'text',
    }"
  >
    <label class="formField__label" :for="id">
      <slot></slot>
    </label>
    <input
      :type="type ?? 'text'"
      :value="modelValue"
      @input="updateValue"
      :max="max"
      :min="min"
      :id="id"
    />
    <slot name="after" />
  </fieldset>
</template>

<style lang="scss">
.formField {
  display: flex;
  vertical-align: baseline;
  border: var(--border-light-gray);
  background: white;
  border-radius: var(--spacing-l);
  width: 100%;
  justify-content: space-between;
  padding: 3px 15px 3px 3px;
  margin-bottom: var(--spacing-s);

  input {
    border: none;
    font-family: var(--joy-font-family);
    padding: 0 0 0 1em;
    width: 100%;

    &:focus {
      border: none;
      outline: none;
    }
  }
  &--text {
    padding: var(--spacing-m);
  }
  &--number {
    border: var(--border-light-blue);

    .formField__label {
      background: var(--colors-blue-1);
      border-radius: var(--spacing-m);
      padding: 8px;
    }

    input {
      padding: 0;
      width: auto;
    }
  }
}
</style>
