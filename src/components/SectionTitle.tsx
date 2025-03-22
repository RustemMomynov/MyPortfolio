import styled from "styled-components";
import { theme } from "../styles/Theme";
import { getFont } from "../styles/Common";

export const SectionTitle = styled.h3`
  ${getFont({ Fmax: 51.8, Fmin: 51.8, weight: 700 })}
  margin-bottom: 90px;

  @media ${theme.media.container} {
    ${getFont({ Fmax: 51.8, Fmin: 38.8 })}
  }

  @media (max-width: 1270px) {
    margin-bottom: 50px;
  }
`;
