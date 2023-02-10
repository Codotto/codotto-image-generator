import {SelectOption} from "@/components/base/types";

export const BLEND_MODE = {
  NORMAL: 'normal',
  EXCLUSION: 'exclusion',
  HARD_LIGHT: 'hard-light',
  DIFFERENCE: 'difference',
} as const;


export type POSSIBLE_BLEND_MODES = typeof BLEND_MODE[keyof typeof BLEND_MODE];

export const BlendModeOptions: SelectOption<POSSIBLE_BLEND_MODES>[] = [
  { value: BLEND_MODE.NORMAL, label: 'Normal' },
  { value: BLEND_MODE.EXCLUSION, label: 'Exclusion' },
  { value: BLEND_MODE.HARD_LIGHT, label: 'Hardlight' },
  { value: BLEND_MODE.DIFFERENCE, label: 'Difference' },
];
