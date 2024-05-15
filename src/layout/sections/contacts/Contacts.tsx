import { FC } from "react";
import { S } from "./Contacts.styles";
import { StyledContainer } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledBtn } from "../../../components/Button";
import { SectionTitle } from "../../../components/SectionTitle";
import emailjs from "@emailjs/browser";

interface ContactsProps {}

const Contacts: FC<ContactsProps> = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
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
            <S.Form>
              <S.Field type="text" placeholder="Name" />
              <S.Field type="email" placeholder="Email" />
              <S.Field as={"textarea"} placeholder="Message" />
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
