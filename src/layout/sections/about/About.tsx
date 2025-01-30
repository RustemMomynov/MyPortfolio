import { FC } from "react";
import { S } from "./About_Styles";
import { StyledContainer } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import PersonalInfo from "./personalInfo/PersonalInfo";
import Skills from "./skills/Skills";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  const skillsData = [
    { title: "HTML/CSS", progress: 90 },
    { title: "JAVASCRIPT", progress: 80 },
    { title: "REACT", progress: 90 },
    { title: "REST API", progress: 80 },
    { title: "GIT", progress: 70 },
  ];

  return (
    <S.About id={"about"}>
      <StyledContainer>
        <SectionTitle>Who am I</SectionTitle>
        <FlexWrapper justify="space-between" wrap="wrap">
          <PersonalInfo />
          <Skills skills={skillsData} />
        </FlexWrapper>
      </StyledContainer>
    </S.About>
  );
};

export default About;
