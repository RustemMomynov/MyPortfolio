import { FC } from "react";
import { S } from "./Main_styles";
import { StyledContainer } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledBtn } from "../../../components/Button";
import { Link } from "react-scroll";

interface MainProps {}

const Main: FC<MainProps> = () => {
  return (
    <S.Main id={"home"}>
      <StyledContainer>
        <FlexWrapper align="center">
          <S.ContentWrapper>
            <S.Name>Rustem Momynov</S.Name>
            <S.MainTitle>Web Developer</S.MainTitle>
            <S.PersonalInfo>Building web applications in React</S.PersonalInfo>
            <Link
              activeClass="active"
              to="contacts"
              offset={50}
              duration={1000}
              spy
              smooth
            >
              <StyledBtn>Get in touch</StyledBtn>
            </Link>
          </S.ContentWrapper>
        </FlexWrapper>
      </StyledContainer>
    </S.Main>
  );
};

export default Main;
