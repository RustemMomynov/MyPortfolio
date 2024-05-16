import { ElementRef, FC, useRef } from "react";
import { S } from "./Contacts.styles";
import { StyledContainer } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledBtn } from "../../../components/Button";
import { SectionTitle } from "../../../components/SectionTitle";
import emailjs from "@emailjs/browser";

interface ContactsProps {}

const Contacts: FC<ContactsProps> = () => {
  const form = useRef<ElementRef<"form">>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    console.log(form.current);

    emailjs
      .sendForm("service_xe3wkqf", "template_s8yidcg", form.current, {
        publicKey: "t6hUi_sF5Vqg431PX",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <S.Contacts id="contacts">
      <StyledContainer>
        <SectionTitle>contact me</SectionTitle>
        <FlexWrapper justify="space-between" gap="50px" wrap="wrap">
          <S.MessageBlock>
            <S.Form ref={form} onSubmit={sendEmail}>
              <S.Field
                type="text"
                placeholder="Name"
                name="user_name"
                required
              />
              <S.Field
                type="email"
                placeholder="Email"
                name="user_email"
                required
              />
              <S.Field type="text" placeholder="Subject" name="subject" />
              <S.Field
                as={"textarea"}
                placeholder="Message"
                name="message"
                required
              />
              <StyledBtn type="submit">Send</StyledBtn>
            </S.Form>
          </S.MessageBlock>
          <S.Contact>
            <S.ContactMe>
              <S.PhoneNumber>+7 707 835-52-33</S.PhoneNumber>
              <S.Email>slehder5657@gmail.com</S.Email>
            </S.ContactMe>

            <S.SocialLinks>
              <S.Item>
                <S.Link>INSTAGRAM</S.Link>
              </S.Item>
              <S.Item>
                <S.Link>LINKEDIN</S.Link>
              </S.Item>
              <S.Item>
                <S.Link>HH</S.Link>
              </S.Item>
            </S.SocialLinks>
          </S.Contact>
        </FlexWrapper>
      </StyledContainer>
    </S.Contacts>
  );
};

export default Contacts;
