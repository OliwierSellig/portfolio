import styled from "styled-components";
import ContactItem from "../global/ContactItem";
import { contactOptions } from "../../services/utils";

const StyledContactList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;

  @media only screen and (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

function ContactList() {
  return (
    <StyledContactList>
      {contactOptions.map((option, i) => (
        <ContactItem
          animationTime={i / 4 + 1}
          animationType="fadeVertical"
          animationFadeTo={0}
          animationFadeFrom={20}
          key={i}
          option={option}
        />
      ))}
    </StyledContactList>
  );
}

export default ContactList;
