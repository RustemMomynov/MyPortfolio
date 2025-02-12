import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import myPhoto from "./../../../assets/images/background.png";
import { StyledContainer } from "../../../components/Container";
import { StyledBtn } from "../../../components/Button";
import { getFont } from "../../../styles/Common";

const Main = styled.main`
  background-color: ${theme.colors.secondaryBg};
  background-image: url(${myPhoto});
  background-repeat: no-repeat;
  background-size: 1920px;
  color: ${theme.colors.font2};

  ${StyledContainer} {
    height: 100vh;
  }

  @media ${theme.media.container} {
    ${getFont({ Fmin: 12.4, Fmax: 20 })}
  }

  @media (max-width: 1440px) {
    background-image: none;
  }
`;

const ContentWrapper = styled.div`
  text-align: left;

  ${StyledBtn} {
    width: 250px;
    height: 80px;

    font-size: 20px;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;

    background-color: rgba(1, 1, 1, 0);
    color: ${theme.colors.font2};
    border: 1px solid ${theme.colors.primaryBg};

    cursor: pointer;
    transition: background-color 0.5s ease, color 0.5s ease, border 0.5s ease;

    &:hover {
      background-color: ${theme.colors.primaryBg};
      color: ${theme.colors.font1};
      border: none;
    }

    @media ${theme.media.container} {
      ${getFont({ Fmin: 12.4, Fmax: 20 })}
    }

    @media ${theme.media.tablet} {
      width: 200px;
      height: 65px;
    }
  }
`;

const Name = styled.h2`
  ${getFont({ Fmax: 84.7, Fmin: 84.7, weight: 700 })};

  @media ${theme.media.container} {
    ${getFont({ Fmax: 84.7, Fmin: 52.3 })}
  }
`;

const MainTitle = styled.h1`
  ${getFont({ Fmax: 52.3, Fmin: 52.3, weight: 700 })};

  @media ${theme.media.container} {
    ${getFont({ Fmax: 52.3, Fmin: 32.3 })}
  }
`;

const PersonalInfo = styled.p`
  font-size: 32.3px;
  line-height: 2;

  ${getFont({ Fmax: 32.3, Fmin: 32.3, lineHeight: 2 })};

  @media ${theme.media.container} {
    ${getFont({ Fmax: 32.3, Fmin: 20 })}
  }

  margin: 35px 0 65px;
`;

export const S = {
  Main,
  ContentWrapper,
  MainTitle,
  Name,
  PersonalInfo,
};
