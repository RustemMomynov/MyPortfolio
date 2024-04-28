import { FC } from "react";
import { S } from "./Main_styles";
import { StyledContainer } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";

interface MainProps {}

const Main: FC<MainProps> = () => {
  return (
    <S.Main>
      <StyledContainer>
        <FlexWrapper align="center">
          <S.ContentWrapper>
            <S.Name>Momynov Rustem</S.Name>
            <S.MainTitle>A Web Developer</S.MainTitle>
            <S.PersonalInfo>Building web applications in React</S.PersonalInfo>
            <S.Button>Get in touch</S.Button>
          </S.ContentWrapper>
        </FlexWrapper>
      </StyledContainer>
    </S.Main>
  );
};

export default Main;
