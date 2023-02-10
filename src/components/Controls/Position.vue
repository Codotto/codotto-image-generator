<template>
  <div>
    <CSelect
        label="Position"
        :value="selectedPosition"
        :options="PositionOptions"
        @change="onPositionChange"
    />
  </div>
</template>


<script setup lang="ts">
import {PositionOptions, POSSIBLE_POSITIONS} from "@/services/PositionService";
import CSelect from "@/components/base/CSelect.vue";
import {useAppStore} from "@/stores/app";
import {SelectOption} from "@/components/base/types";
import {computed} from "vue";

const appStore = useAppStore();

const onPositionChange = (option: SelectOption<POSSIBLE_POSITIONS>) => {
  appStore.position = option.value;
}

const selectedPosition = computed(() => PositionOptions.find(p => p.value === appStore.position))
</script>
