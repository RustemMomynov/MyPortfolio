import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { getFont } from "../../../styles/Common";

const Contacts = styled.section``;

const PhoneNumber = styled.div`
  font-size: 32.3px;
  font-weight: 700;

  max-width: 600px;
  width: 100%;

  h3 {
    font-size: 20px;
    font-weight: 400;
  }

  @media ${theme.media.container} {
    ${getFont({ Fmax: 32.3, Fmin: 24.2 })}

    h3 {
      ${getFont({ Fmax: 20, Fmin: 15 })}
    }
  }

  @media (max-width: 1270px) {
    margin: 0 auto;
  }
`;

const SocialLinks = styled.ul`
  display: flex;
  gap: 20px;
  color: ${theme.colors.font1};

  @media (max-width: 1270px) {
    margin: 0 auto;
  }
`;

const Item = styled.li`
  font-size: 20px;
  width: max-content;

  position: relative;

  ::after {
    position: absolute;
    bottom: -5px;
    left: 0;

    content: "";
    width: 0%;
    height: 1px;
    background-color: ${theme.colors.font1};

    transition: width 0.5s;
  }

  &:hover {
    ::after {
      width: 105%;
    }
  }

  @media ${theme.media.container} {
    ${getFont({ Fmax: 20, Fmin: 15 })}
  }
`;

const Link = styled.a`
  cursor: pointer;
  color: ${theme.colors.font1};
`;

const Contact = styled.div`
  max-width: 500px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContactMe = styled.div`
  margin-bottom: 90px;
`;

const Email = styled.div`
  font-size: 32.3px;
  font-weight: 700;

  max-width: 600px;
  width: 100%;

  h3 {
    font-size: 20px;
    font-weight: 400;
  }

  @media ${theme.media.container} {
    ${getFont({ Fmax: 32.3, Fmin: 20 })}

    h3 {
      ${getFont({ Fmax: 20, Fmin: 12.4 })}
    }
  }

  @media (max-width: 1270px) {
    margin: 0 auto;
  }
`;

export const S = {
  Contacts,
  PhoneNumber,
  SocialLinks,
  Item,
  Link,
  Contact,
  ContactMe,
  Email,
};
