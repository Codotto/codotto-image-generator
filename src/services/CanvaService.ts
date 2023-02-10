import {GRADIENT_PAYLOAD} from "@/services/GradientSelectionService";

export function calculateX1Y1(angleDegree: number, x0: number, y0: number, canvaWidth: number) {
  const angleRadians = angleDegree * Math.PI / 180;

  let _x1 = canvaWidth * Math.cos(angleRadians);
  let _y1 = canvaWidth * Math.sin(angleRadians);

  return { _x1, _y1 };
}

export function paintGradient(
  canva: HTMLCanvasElement,
  gradient: GRADIENT_PAYLOAD,
  canvaWidth: number,
  canvaHeight: number,
) {
  const ctx = canva.getContext('2d')!;
  const x0 = 150;
  const y0 = 150;
  const {_x1, _y1} = calculateX1Y1(gradient.degree, x0, y0, canvaWidth);
  const canvasGradient = ctx.createLinearGradient(0, 0, _x1, _y1);

  gradient.colorStops.forEach(([offset, rgba]) => {
    canvasGradient.addColorStop(offset, rgba);
  });

  ctx.fillStyle = canvasGradient;
  ctx.fillRect(0, 0, canvaWidth, canvaHeight);
}

export function fillText(canva: HTMLCanvasElement, text: string, canvasWidth: number, canvasHeight: number) {
  const ctx = canva.getContext('2d')!;

  ctx.font = "30px Arial";
  ctx.fillStyle = 'red';
  ctx.textAlign = "center";
  ctx.fillText(text, 10, 50);
}
