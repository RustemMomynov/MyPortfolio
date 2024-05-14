import { FC } from "react";
import Icon from "../icon/Icon";
import styled from "styled-components";

interface LogoProps {
  textLogo: string;
}

const Logo: FC<LogoProps> = (props) => {
  return <StyledLogo>{props.textLogo}</StyledLogo>;
};

export default Logo;

const StyledLogo = styled.div`
  font-size: 20px;
  line-height: 55px;
  z-index: 9999;

  text-align: center;
`;
