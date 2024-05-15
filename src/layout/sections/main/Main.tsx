import { FC } from "react";
import { S } from "./Main_styles";
import { StyledContainer } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledBtn } from "../../../components/Button";

interface MainProps {}

const Main: FC<MainProps> = () => {
  return (
    <S.Main id={"home"}>
      <StyledContainer>
        <FlexWrapper align="center">
          <S.ContentWrapper>
            <S.Name>Momynov Rustem</S.Name>
            <S.MainTitle>Web Developer</S.MainTitle>
            <S.PersonalInfo>Building web applications in React</S.PersonalInfo>
            <a href="#contacts">
              <StyledBtn>Get in touch</StyledBtn>
            </a>
          </S.ContentWrapper>
        </FlexWrapper>
      </StyledContainer>
    </S.Main>
  );
};

export default Main;
