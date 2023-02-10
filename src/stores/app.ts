import { defineStore } from 'pinia'
import {FONT_SIZES, POSSIBLE_FONT_SIZES, translateFontSize} from "@/services/FontService";
import {FE_TURBULANCE, translateFeTurbulanceFromOptionToNumber} from "@/services/SVGService";
import {POSITIONS, POSSIBLE_POSITIONS} from "@/services/PositionService";
import {BLEND_MODE, POSSIBLE_BLEND_MODES} from "@/services/BlendModdeService";
import {GRADIENT, GRADIENT_NAMES, GRADIENTS} from "@/services/GradientSelectionService";

export const useAppStore = defineStore('app', {
  state: () => ({
    fontSize: FONT_SIZES.md as POSSIBLE_FONT_SIZES,
    svg: {
      feTurbulence: {
        baseFrequency: translateFeTurbulanceFromOptionToNumber(FE_TURBULANCE.OKISH)
      }
    },
    position: POSITIONS.CENTER as POSSIBLE_POSITIONS,
    postTitle: 'Write your title here',
    blendMode: BLEND_MODE.NORMAL as POSSIBLE_BLEND_MODES,
    gradient: GRADIENTS[GRADIENT_NAMES.GOLD],
  }),
  getters: {
    fontSizeInt: (state) => translateFontSize(state.fontSize),
  },
  actions: {

  },
})
