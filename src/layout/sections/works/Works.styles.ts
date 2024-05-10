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

const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

const Img = styled.img`
  max-width: 600px;
  width: 100%;
  height: 300px;
  object-fit: cover;

  ::hover {
    filter: grayscale(100%);
  }
`;

const LinkWrapper = styled.div`
  display: inline-block;

  margin: 0 50px;
`;

const Link = styled.a`
  color: ${theme.colors.font2};
`;

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
  Link,
  LinkWrapper,
  Description,
  Title,
  Number,
};
