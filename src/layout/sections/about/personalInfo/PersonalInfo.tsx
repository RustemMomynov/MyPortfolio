import { FC } from "react";
import { S } from "../About_Styles";
import { StyledBtn } from "../../../../components/Button";

interface PersonalInfoProps {}

const PersonalInfo: FC<PersonalInfoProps> = () => {
  return (
    <S.PersonalInfo>
      <S.Description>
        React developer, total development experience of 3 years. Initiative and
        hardworking. Looking for a company where I will improve and grow to a
        strong technical specialist. I will be glad to meet anyone
      </S.Description>
    </S.PersonalInfo>
  );
};

export default PersonalInfo;
