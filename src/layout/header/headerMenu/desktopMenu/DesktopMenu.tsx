import { FC } from "react";
import Menu from "../Menu";
import { S } from "../../Header.styles";

interface DesktopMenuProps {}

const MenuItems = [
  { name: "Home", link: "" },
  { name: "About", link: "" },
  { name: "Works", link: "" },
  { name: "Contacts", link: "" },
];

const DesktopMenu: FC<DesktopMenuProps> = () => {
  return (
    <S.DesktopMenu>
      <Menu items={MenuItems} />
    </S.DesktopMenu>
  );
};

export default DesktopMenu;
