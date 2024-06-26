import { FC, useState } from "react";
import { S } from "../../Header.styles";
import Menu from "../Menu";

interface MobileMenuProps {}

const MobileMenu: FC<MobileMenuProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <S.MobileMenuWrapper>
        <S.BurgerButton
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          isOpen={isOpen}
        >
          <span />
        </S.BurgerButton>
        <S.MobileMenuPopup isOpen={isOpen}>
          <Menu />
        </S.MobileMenuPopup>
      </S.MobileMenuWrapper>
    </>
  );
};

export default MobileMenu;
