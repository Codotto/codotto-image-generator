type ColorStops = [number, string][];

export const GRADIENT_NAMES = {
  GOLD: 'gold',
  BLACK: 'black',
  PURPLE: 'purple',
  YELLOW: 'yellow',
  RED: 'red',
} as const;

export type GRADIENT_PAYLOAD = {
  id: string;
  degree: number;
  colorStops: ColorStops;
};

export type GRADIENT = Record<POSSIBLE_GRADIENTS, GRADIENT_PAYLOAD>;

export const GRADIENTS: GRADIENT = {
  [GRADIENT_NAMES.GOLD]: {
    id: 'gold',
    degree: 133,
    colorStops: [
      [0, 'rgba(0,0,0,1)'],
      [0.09, 'rgba(48,37,27,1)'],
      [0.19, 'rgba(95,77,59,1)'],
      [0.50, 'rgba(223,223,223,1)'],
      [0.77, 'rgba(95,77,59,1)'],
      [0.94, 'rgba(48,37,27,1)'],
      [1, 'rgba(0,0,0,1)'],
    ]
  },
  [GRADIENT_NAMES.BLACK]: {
    id: 'black',
    degree: 133,
    colorStops: [
      [0, 'rgba(29,29,29,1)'],
      [0.02, 'rgba(31,31,31,1)'],
      [0.5, 'rgba(84,84,84,1)'],
      [0.85, 'rgba(8,8,8,1)'],
      [0.85, 'rgba(8,8,8,1)'],
      [1, 'rgba(0,0,0,1)'],
    ]
  },
  [GRADIENT_NAMES.PURPLE]: {
    id: 'purple',
    degree: 133,
    colorStops: [
      [0, 'rgba(0,0,0,1)'],
      [0.22, 'rgba(68,0,255,1)'],
      [0.5, 'rgba(210,194,255,1)'],
      [0.85, 'rgba(68,0,255,1)'],
      [1, 'rgba(0,0,0,1)'],
    ]
  },
  [GRADIENT_NAMES.YELLOW]: {
    id: 'yellow',
    degree: 133,
    colorStops: [
      [0, 'rgba(29,29,29,1)'],
      [0.44, 'rgba(255,205,0,1)'],
      [0.5, 'rgba(255,250,231,1)'],
      [0.60, 'rgba(255,205,0,1)'],
      [1, 'rgba(29,29,29,1)'],
    ]
  },
  [GRADIENT_NAMES.RED]: {
    id: 'red',
    degree: 133,
    colorStops: [
      [0, 'rgba(29,29,29,1)'],
      [0.25, 'rgba(255,0,0,1)'],
      [0.5, 'rgba(255,250,231,1)'],
      [0.85, 'rgba(255,0,0,1)'],
      [1, 'rgba(29,29,29,1)'],
    ]
  }
};

export type POSSIBLE_GRADIENTS = typeof GRADIENT_NAMES[keyof typeof GRADIENT_NAMES];

export function colorStopsToBackgroundCSS(colorStops: ColorStops, degree: number) {
  let css = `linear-gradient(${degree}deg`;

  const colors =  colorStops.reduce((previous,[offset, rgb], currentIndex) => {
    if(currentIndex === 0) {
      return `${rgb} ${offset * 100}%`;
    }

    return `${previous}, ${rgb} ${offset * 100}%`;
  }, '')

  return `${css},${colors})`
}
