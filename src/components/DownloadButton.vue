<template>
  <button
      @click="onDownloadClick"
      type="button"
      class="h-14 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Download image</button>
</template>

<script setup lang="ts">
import domtoimage from "dom-to-image";
import { saveAs } from 'file-saver';

const onDownloadClick = () => {
  const node = document.querySelector('#imageOutput') as HTMLElement;

  domtoimage
      .toPng(node)
      .then(function (dataUrl) {
        saveAs(dataUrl, 'poster-image.png');
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
}
</script>
