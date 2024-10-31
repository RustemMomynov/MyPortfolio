import { FC } from "react";
import { S } from "../Header.styles";

interface MenuProps {}

const MenuItems = [
  { name: "Home", link: "home" },
  { name: "About", link: "about" },
  { name: "Works", link: "works" },
  { name: "Contacts", link: "contacts" },
];

const Menu: FC<MenuProps> = () => {
  const items = MenuItems.map((i) => {
    return (
      <S.MenuItem>
        <S.MenuItemLink
          to={i.link}
          smooth={true}
          duration={1000}
          activeClass="active"
          spy
          offset={100}
        >
          {i.name}
        </S.MenuItemLink>
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
