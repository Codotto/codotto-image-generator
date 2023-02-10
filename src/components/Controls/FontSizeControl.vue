<template>
  <div>
    <CSelect
        label="Font size"
        :value="selectedFont"
        :options="FontOptions"
        @change="onSelectOption"
    />
  </div>
</template>

<script setup lang="ts">
import {FONT_SIZES, FontOptions, POSSIBLE_FONT_SIZES} from "@/services/FontService";
import {useAppStore} from "@/stores/app";
import CSelect from "@/components/base/CSelect.vue";
import {SelectOption} from "@/components/base/types";
import {computed} from "vue";

const appStore = useAppStore()

const onSelectOption = (option: SelectOption<POSSIBLE_FONT_SIZES>) => {
  appStore.fontSize = option.value;
}

const selectedFont = computed(() => FontOptions.find(f => f.value === appStore.fontSize));
</script>
