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

  /* outline: solid 2px white; */
`;

const Nav = styled.nav``;

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

export const S = {
  Header,
  Nav,
  Menu,
  MenuItem,
  MenuItemLink,
};
