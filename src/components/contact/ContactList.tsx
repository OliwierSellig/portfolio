import { useData } from "../../contexts/DataContext";

import styled from "styled-components";
import ContactBox from "../global/ContactBox";

const StyledContactList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;

  @media only screen and (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

function ContactList() {
  const { contacts } = useData();

  return (
    <StyledContactList>
      {contacts &&
        contacts.map((option, i) => (
          <ContactBox
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
