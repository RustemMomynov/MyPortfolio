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
        <S.Img src={props.imgSrc} />
        <S.LinksWrapper>
          <S.Link target="_blank" href={props.links.site}>
            SITE
          </S.Link>
          <S.Link target="_blank" href={props.links.code}>
            CODE
          </S.Link>
        </S.LinksWrapper>
      </S.ImageWrapper>

      <S.Description>
        <FlexWrapper justify="space-between">
          <S.Title>{props.title}</S.Title>
          <S.Number>{`/00${props.number}`}</S.Number>
        </FlexWrapper>
      </S.Description>
    </S.Work>
  );
};

export default Work;
