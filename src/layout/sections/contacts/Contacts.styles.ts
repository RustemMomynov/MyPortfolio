import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Contacts = styled.section`
  font-size: 20px;
`;

const MessageBlock = styled.div`
  max-width: 50%;
  width: 100%;

  padding: 15px;

  border: 1px solid #dbdbdb;
`;

const Description = styled.p`
  margin-bottom: 50px;
`;

const Form = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  textarea {
    height: 100%;
    font-family: "Roboto";
    resize: none;
  }
`;

const Field = styled.input`
  border: none;
  border-bottom: 1px solid ${theme.colors.font1};

  &::placeholder {
    color: ${theme.colors.font1};

    font-size: 15px;
  }
`;

const PhoneNumber = styled.div`
  width: 40%;

  display: flex;
  flex-direction: column;
  justify-content: end;
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

  border: 1px solid #dbdbdb;

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
