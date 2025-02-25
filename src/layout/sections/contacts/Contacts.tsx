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
          <FlexWrapper justify="space-between" gap="40px" wrap="wrap">
            <S.Email>
              <h3>e-mail</h3>
              <div>momynovrustem@gmail.com</div>
            </S.Email>
            <S.PhoneNumber>
              <h3>mobile</h3>
              <div>+7 707 835-52-33</div>
            </S.PhoneNumber>
          </FlexWrapper>
        </S.ContactMe>
        <S.SocialLinks>
          <S.Item>
            <S.Link
              href="https://www.instagram.com/___._rustem_.___/"
              target="_blank"
            >
              Instagram
            </S.Link>
          </S.Item>
          <S.Item>
            <S.Link
              href="https://www.linkedin.com/in/rustem-momynov-2609b0276/"
              target="_blank"
            >
              Linkedin
            </S.Link>
          </S.Item>
          <S.Item>
            <S.Link
              href="https://hh.kz/resume/a6eb70ceff09089c840039ed1f356d34514275"
              target="_blank"
            >
              HH
            </S.Link>
          </S.Item>
        </S.SocialLinks>
      </StyledContainer>
    </S.Contacts>
  );
};

export default Contacts;
