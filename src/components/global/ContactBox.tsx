import {
  absoluteFull,
  flexCenter,
  selectedAnimation,
} from "../../styles/Mixins";
import { fadeVertical } from "../../styles/Animations";
import { useDarkMode } from "../../contexts/DarkModeContext";
import styled from "styled-components";
import { AnimationType, ContactItem } from "../../lib/types";

interface StyledContactItemProps {
  $darkMode: boolean;
  $theme: string;
  $animationType: AnimationType;
  $animationTime: number;
  $animationFadeFrom: number;
  $animationFadeTo: number;
  tabIndex: number;
}

const StyledContactItem = styled.li<StyledContactItemProps>`
  position: relative;
  z-index: 10;
  ${flexCenter}
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: var(--border-radius-default);
  box-shadow: ${(props) =>
    props.$darkMode
      ? "0rem 1rem 2.4rem 1.4rem rgba(18, 18, 18, 0.2);"
      : "none"};
  background-color: ${(props) => props.$theme};
  transition: all 0.3s;
  overflow: hidden;
  ${(props) =>
    selectedAnimation(
      props.$animationType,
      props.$animationTime,
      props.$animationFadeFrom,
      props.$animationFadeTo
    )}

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
  background-image: radial-gradient(
    circle,
    rgba(31, 41, 55, 0.8) 0%,
    rgba(31, 41, 55, 0.6) 100%
    );
  transition: all 0.3s;
  opacity: 0;
  visibility: hidden;
`;

const ContactLink = styled.a`
  position: relative;
  font-weight: 500;
  font-size: 2.4rem;
  color: #f9fafb;
  letter-spacing: var(--letter-spacing-default);
  transition: all 0.3s;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2.4px;
    border-radius: 8px;
    background-color: #f9fafb;
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

interface ContactItemProps {
  option: ContactItem;
  animationType: AnimationType;
  animationTime: number;
  animationFadeFrom: number;
  animationFadeTo: number;
}

function ContactBox({
  option,
  animationType,
  animationTime,
  animationFadeFrom,
  animationFadeTo,
}: ContactItemProps) {
  const { inDarkMode } = useDarkMode();

  return (
    <StyledContactItem
      $darkMode={inDarkMode}
      tabIndex={0}
      $theme={option?.theme || "#fff"}
      $animationTime={animationTime}
      $animationType={animationType}
      $animationFadeFrom={animationFadeFrom}
      $animationFadeTo={animationFadeTo}
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

export default ContactBox;
