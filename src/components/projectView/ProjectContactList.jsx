import styled from "styled-components";
import { contactOptions } from "../../services/utils";
import ContactItem from "../global/ContactItem";
import { fadeHorizontal } from "../../styles/Animations";

const StyledCotnactList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

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
  return (
    <StyledCotnactList>
      <ContactItem option={contactOptions.at(2)} />
      <ContactItem option={contactOptions.at(1)} />
    </StyledCotnactList>
  );
}

export default ProjectContactList;
