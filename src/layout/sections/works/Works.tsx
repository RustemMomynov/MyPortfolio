import { FC } from "react";
import { S } from "./Works.styles";
import { StyledContainer } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import Work from "./work/Work";
import ReactAppPhoto from "./../../../assets/images/works/React.png";
import MNTNPhoto from "./../../../assets/images/works/MNTN.png";
import MogoPhoto from "./../../../assets/images/works/Mogo.png";

interface WorksProps {}

const WorksData = [
  {
    title: "React App",
    photo: ReactAppPhoto,
    links: {
      site: "https://rustemmomynov.github.io/middle-hosted-React-Redux-AntDesign-Typescript",
      code: "https://github.com/RustemMomynov/middle-React-Redux-AntDesign-TypeScript",
    },
  },
  {
    title: "MNTN",
    photo: MNTNPhoto,
    links: {
      site: "https://rustemmomynov.github.io/MNTN__Layout/",
      code: "https://github.com/RustemMomynov/MNTN__Layout",
    },
  },
  {
    title: "MoGo",
    photo: MogoPhoto,
    links: {
      site: "https://rustemmomynov.github.io/HTML-CSS---Mogo/",
      code: "https://github.com/RustemMomynov/HTML-CSS---Mogo",
    },
  },
];

const works = WorksData.map((w, index) => {
  // const isEndOdd = index === WorksData.length - 1 && index % 2 === 0;
  return (
    <Work imgSrc={w.photo} links={w.links} title={w.title} number={index + 1} />
  );
});

const Works: FC<WorksProps> = () => {
  return (
    <S.Works id={"works"}>
      <StyledContainer>
        <SectionTitle>Works</SectionTitle>
        <FlexWrapper justify="space-between" gap="40px" wrap="wrap">
          {works}
        </FlexWrapper>
      </StyledContainer>
    </S.Works>
  );
};

export default Works;
