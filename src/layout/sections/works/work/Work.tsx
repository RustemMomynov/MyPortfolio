import { FC } from "react";
import { S } from "../Works.styles";

interface WorkProps {
  imgSrc: string;
  number: number;
  text: string;
  links: string[];
}

const Work: FC<WorkProps> = (props) => {
  return (
    <S.Work>
      <S.ImageWrapper>
        <S.Img src={props.imgSrc} />
        <S.LinksWrapper>
          <S.Link href={props.links[0]}>SITE</S.Link>
          <S.Link href={props.links[1]}>CODE</S.Link>
        </S.LinksWrapper>
      </S.ImageWrapper>

      <S.Description>
        <S.Text>{props.text}</S.Text>
        <S.Number>{`/00${props.number}`}</S.Number>
      </S.Description>
    </S.Work>
  );
};

export default Work;
