<template>
  <div>
    <label for="postTitle" class="block mb-2 text-lg font-medium">Post title</label>
    <input
        type="text"
        id="postTitle"
        v-model="appStore.postTitle"
        class="block w-full p-3.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
  </div>
</template>

<script setup lang="ts">
import {useAppStore} from "@/stores/app";

const appStore = useAppStore();

const onInput = (event: InputEvent) => {
  // @ts-ignore
  appStore.postTitle = event.target?.value ?? "";
}
</script>
