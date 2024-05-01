import { FC } from "react";
import { S } from "./Works.styles";
import { StyledContainer } from "../../../components/Container";

interface WorksProps {}

const Works: FC<WorksProps> = () => {
  return (
    <S.Works>
      <StyledContainer>Works</StyledContainer>
    </S.Works>
  );
};

export default Works;
