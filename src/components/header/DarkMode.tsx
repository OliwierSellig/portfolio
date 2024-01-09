import { fadeHorizontal } from "../../styles/Animations";
import { useDarkMode } from "../../contexts/DarkModeContext";
import styled from "styled-components";

interface DarkModeToggle {
  checked: boolean;
}

const DarkModeToggle = styled.button<DarkModeToggle>`
  position: relative;
  z-index: 300;
  width: 8.4rem;
  aspect-ratio: 2/1;
  border: 3px solid
    ${(props) =>
      props.checked ? "var(--color-night-border)" : "var(--color-day-border)"};
  border-radius: var(--border-radius-default);
  background-color: ${(props) =>
    props.checked
      ? "var(--color-night-background)"
      : "var(--color-day-background)"};
  transition: all 0.3s ease-in-out;
  animation: ${fadeHorizontal(-20, 0)} 1s;
  cursor: pointer;

  &:hover,
  &:focus {
    &::after {
      box-shadow: 0 0 1.2rem 0.4rem
        ${(props) =>
          props.checked
            ? "var(--color-moon-background)"
            : "var(--color-sun-background)"};
    }
  }

  &::after {
    content: "";
    position: absolute;
    left: ${(props) => (props.checked === true ? "4.4rem" : "0.2rem")};
    display: block;
    width: 3.4rem;
    aspect-ratio: 1/1;
    border: 3px solid
      ${(props) =>
        props.checked ? "var(--color-moon-border)" : "var(--color-sun-border)"};
    border-radius: 50%;
    background-color: ${(props) =>
      props.checked
        ? "var(--color-moon-background)"
        : "var(--color-sun-background)"};
    transform: translateY(-50%);
    transition: all 0.3s ease-in-out;
  }
`;

function DarkMode() {
  const { inDarkMode, setInDarkMode } = useDarkMode();

  return (
    <DarkModeToggle
      checked={inDarkMode}
      onClick={() => setInDarkMode((prev) => !prev)}
      aria-label="Toggle Dark Mode"
    />
  );
}

export default DarkMode;
