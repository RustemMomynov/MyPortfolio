import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { StyledBtn } from "../../../components/Button";

const Contacts = styled.section`
  font-size: 20px;
`;

const MessageBlock = styled.div`
  max-width: 700px;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 15px;

  background-color: ${theme.colors.secondaryBg};

  textarea {
    height: 100%;
    font-family: "Roboto";
    resize: none;
    line-height: 1;
  }

  ${StyledBtn} {
    cursor: pointer;
    text-align: end;

    border: none;
    border-top: 1px solid ${theme.colors.primaryBg};
    color: ${theme.colors.font2};
    background-color: rgba(0, 0, 0, 0);
  }
`;

const Field = styled.input`
  border: none;
  border-bottom: 1px solid ${theme.colors.font2};
  background-color: rgba(0, 0, 0, 0);

  color: ${theme.colors.font2};

  &::placeholder {
    color: ${theme.colors.font2};

    font-size: 15px;
  }
`;

const PhoneNumber = styled.div`
  font-size: 32.3px;
  font-weight: 700;

  margin-bottom: 10px;
`;

const SocialLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${theme.colors.font1};
`;

const Item = styled.li`
  font-size: 15px;
  font-weight: 600;
  width: max-content;

  position: relative;

  ::after {
    position: absolute;
    bottom: -5px;
    left: 0;
    /* left: 50%;
    transform: translateX(-50%); */

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
`;

const Link = styled.a`
  cursor: pointer;
`;

const Contact = styled.div`
  max-width: 500px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContactMe = styled.div``;

const Email = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const S = {
  Contacts,
  MessageBlock,
  Form,
  Field,
  PhoneNumber,
  SocialLinks,
  Item,
  Link,
  Contact,
  ContactMe,
  Email,
};
