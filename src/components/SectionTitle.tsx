import styled from "styled-components";
import { theme } from "../styles/Theme";

export const SectionTitle = styled.h3`
  position: relative;

  color: ${theme.colors.font1};
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 90px;
  text-align: center;
  text-transform: uppercase;

  ::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    color: black;
  }
`;
