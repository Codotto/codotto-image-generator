<template>
  <div>
    <label :for="labelId" class="block mb-2 text-lg font-medium">{{ label }}</label>
    <select
        id="position"
        class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        @change="onPositionChange">
      <option
          v-for="option in options"
          :value="option.value"
          :selected="isSelected(option)"
      >{{ option.label }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import {PropType} from "vue";
import {SelectOption} from "@/components/base/types";

const isSelected = (option: SelectOption) => {
  if (props.value) {
    return props.value.value === option.value;
  }

  return false;
}

const props = defineProps({
  value: { type: Object as PropType<SelectOption | null>, required: true },
  options: {type: Array as PropType<SelectOption[]>, required: true},
  label: {type: String, required: true},
  labelId: {type: String, default: () => Math.random().toString()}
})

const emit = defineEmits([
  'change',
])

const onPositionChange = (value: Event) => {
  // @ts-ignore
  const option = props.options.find(option => option.value === value.target?.value);

  emit('change', option);
}
</script>
