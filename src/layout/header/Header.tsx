import { FC } from "react";
import { S } from "./Header.styles";
import { FlexWrapper } from "../../components/FlexWrapper";
import Menu from "./headerMenu/Menu";
import Logo from "../../components/logo/Logo";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <S.Header>
      <FlexWrapper justify="space-between">
        <Logo textLogo="Rustem." />
        <Menu />
      </FlexWrapper>
    </S.Header>
  );
};

export default Header;
