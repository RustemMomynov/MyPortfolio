import { FC } from "react";
import iconsSprite from "./../../assets/images/svg/sprites.svg";

interface IconProps {
  iconId: string;
  width?: string;
  height?: string;
  color?: string;
}

const Icon: FC<IconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "50px"}
      height={props.height || "50px"}
      fill={props.color}
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </svg>
  );
};

export default Icon;
