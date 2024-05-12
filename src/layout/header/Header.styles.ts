import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Header = styled.header`
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  left: 0;

  background-color: rgba(${theme.colors.secondaryBg} 0.5);
  background-color: rgba(0, 0, 0, 0.5);

  color: ${theme.colors.font2};

  padding: 30px 80px;

  @media (max-width: 1300px) {
    padding: 30px 15px;
  }
`;

const Nav = styled.nav`
  @media ${theme.media.tablet} {
    display: none;
  }
`;

const Menu = styled.ul`
  list-style: none;

  display: flex;
  gap: 20px;
`;

const MenuItem = styled.li`
  position: relative;

  ::after {
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

  &:hover {
    ::after {
      width: 105%;
    }
  }
`;

const MenuItemLink = styled.a`
  font-size: 20px;
  line-height: 55px;

  text-align: center;

  color: ${theme.colors.font2};
`;

const BurgerButton = styled.button`
  position: fixed;
  width: 115px;
  height: 115px;

  top: 0;
  right: 0;

  border: none;
  background-color: rgba(0, 0, 0, 0);

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

    &::before,
    &::after {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.primaryBg};
      position: absolute;
    }

    &::before {
      transform: translateY(-10px);
    }

    &::after {
      transform: translateY(10px);
      width: 20px;
    }
  }
`;

const MobileMenuWrapper = styled.div`
  ${Menu} {
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
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
};
