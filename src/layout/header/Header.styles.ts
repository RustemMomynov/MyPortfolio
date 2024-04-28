import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  background-color: ${theme.colors.secondaryBg};
  color: ${theme.colors.font2};

  padding: 30px 80px;

  outline: solid 2px white;
`;

const Nav = styled.nav``;

const Menu = styled.ul`
  list-style: none;
`;

const MenuItem = styled.li``;

const MenuItemLink = styled.a``;

export const S = {
  Header,
  Nav,
  Menu,
  MenuItem,
  MenuItemLink,
};
