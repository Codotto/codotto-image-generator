<template>
  <canvas
      class="bg-white m-5 mx-auto rounded-lg"
      ref="canva"
      :width="canvaWidth"
      :height="canvaHeight"
  />
</template>

<script setup lang="ts">
import {useAppStore} from "@/stores/app";
import {computed, onBeforeMount, onMounted, ref, watch} from "vue";
import {translatePossiblePosition} from "@/services/PositionService";
import {fillText, paintGradient} from "@/services/CanvaService";

const appStore = useAppStore()

const canva = ref<HTMLCanvasElement>();
const canvaWidth = ref(0);
const canvaHeight = ref(0);

onBeforeMount(() => {
  const width = window.innerWidth - 200;
  canvaWidth.value = width;
  canvaHeight.value = (width * 9) / 16;
});

onMounted(() => paintGradient(
    canva.value!,
    appStore.gradient,
    canvaWidth.value,
    canvaHeight.value,
))

watch(() => appStore.gradient, (newGradient) => paintGradient(
    canva.value!,
    newGradient,
    canvaWidth.value,
    canvaHeight.value,
));

watch(() => appStore.postTitle, (title) => fillText(
    canva.value!,
    title,
    canvaWidth.value,
    canvaHeight.value,
))

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
