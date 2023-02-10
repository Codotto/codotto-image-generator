import {SelectOption} from "@/components/base/types";

export const FE_TURBULANCE = {
  NONE: 'none',
  OKISH: 'okish',
  MIDDLE: 'middle',
  CHAOTIC: 'chaotic'
} as const;

export type POSSIBLE_FE_TURBULANCE = typeof FE_TURBULANCE[keyof typeof FE_TURBULANCE]

export const TurbulanceOptions: SelectOption<POSSIBLE_FE_TURBULANCE>[] = [
  { value: FE_TURBULANCE.NONE, label: 'None' },
  { value: FE_TURBULANCE.OKISH, label: 'Little' },
  { value: FE_TURBULANCE.MIDDLE, label: 'Lots' },
  { value: FE_TURBULANCE.CHAOTIC, label: 'Lots lots' },
]

export function translateFeTurbulanceFromOptionToNumber(turbulance: POSSIBLE_FE_TURBULANCE) {
  switch (turbulance) {
    case FE_TURBULANCE.OKISH:
      return 0.8;
    case FE_TURBULANCE.MIDDLE:
      return 0.5;
    case FE_TURBULANCE.CHAOTIC:
      return 0.4;
    case FE_TURBULANCE.NONE:
      return 0;
  }
}

export function translateFeTurbulanceFromNumberToOption(turbulance: number) {
  switch (turbulance) {
    case 0.8:
      return FE_TURBULANCE.OKISH;
    case 0.5:
      return FE_TURBULANCE.MIDDLE;
    case 0.4:
      return FE_TURBULANCE.CHAOTIC;
    case 0:
      return FE_TURBULANCE.NONE;
  }
}
