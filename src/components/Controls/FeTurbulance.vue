<template>
  <div>
    <CSelect
        label="Noise"
        :value="selectedTurbulance"
        :options="TurbulanceOptions"
        @change="onSelectOption"
    />
  </div>
</template>

<script setup lang="ts">

import {useAppStore} from "@/stores/app";
import {
  FE_TURBULANCE,
  POSSIBLE_FE_TURBULANCE,
  translateFeTurbulanceFromNumberToOption,
  translateFeTurbulanceFromOptionToNumber,
  TurbulanceOptions
} from "@/services/SVGService";
import CSelect from "@/components/base/CSelect.vue";
import {SelectOption} from "@/components/base/types";
import {computed} from "vue";

const appStore = useAppStore();

const onSelectOption = (option: SelectOption<POSSIBLE_FE_TURBULANCE>) => {
  appStore.svg.feTurbulence.baseFrequency = translateFeTurbulanceFromOptionToNumber(option.value);
}

const selectedTurbulance = computed(() => {
  const turbulanceNumber = translateFeTurbulanceFromNumberToOption(appStore.svg.feTurbulence.baseFrequency);

  return TurbulanceOptions.find(t => t.value === turbulanceNumber);
})

</script>
