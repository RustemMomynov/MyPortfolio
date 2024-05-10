import styled from "styled-components";
import { StyledBtn } from "../../../components/Button";
import { theme } from "../../../styles/Theme";

const About = styled.section``;

const PersonalInfo = styled.div`
  display: flex;
  max-width: 600px;
  gap: 20px;
  flex-direction: column;
  justify-content: space-between;
  max-width: 600px;

  @media (max-width: 1200px) {
    margin-bottom: 50px;
  }

  ${StyledBtn} {
    width: 200px;
    height: 60px;

    font-size: 20px;
    text-align: center;
    text-transform: uppercase;

    background-color: ${theme.colors.secondaryBg};
    color: ${theme.colors.font2};

    cursor: pointer;

    ::hover {
      background-color: rgba(1, 1, 1, 0);
      color: ${theme.colors.font2};
      border: 1px solid ${theme.colors.primaryBg};
    }
  }
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.5;
`;

const Skills = styled.ul`
  max-width: 600px;
  width: 100%;
  line-height: 1;

  font-size: 20px;
  /* line-height: 100%;
  margin-bottom: 10px; */
`;

const Skill = styled.li`
  margin-bottom: 10px;
`;

const SkillTitle = styled.div``;

export const S = {
  About,
  PersonalInfo,
  Description,
  Skills,
  Skill,
  SkillTitle,
};
