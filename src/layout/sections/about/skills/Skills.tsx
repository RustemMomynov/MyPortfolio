import { FC } from "react";
import ProgressBar from "../../../../components/progressBar/ProgressBar";
import { S } from "../About_Styles";

interface SkillsProps {
  skills: { title: string; progress: number }[];
}

const Skills: FC<SkillsProps> = (props) => {
  const skills = props.skills.map((s) => {
    return (
      <S.Skill>
        <div>{s.title}</div>
        <ProgressBar percent={s.progress} />
      </S.Skill>
    );
  });

  return <S.Skills>{skills}</S.Skills>;
};

export default Skills;
