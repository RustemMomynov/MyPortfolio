import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { SectionTitle } from "../../../components/SectionTitle";

const Works = styled.section`
  background-color: ${theme.colors.secondaryBg};
  color: ${theme.colors.font2};

  ${SectionTitle} {
    color: ${theme.colors.font2};
  }
`;

const Work = styled.div``;

const ImageWrapper = styled.div``;

const Img = styled.img`
  max-width: 630px;
  width: 100%;
  height: 335px;
  object-fit: cover;
`;

const LinksWrapper = styled.div``;

const Link = styled.a``;

const Description = styled.div`
  font-size: 20px;
`;

const Title = styled.div``;

const Number = styled.div``;

export const S = {
  Works,
  Work,
  ImageWrapper,
  Img,
  LinksWrapper,
  Link,
  Description,
  Title,
  Number,
};
