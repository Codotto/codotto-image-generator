import {SelectOption} from "@/components/base/types";

export const POSITIONS = {
  TOP_LEFT: 'top-left',
  TOP_MIDDLE: 'top-middle',
  TOP_RIGHT: 'top-right',
  CENTER: 'center',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_MIDDLE: 'bottom-middle',
  BOTTOM_RIGHT: 'bottom-right',
} as const;

export type POSSIBLE_POSITIONS = typeof POSITIONS[keyof typeof POSITIONS];

export const PositionOptions: SelectOption<POSSIBLE_POSITIONS>[] = [
  { value: POSITIONS.TOP_LEFT, label: 'Top left' },
  { value: POSITIONS.TOP_MIDDLE, label: 'Top middle' },
  { value: POSITIONS.TOP_RIGHT, label: 'Top right' },
  { value: POSITIONS.CENTER, label: 'Center' },
  { value: POSITIONS.BOTTOM_LEFT, label: 'Bottom left' },
  { value: POSITIONS.BOTTOM_MIDDLE, label: 'Bottom middle' },
  { value: POSITIONS.BOTTOM_RIGHT, label: 'Bottom right' },
]

export function translatePossiblePosition(position: POSSIBLE_POSITIONS): Record<string, string> {
  switch (position) {
    case POSITIONS.TOP_LEFT:
      return {
        top: '10px',
        left: '10px',
      }
    case POSITIONS.TOP_MIDDLE:
      return {
        top: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
      }
    case POSITIONS.TOP_RIGHT:
      return {
        top: '10px',
        right: '10px',
        textAlign: 'right',
      }
    case POSITIONS.CENTER:
      return {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
      }
    case POSITIONS.BOTTOM_LEFT:
      return {
        bottom: '10px',
        left: '10px',
      }
    case POSITIONS.BOTTOM_MIDDLE:
      return {
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
      }
    case POSITIONS.BOTTOM_RIGHT:
      return {
        bottom: '10px',
        right: '10px',
        textAlign: 'right',
      }
    default:
      throw new Error('position argument should be POSITION type')
  }
}
