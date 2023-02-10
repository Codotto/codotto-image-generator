import {SelectOption} from "@/components/base/types";
import {POSSIBLE_POSITIONS} from "@/services/PositionService";

export const FONT_SIZES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
} as const;

export type POSSIBLE_FONT_SIZES = typeof FONT_SIZES[keyof typeof FONT_SIZES];

export const FontOptions: SelectOption<POSSIBLE_FONT_SIZES>[] = [
  { value: FONT_SIZES.sm, label: 'Small' },
  { value: FONT_SIZES.md, label: 'Medium' },
  { value: FONT_SIZES.lg, label: 'Large' },
  { value: FONT_SIZES.xl, label: 'Extra large' },
]

export function translateFontSize(size: POSSIBLE_FONT_SIZES) {
  switch (size) {
    case FONT_SIZES.sm:
      return 18;
    case FONT_SIZES.md:
      return 50;
    case FONT_SIZES.lg:
      return 100;
    case FONT_SIZES.xl:
      return 150;
  }
}
