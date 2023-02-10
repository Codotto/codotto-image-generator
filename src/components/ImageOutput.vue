<template>
  <div class="image-output aspect-video max-h-[800px] mx-auto" id="imageOutput" :key="appStore.svg.feTurbulence.baseFrequency">
    <svg width="0" height="0">
      <filter id="grainy" x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" :baseFrequency="appStore.svg.feTurbulence.baseFrequency"></feTurbulence>
        <feColorMatrix type="saturate" values="0"></feColorMatrix>
        <feBlend in="SourceGraphic" mode="multiply"></feBlend>
      </filter>
    </svg>
    <div class="image-output__img-container shadow-2xl rounded-lg overflow-hidden" :style="imageContainerStyles">
      <div class="image-output__title" :style="titleStyles">{{appStore.postTitle}}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useAppStore} from "@/stores/app";
import {computed} from "vue";
import {translatePossiblePosition} from "@/services/PositionService";

const appStore = useAppStore()

const imageContainerStyles = computed(() => ({
  background: appStore.gradient,
  height: '100%',
}))

const titleStyles = computed(() => ({
  fontSize: `${appStore.fontSizeInt}px`,
  position: 'absolute',
  fontWeight: '700',
  mixBlendMode: appStore.blendMode,
  backgroundColor: 'transparent',
  height: 'auto',
  width: '100%',
  'z-index': 2,
  ...translatePossiblePosition(appStore.position)
}))

</script>

<style scoped>
svg { position: absolute }

.image-output__img-container {
  position: relative;
}

.image-output__img-container::before {
  position: absolute;
  inset: 0;
  height: 100%;
  z-index: 1;
  filter: url(#grainy);
  content: ''
}

.image-output__title:focus-visible {
  outline: none;
}
</style>
