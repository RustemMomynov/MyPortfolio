import { FC } from "react";
import { S } from "../../Header.styles";
import Menu from "../Menu";

interface MobileMenuProps {}

const MenuItems = [
  { name: "Home", link: "" },
  { name: "About", link: "" },
  { name: "Works", link: "" },
  { name: "Contacts", link: "" },
];

const MobileMenu: FC<MobileMenuProps> = (props) => {
  return (
    <>
      {/* <S.BurgerButton>
        <span />
      </S.BurgerButton> */}
      <S.MobileMenuWrapper>
        <Menu items={MenuItems} />
      </S.MobileMenuWrapper>
    </>
  );
};

export default MobileMenu;
