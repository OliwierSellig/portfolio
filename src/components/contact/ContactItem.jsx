import styled from "styled-components";
import { absoluteFull, flexCenter } from "../../styles/Mixins";
import { fadeVertical } from "../../styles/Animations";
import { useDarkMode } from "../../contexts/DarkModeContext";

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
  box-shadow: ${(props) =>
    props.$darkMode
      ? "0rem 1rem 2.4rem 1.4rem rgba(18, 18, 18, 0.2);"
      : "none"};

  & img {
    width: 8rem;
    height: 8rem;

    @media only screen and (max-width: 340px) {
      width: 6rem;
      height: 6rem;
    }
  }

  &:hover,
  &:focus,
  &:focus-within {
    & div {
      opacity: 1;
      visibility: visible;

      & div {
        animation: ${fadeVertical(60, 0)} 0.5s;
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
  color: #f9fafb;
  transition: all 0.3s;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2.4px;
    border-radius: 8px;
    background-color: #f9fafb;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;

    @media only screen and (max-width: 720px) {
      height: 2px;
    }
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
  const { inDarkMode } = useDarkMode();

  return (
    <StyledContactItem
      $darkMode={inDarkMode}
      tabIndex={0}
      $theme={option?.theme || "#fff"}
    >
      <img src={option?.cover} alt={option?.name || "Contact Option"} />
      <Container>
        <div>
          <ContactLink href={option?.url || "#"} target="_blank">
            {option?.name}
          </ContactLink>
        </div>
      </Container>
    </StyledContactItem>
  );
}

export default ContactItem;
