import { FC } from "react";
import Menu from "../Menu";
import { S } from "../../Header.styles";

interface DesktopMenuProps {}

const DesktopMenu: FC<DesktopMenuProps> = () => {
  return (
    <S.DesktopMenu>
      <Menu />
    </S.DesktopMenu>
  );
};

export default DesktopMenu;
