<template>
  <div class="bg-slate-800 py-5 flex-col md:flex-row flex flex-wrap justify-between md:items-end gap-5">
    <div class="flex flex-col md:flex-row flex-wrap gap-5">
      <Title/>
      <FontSizeControl/>
      <FeTurbulance/>
      <Position/>
      <BlendMode/>
      <GradientSelection/>
    </div>
    <DownloadButton/>
  </div>
</template>

<script setup lang="ts">
import FontSizeControl from "./FontSizeControl.vue";
import FeTurbulance from "@/components/Controls/FeTurbulance.vue";
import Position from "@/components/Controls/Position.vue";
import Title from "@/components/Controls/Title.vue";
import BlendMode from "@/components/Controls/BlendMode.vue";
import GradientSelection from "@/components/Controls/GradientSelection.vue";
import DownloadButton from "@/components/DownloadButton.vue";
</script>
