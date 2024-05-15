import { Line } from "rc-progress";
import { FC } from "react";
import ProgressBar from "../../../components/progressBar/ProgressBar";
import { S } from "./About_Styles";
import { StyledContainer } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import PersonalInfo from "./personalInfo/PersonalInfo";
import Skills from "./skills/Skills";
import { title } from "process";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  const skillsData = [
    { title: "HTML/CSS", progress: 80 },
    { title: "JAVASCRIPT", progress: 75 },
    { title: "REACT", progress: 70 },
    { title: "REST API", progress: 80 },
    { title: "GIT", progress: 60 },
  ];

  return (
    <S.About id={"about"}>
      <StyledContainer>
        <SectionTitle>WHO AM I</SectionTitle>
        <FlexWrapper justify="space-between" wrap="wrap">
          <PersonalInfo />
          <Skills skills={skillsData} />
        </FlexWrapper>
      </StyledContainer>
    </S.About>
  );
};

export default About;
