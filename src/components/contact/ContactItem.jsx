import styled from "styled-components";
import { absoluteFull, flexCenter } from "../../Mixins";
import { fadeFromBottom } from "../../Animations";

const StyledContactItem = styled.li`
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: var(--border-radius-default);
  background-color: ${(props) => props.$theme};
  ${flexCenter}
  overflow: hidden;
  transition: all 0.3s;
  z-index: 10;

  & img {
    width: 8rem;
    height: 8rem;
  }

  &:hover,
  &:focus,
  &:focus-within {
    & div {
      opacity: 1;
      visibility: visible;

      & div {
        animation: ${fadeFromBottom} 0.5s;
      }
    }
  }
`;

const Container = styled.div`
  ${absoluteFull}
  ${flexCenter}
  opacity: 0;
  background-image: radial-gradient(
    circle,
    rgba(31, 41, 55, 0.8) 0%,
    rgba(31, 41, 55, 0.6) 100%
  );
  visibility: hidden;
  transition: all 0.3s;
`;

const ContactLink = styled.a`
  font-size: 2.4rem;
  font-weight: 500;
  letter-spacing: var(--letter-spacing-default);
  color: var(--color-grey-50);
  transition: all 0.3s;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 8px;
    background-color: var(--color-grey-50);
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover,
  &:focus {
    &::before {
      transform-origin: left;
      transform: scaleX(1);
    }
  }
`;

function ContactItem({ option }) {
  return (
    <StyledContactItem tabIndex={0} $theme={option?.theme || "#fff"}>
      <img src={option?.cover} alt={option?.name || "Contact Option"} />
      <Container>
        <div>
          <ContactLink href={option?.url || "#"}>{option?.name}</ContactLink>
        </div>
      </Container>
    </StyledContactItem>
  );
}

export default ContactItem;
