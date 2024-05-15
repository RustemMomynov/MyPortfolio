import { FC } from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
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
          duration={500}
          activeClass="active"
          spy
          offset={50}
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
