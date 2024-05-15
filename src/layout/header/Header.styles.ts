import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme";
import { Link } from "react-scroll";

const Header = styled.header`
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.5);

  color: ${theme.colors.font2};

  padding: 30px 80px;

  @media (max-width: 1300px) {
    padding: 30px 15px;
  }
`;

const Nav = styled.nav``;

const Menu = styled.ul`
  list-style: none;

  display: flex;
  gap: 20px;
`;

const MenuItem = styled.li``;

const MenuItemLink = styled(Link)`
  display: block;

  font-size: 20px;
  line-height: 55px;

  color: ${theme.colors.font2};

  position: relative;

  &::after {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);

    content: "";

    width: 0%;
    height: 1px;
    background-color: ${theme.colors.font2};

    transition: width 0.5s;
  }

  &:hover,
  &.active {
    &::after {
      width: 105%;
    }
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }

  position: fixed;
  width: 115px;
  height: 115px;

  top: 0;
  right: 0;

  border: none;
  background-color: rgba(0, 0, 0, 0);
  z-index: 9999;

  cursor: pointer;

  span {
    display: block;

    width: 36px;
    height: 2px;

    background-color: ${theme.colors.primaryBg};

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);

    transition: 0.5s;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before,
    &::after {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.primaryBg};
      position: absolute;
      transition: 0.5s;
    }

    &::before {
      transform: translateY(-10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          width: 36px;
          transform: rotate(-45deg) translateY(0);
        `}
    }

    &::after {
      transform: translateY(10px);
      width: 20px;

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          width: 36px;
          transform: rotate(45deg) translateY(0);
        `}
    }
  }
`;

const MobileMenuWrapper = styled.div`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`;

const DesktopMenu = styled.div`
  display: block;

  @media ${theme.media.tablet} {
    display: none;
    color: red;
  }
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  display: none;
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;

  transform: translateY(-100%);
  transition: 1s ease-in-out;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      transform: translateY(0);
      background-color: rgba(0, 0, 0, 0.5);
    `}

  ${Menu} {
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;

    font-size: 33.3px;
  }
`;

export const S = {
  Header,
  Nav,
  Menu,
  MenuItem,
  MenuItemLink,
  BurgerButton,
  MobileMenuWrapper,
  DesktopMenu,
  MobileMenuPopup,
};
