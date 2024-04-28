import { FC } from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "../Header.styles";

interface MenuProps {}

const Menu: FC<MenuProps> = () => {
  return (
    <S.Nav>
      <S.Menu>
        <FlexWrapper gap="20px">
          <S.MenuItem>
            <S.MenuItemLink>About</S.MenuItemLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuItemLink>Works</S.MenuItemLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuItemLink>Contacts</S.MenuItemLink>
          </S.MenuItem>
        </FlexWrapper>
      </S.Menu>
    </S.Nav>
  );
};

export default Menu;
