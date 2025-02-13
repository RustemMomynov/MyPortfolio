import { FC } from "react";
import { S } from "../Works.styles";
import { FlexWrapper } from "../../../../components/FlexWrapper";

interface WorkProps {
  imgSrc: string;
  number: number;
  title: string;
  links: { website: string; code: string };
}

const Work: FC<WorkProps> = (props) => {
  return (
    <S.Work>
      <S.ImageWrapper>
        <a href={props.links.website} target="_blank">
          <S.Img src={props.imgSrc} />
        </a>
      </S.ImageWrapper>

      <S.Description>
        <FlexWrapper justify="space-between">
          <S.Title>{props.title}</S.Title> /
          <S.Link target="_blank" href={props.links.website}>
            WEBSITE
          </S.Link>
          /
          <S.Link target="_blank" href={props.links.code}>
            CODE
          </S.Link>
          /<S.Number>{`00${props.number}`}</S.Number>
        </FlexWrapper>
      </S.Description>
    </S.Work>
  );
};

export default Work;
