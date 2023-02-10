<template>
  <div>
    <CSelect
        label="Blend mode"
        :options="BlendModeOptions"
        :value="selectedBlendMode"
        @change="onSelectBlendMode"
    />
  </div>
</template>
<script setup lang="ts">
import CSelect from "@/components/base/CSelect.vue";
import {BlendModeOptions, POSSIBLE_BLEND_MODES} from "@/services/BlendModdeService";
import {computed} from "vue";
import {useAppStore} from "@/stores/app";
import {SelectOption} from "@/components/base/types";

const appStore = useAppStore();

const selectedBlendMode = computed(() => BlendModeOptions.find(bm => bm.value === appStore.blendMode));

const onSelectBlendMode = (option: SelectOption<POSSIBLE_BLEND_MODES>) => {
  appStore.blendMode = option.value;
}
</script>
