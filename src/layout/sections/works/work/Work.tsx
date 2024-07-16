import { FC } from "react";
import { S } from "../Works.styles";
import { FlexWrapper } from "../../../../components/FlexWrapper";

interface WorkProps {
  imgSrc: string;
  number: number;
  title: string;
  style?: React.CSSProperties | undefined;
  links: { site: string; code: string };
}

const Work: FC<WorkProps> = (props) => {
  return (
    <S.Work style={props.style}>
      <S.ImageWrapper>
        <a href={props.links.site} target="_blank">
          <S.Img src={props.imgSrc} />
        </a>
      </S.ImageWrapper>

      <S.Description>
        <FlexWrapper justify="space-between">
          <S.Title>{props.title}</S.Title> /
          <S.Link target="_blank" href={props.links.site}>
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
