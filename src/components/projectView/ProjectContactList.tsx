import { useData } from "../../contexts/DataContext";
import styled from "styled-components";
import ContactBox from "../global/ContactBox";

const StyledCotnactList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  width: 100%;

  @media only screen and (max-width: 840px) {
    grid-column: 1/-1;
    flex-direction: row;
  }

  li {
    aspect-ratio: 16/9;
  }
`;

function ProjectContactList() {
  const { filterContacts } = useData();

  const contacts = filterContacts(["x", "mail"]);

  return (
    <StyledCotnactList>
      {contacts.reverse().map((contact, i) => (
        <ContactBox
          animationTime={1}
          animationType="fadeHorizontal"
          animationFadeFrom={(i + 1) * 10}
          animationFadeTo={0}
          key={i}
          option={contact}
        />
      ))}
    </StyledCotnactList>
  );
}

export default ProjectContactList;
