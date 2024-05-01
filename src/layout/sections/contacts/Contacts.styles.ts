import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Contacts = styled.section`
  background-color: ${theme.colors.primaryBg};
  color: ${theme.colors.font1};
`;

const MessageBlock = styled.div`
  max-width: 45%;
  width: 100%;

  padding: 15px;

  border: 1px solid ${theme.colors.secondaryBg};
`;

const Description = styled.p``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Field = styled.input``;

const phoneNumber = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: end;
`;

const SocialLinks = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  gap: 10px;
`;

const Item = styled.li``;

const Link = styled.a``;

export const S = {
  Contacts,
  MessageBlock,
  Description,
  Form,
  Field,
  phoneNumber,
  SocialLinks,
  Item,
  Link,
};
