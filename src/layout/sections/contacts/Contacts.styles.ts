import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Contacts = styled.section`
  background-color: ${theme.colors.primaryBg};
  color: ${theme.colors.font1};
`;

const MessageBlock = styled.div`
  max-width: 50%;
  width: 100%;

  padding: 15px;

  border: 1px solid ${theme.colors.secondaryBg};
`;

const Description = styled.p``;

const Form = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Field = styled.input``;

const PhoneNumber = styled.div`
  width: 40%;

  display: flex;
  flex-direction: column;
  justify-content: end;
  /* align-items: flex-end; */
`;

const SocialLinks = styled.ul`
  display: flex;
  gap: 10px;
  color: ${theme.colors.font1};
`;

const Item = styled.li``;

const Link = styled.a``;

const Contact = styled.div`
  max-width: 35%;
  width: 100%;

  padding: 15px;

  border: 1px solid ${theme.colors.secondaryBg};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContactMe = styled.div``;

const Email = styled.div``;

export const S = {
  Contacts,
  MessageBlock,
  Description,
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
