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

const Work = styled.div`
  margin: 0 auto;
`;

const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;

  filter: grayscale(100%);

  transition: filter 0.4s;

  &:hover {
    filter: grayscale(0%);
  }
`;

const Img = styled.img`
  max-width: 600px;
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const LinkWrapper = styled.div`
  display: inline-block;

  margin: 0 50px;
`;

const Link = styled.a`
  position: relative;

  color: ${theme.colors.font2};

  &:after {
    position: absolute;

    content: "";
    display: block;
    background-color: ${theme.colors.font2};

    height: 1px;
    width: 0;

    left: 50%;
    transform: translateX(-50%);

    right: 0;
    bottom: -4px;
    transition: 0.5s;
  }

  &:hover {
    &:after {
      width: 105%;
    }
  }
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
