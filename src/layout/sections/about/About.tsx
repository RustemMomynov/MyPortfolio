import { Line } from "rc-progress";
import { FC } from "react";
import ProgressBar from "../../../components/progressBar/ProgressBar";
import { S } from "./About_Styles";
import { StyledContainer } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <S.About>
      <StyledContainer>
        <SectionTitle>WHO AM I</SectionTitle>

        <FlexWrapper justify="space-between">
          <S.PersonalInfo>
            <p style={{ width: "640px" }}>
              Itaque earum rerum hic tenetur a sapiente delectus, ut aut
              reiciendis voluptatibus maiores alias consequatur aut perferendis
              doloribus asperiores repellat quia voluptas sit aspernatur te
              natus accusan. maiores alias consequatur aut equatur aut
              perferendi.
            </p>
            <button>ABOUT ME</button>
          </S.PersonalInfo>
          <div style={{ width: "450px" }}>
            <ul>
              <li>
                <div>HTML/CSS</div>
                <ProgressBar percent={80} />
              </li>
              <li>
                <div>JAVASCRIPT</div>
                <ProgressBar percent={75} />
              </li>
              <li>
                <div>REACT</div>
                <ProgressBar percent={70} />
              </li>
              <li>
                <div>REST API</div>
                <ProgressBar percent={80} />
              </li>
              <li>
                <div>GIT</div>
                <ProgressBar percent={60} />
              </li>
            </ul>
          </div>
        </FlexWrapper>
      </StyledContainer>
    </S.About>
  );
};

export default About;
