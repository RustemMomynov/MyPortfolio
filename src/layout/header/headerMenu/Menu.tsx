import { FC, useEffect, useState } from "react";
import { S } from "../Header.styles";

interface MenuProps {}

interface MenuItem {
  name: string;
  link: string;
}

const menuItems: MenuItem[] = [
  { name: "Home", link: "home" },
  { name: "About", link: "about" },
  { name: "Works", link: "works" },
  { name: "Contacts", link: "contacts" },
];

const Menu: FC<MenuProps> = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: `-50% 0px`,
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    menuItems.forEach((item) => {
      const section = document.getElementById(item.link);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const items = menuItems.map((item, index) => (
    <S.MenuItem key={index}>
      <S.MenuItemLink
        to={item.link}
        smooth={true}
        duration={1000}
        activeClass="active"
        spy
        className={activeSection === item.link ? "active" : ""}
      >
        {item.name}
      </S.MenuItemLink>
    </S.MenuItem>
  ));

  return (
    <S.Nav>
      <S.Menu>{items}</S.Menu>
    </S.Nav>
  );
};

export default Menu;
