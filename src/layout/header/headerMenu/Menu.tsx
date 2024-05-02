import { FC } from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "../Header.styles";

interface MenuProps {
  items: { name: string; link: string }[];
}

const Menu: FC<MenuProps> = (props) => {
  const items = props.items.map((i) => {
    return (
      <S.MenuItem>
        <S.MenuItemLink href={i.link}>{i.name}</S.MenuItemLink>
      </S.MenuItem>
    );
  });

  return (
    <S.Nav>
      <S.Menu>{items}</S.Menu>
    </S.Nav>
  );
};

export default Menu;
