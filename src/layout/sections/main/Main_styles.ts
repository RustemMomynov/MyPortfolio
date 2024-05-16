import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import myPhoto from "./../../../assets/images/background.png";
import { StyledContainer } from "../../../components/Container";
import { StyledBtn } from "../../../components/Button";

const Main = styled.main`
  height: 100vh;
  background-color: ${theme.colors.secondaryBg};
  background-image: url(${myPhoto});
  background-repeat: no-repeat;
  background-size: 1920px;
  color: ${theme.colors.font2};

  ${StyledContainer} {
    height: 100vh;
  }
`;

const ContentWrapper = styled.div`
  text-align: left;

  ${StyledBtn} {
    width: 250px;
    height: 80px;

    font-size: 19px;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;

    background-color: rgba(1, 1, 1, 0);
    color: ${theme.colors.font2};
    border: 1px solid ${theme.colors.primaryBg};

    cursor: pointer;

    ::hover {
      background-color: rgba(1, 1, 1, 0);
      color: ${theme.colors.font2};
      border: 1px solid ${theme.colors.primaryBg};
    }
  }
`;

const Name = styled.h2`
  font-size: 84.7px;
  font-weight: bold;
`;

const MainTitle = styled.h1`
  font-size: 52.3px;
  font-weight: 430;
`;

const PersonalInfo = styled.p`
  font-size: 32.3px;
  line-height: 2;

  margin: 35px 0 65px;
`;

export const S = {
  Main,
  ContentWrapper,
  MainTitle,
  Name,
  PersonalInfo,
};
