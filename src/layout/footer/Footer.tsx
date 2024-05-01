import { FC } from "react";
import { S } from "./Footer.styles";
import { StyledContainer } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <S.Footer>
      <StyledContainer>
        <FlexWrapper direction="column" align="center">
          <S.Name>Rustem</S.Name>

          <S.Copyright>© 2024 Rustem Momynov, All Rights Reserved.</S.Copyright>
        </FlexWrapper>
      </StyledContainer>
    </S.Footer>
  );
};

export default Footer;
