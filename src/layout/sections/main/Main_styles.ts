import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import myPhoto from "./../../../assets/images/myPhoto.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledContainer } from "../../../components/Container";

const Main = styled.main`
  height: 100vh;
  background-color: ${theme.colors.secondaryBg};
  /* background-image: url(${myPhoto});
  background-repeat: no-repeat;
  background-size: 100vh; */
  color: ${theme.colors.font2};

  ${StyledContainer} {
    height: 100vh;
  }
`;

const ContentWrapper = styled.div`
  text-align: left;
`;

const MainTitle = styled.h1``;

const Name = styled.h2``;

const PersonalInfo = styled.div``;

const Button = styled.button``;

export const S = {
  Main,
  ContentWrapper,
  MainTitle,
  Name,
  PersonalInfo,
  Button,
};
