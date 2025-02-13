import { theme } from "./Theme";

type FontPropsType = {
  color?: string;
  weight?: number;
  lineHeight?: number;
  Fmin?: number;
  Fmax?: number;
};

export const getFont = ({
  Fmin,
  Fmax,
  color,
  weight,
  lineHeight,
}: FontPropsType) => `
    ${weight ? `font-weight: ${weight};` : ""}
    ${color ? `color: ${color};` : ""}
    ${lineHeight ? `line-height: ${lineHeight};` : ""}
    font-size: clamp(${Fmin}px, calc((100vw - 375px) / (1310 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px), ${Fmax}px);
  `;
