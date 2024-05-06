import { FC } from "react";
import { S } from "../About_Styles";
import { StyledBtn } from "../../../../components/Button";

interface PersonalInfoProps {}

const PersonalInfo: FC<PersonalInfoProps> = () => {
  return (
    <S.PersonalInfo>
      <S.Description>
        I've been doing Frontend development on React for 2 years, while
        combining it with work. I have strong knowledge of HTML CSS, JavaScript
        and React. At the moment I write projects for myself.
      </S.Description>
      <StyledBtn>ABOUT ME</StyledBtn>
    </S.PersonalInfo>
  );
};

export default PersonalInfo;
