import { FC, useState } from "react";
import { S } from "../../Header.styles";
import Menu from "../Menu";

const MobileMenu: FC = () => {
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
          <Menu callback={() => setIsOpen(!isOpen)} />
        </S.MobileMenuPopup>
      </S.MobileMenuWrapper>
    </>
  );
};

export default MobileMenu;
