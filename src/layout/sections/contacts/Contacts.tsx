import { FC } from "react";
import { S } from "./Contacts.styles";
import { StyledContainer } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledBtn } from "../../../components/Button";

interface ContactsProps {}

const Contacts: FC<ContactsProps> = () => {
  return (
    <S.Contacts>
      <StyledContainer>
        <FlexWrapper justify="space-between">
          <S.MessageBlock>
            <S.Description>
              If you wish to contact me, give me a call or send me an e-mail
            </S.Description>
            <FlexWrapper justify="space-between">
              <S.Form>
                <S.Field type="text" placeholder="Name" />
                <S.Field type="email" placeholder="Email" />
                <S.Field as={"textarea"} placeholder="Message" />
                <StyledBtn type="submit">Send Message</StyledBtn>
              </S.Form>
              <S.PhoneNumber>+7 707 835 52 33</S.PhoneNumber>
            </FlexWrapper>
          </S.MessageBlock>
          <S.Contact>
            <S.ContactMe>
              contact me<S.Email>slehder5657@gmail.com</S.Email>
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
