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
`;

const Img = styled.img`
  max-width: 630px;
  width: 100%;
  height: 335px;
  object-fit: cover;

  ::hover {
    filter: grayscale(100%);
  }
`;

const LinksWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: space-between;

  width: 200px;
  height: 40px;
  /* background-color: red; */
`;

const Link = styled.a`
  width: 80px;
  height: 40px;
  background-color: black;
  color: white;
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
  LinksWrapper,
  Link,
  Description,
  Title,
  Number,
};
