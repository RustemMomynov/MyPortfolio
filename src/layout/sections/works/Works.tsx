import { FC } from "react";
import { S } from "./Works.styles";
import { StyledContainer } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import Work from "./work/Work";
import ReactAppPhoto from "./../../../assets/images/works/React.png";
import MNTNPhoto from "./../../../assets/images/works/MNTN.png";
import MogoPhoto from "./../../../assets/images/works/Mogo.png";
import TodolistPhoto from "./../../../assets/images/works/Todolist.png";

type WorkDataType = {
  title: string;
  photo: string;
  links: {
    website: string;
    code: string;
  };
};

const WorksData: WorkDataType[] = [
  {
    title: "React app",
    photo: ReactAppPhoto,
    links: {
      website:
        "https://rustemmomynov.github.io/middle-hosted-React-Redux-AntDesign-Typescript",
      code: "https://github.com/RustemMomynov/middle-React-Redux-AntDesign-TypeScript",
    },
  },
  {
    title: "MNTN",
    photo: MNTNPhoto,
    links: {
      website: "https://rustemmomynov.github.io/MNTN__Layout/",
      code: "https://github.com/RustemMomynov/MNTN__Layout",
    },
  },
  {
    title: "To-Do-List",
    photo: TodolistPhoto,
    links: {
      website: "https://rustemmomynov.github.io/to-do-list/",
      code: "https://github.com/RustemMomynov/to-do-list",
    },
  },
  {
    title: "MoGo",
    photo: MogoPhoto,
    links: {
      website: "https://rustemmomynov.github.io/HTML-CSS---Mogo/",
      code: "https://github.com/RustemMomynov/HTML-CSS---Mogo",
    },
  },
];

const works = WorksData.map((w, index) => {
  return (
    <Work imgSrc={w.photo} links={w.links} title={w.title} number={index + 1} />
  );
});

const Works = () => {
  return (
    <S.Works id={"works"}>
      <StyledContainer>
        <SectionTitle>Works</SectionTitle>
        <S.WorksWrapper>{works}</S.WorksWrapper>
      </StyledContainer>
    </S.Works>
  );
};

export default Works;
