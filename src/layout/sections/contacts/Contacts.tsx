import { FC } from "react";
import { S } from "./Contacts.styles";
import { StyledContainer } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";

interface ContactsProps {}

const Contacts: FC<ContactsProps> = () => {
  return (
    <S.Contacts id="contacts">
      <StyledContainer>
        <SectionTitle>Contact Me</SectionTitle>
        <S.ContactMe>
          <FlexWrapper justify="space-between" gap="50px" wrap="wrap">
            <S.Email>
              <h3>email</h3>
              <div>slehder5657@gmail.com</div>
            </S.Email>
            <S.PhoneNumber>
              <h3>mobile</h3>
              <div>+7 707 835-52-33</div>
            </S.PhoneNumber>
          </FlexWrapper>
        </S.ContactMe>
        <S.SocialLinks>
          <S.Item>
            <S.Link>Instagram</S.Link>
          </S.Item>
          <S.Item>
            <S.Link>Linkedin</S.Link>
          </S.Item>
          <S.Item>
            <S.Link>HH</S.Link>
          </S.Item>
        </S.SocialLinks>
      </StyledContainer>
    </S.Contacts>
  );
};

export default Contacts;
