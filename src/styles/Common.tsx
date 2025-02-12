import { theme } from "./Theme";

type FontPropsType = {
  color?: string;
  weight?: number;
  lineHeight?: number;
  Fmin?: number;
  Fmax?: number;
};

export const getFont1 = ({
  Fmin,
  Fmax,
  color,
  weight,
  lineHeight,
}: FontPropsType) =>
  `font-weight: ${weight || 400};
   color: ${color || theme.colors.font2};
   line-height: ${lineHeight || 1.2};
   font-size: 
   clamp( ${Fmin}px, calc( (100vw - 360px)/(1310 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px), ${Fmax}px);`;

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
    font-size: clamp(${Fmin}px, calc((100vw - 360px) / (1310 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px), ${Fmax}px);
  `;
