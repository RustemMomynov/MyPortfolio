import { FC } from "react";
import { S } from "./Works.styles";
import { StyledContainer } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import Work from "./work/Work";
import photo1 from "./../../../assets/images/works/React.png";
import photo2 from "./../../../assets/images/works/MNTN.png";
import photo3 from "./../../../assets/images/works/Mogo.png";

interface WorksProps {}

const Works: FC<WorksProps> = () => {
  return (
    <S.Works>
      <StyledContainer>
        <SectionTitle>Works</SectionTitle>
        <FlexWrapper justify="center" gap="20px" wrap="wrap">
          <Work
            imgSrc={photo1}
            links={["", ""]}
            text="React project"
            number={1}
          />
          <Work imgSrc={photo2} links={["", ""]} text="MNTN" number={2} />
          <Work imgSrc={photo3} links={["", ""]} text="Mogo" number={3} />
        </FlexWrapper>
      </StyledContainer>
    </S.Works>
  );
};

export default Works;
