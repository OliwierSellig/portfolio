import { fadeHorizontal } from "../../styles/Animations";
import { useData } from "../../contexts/DataContext";
import ContactItem from "../global/ContactItem";
import styled from "styled-components";

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

    &:first-child {
      animation: ${fadeHorizontal(10, 0)} 1s;
    }

    &:last-child {
      animation: ${fadeHorizontal(20, 0)} 1s;
    }
  }
`;

function ProjectContactList() {
  const { filterContacts } = useData();

  const contacts = filterContacts(["x", "mail"]);

  return (
    <StyledCotnactList>
      {contacts.reverse().map((contact, i) => (
        <ContactItem key={i} option={contact} />
      ))}
    </StyledCotnactList>
  );
}

export default ProjectContactList;
