export const GRADIENTS = {
  GOLD: 'linear-gradient(153deg, rgba(0,0,0,1) 0%, rgba(48,37,27,1) 9%, rgba(95,77,59,1) 19%, rgba(223,223,223,1) 50%, rgba(95,77,59,1) 77%, rgba(48,37,27,1) 94%, rgba(0,0,0,1) 100%)',
  BLACK: 'linear-gradient(23deg, rgba(29,29,29,1) 0%, rgba(31,31,31,1) 22%, rgba(84,84,84,1) 50%, rgba(8,8,8,1) 85%, rgba(0,0,0,1) 100%)',
  PURPLE: 'linear-gradient(23deg, rgba(0,0,0,1) 0%, rgba(68,0,255,1) 22%, rgba(210,194,255,1) 50%, rgba(68,0,255,1) 85%, rgba(0,0,0,1) 100%)',
  YELLOW: 'linear-gradient(133deg, rgba(0,0,0,1) 7%, rgba(255,205,0,1) 44%, rgba(255,250,231,1) 50%, rgba(255,205,0,1) 60%, rgba(0,0,0,1) 94%)',
  RED: 'linear-gradient(133deg, rgba(0,0,0,1) 7%, rgba(255,0,0,1) 25%, rgba(255,250,231,1) 50%, rgba(255,0,0,1) 85%, rgba(0,0,0,1) 94%)'
} as const;

export type POSSIBLE_GRADIENTS = typeof GRADIENTS[keyof typeof GRADIENTS];
