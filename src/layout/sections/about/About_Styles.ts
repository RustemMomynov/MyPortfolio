import styled from "styled-components";
import { StyledBtn } from "../../../components/Button";
import { theme } from "../../../styles/Theme";

const About = styled.section``;

const PersonalInfo = styled.div`
  position: relative;

  max-width: 600px;

  ${StyledBtn} {
    position: absolute;
    bottom: 0;
    left: 0;

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
`;

const Skills = styled.ul`
  max-width: 600px;
  width: 100%;

  font-size: 20px;
`;

const Skill = styled.li``;

const SkillTitle = styled.div``;

export const S = {
  About,
  PersonalInfo,
  Description,
  Skills,
  Skill,
  SkillTitle,
};
