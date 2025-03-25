import { FC } from "react";
import { S } from "./Works.styles";
import { StyledContainer } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import Work from "./work/Work";
import GreenApiPhoto from "./../../../assets/images/works/greenApi.png";
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
    title: "WA Clone",
    photo: GreenApiPhoto,
    links: {
      website:
        "https://rustemmomynov.github.io",
      code: "https://github.com/RustemMomynov/green-api-app",
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
        <FlexWrapper
         justify="space-between"
         wrap="wrap"
         gap="40px">
         {works}
        </FlexWrapper>
      </StyledContainer>
    </S.Works>
  );
};

export default Works;
