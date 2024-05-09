import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Footer = styled.footer`
  background-color: ${theme.colors.secondaryBg};
  color: ${theme.colors.font2};

  padding: 40px 0;
`;

const Name = styled.span`
  font-size: 22px;
  font-weight: 700;

  padding-bottom: 20px;
`;

const Copyright = styled.small`
  font-size: 12px;
  line-height: 18px;
  opacity: 0.5;
`;

export const S = { Footer, Name, Copyright };
