<template>
  <div>
    <label id="gradientChoose" class="block mb-2 text-lg font-medium">Gradient</label>

    <button
        id="gradientChoose"
        data-dropdown-toggle="dropdown"
        class="block min-w-[150px] w-full h-14 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="button"
        :style="`background: ${appStore.gradient}`"
    />
    <!-- Dropdown menu -->
    <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 flex flex-col p-2 aspect-video gap-y-1">
      <div v-for="gradient in GRADIENTS" :style="`background: ${gradient}`" class="w-auto h-10 cursor-pointer rounded-md" @click="onSelectGradient(gradient)" />
    </div>
  </div>
</template>


<script setup lang="ts">
import {GRADIENTS, POSSIBLE_GRADIENTS} from "@/services/GradientSelectionService";
import {useAppStore} from "@/stores/app";

const appStore = useAppStore();

const onSelectGradient = (gradient: POSSIBLE_GRADIENTS) => {
  appStore.gradient = gradient;
}
</script>
