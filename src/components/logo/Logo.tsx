import { FC } from "react";
import Icon from "../icon/Icon";

interface LogoProps {
  textLogo: string;
}

const Logo: FC<LogoProps> = (props) => {
  return (
    <div>
      {props.textLogo}
      {/* <Icon iconId="instagram" width="24" height="24" color="red" /> */}
    </div>
  );
};

export default Logo;
