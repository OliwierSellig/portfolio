import { useState } from "react";
import styled from "styled-components";

const DarkModeToggle = styled.button`
  position: relative;
  width: 8.4rem;
  aspect-ratio: 2/1;
  border-radius: 34px;
  border: 3px solid
    ${(props) =>
      props.checked ? "var(--color-night-border)" : "var(--color-day-border)"};
  background-color: ${(props) =>
    props.checked
      ? "var(--color-night-background)"
      : "var(--color-day-background)"};
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

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
    display: block;
    position: absolute;
    width: 3.4rem;
    transform: translateY(-50%);
    left: ${(props) => (props.checked === true ? "4.4rem" : "0.2rem")};
    border: 3px solid
      ${(props) =>
        props.checked ? "var(--color-moon-border)" : "var(--color-sun-border)"};
    background-color: ${(props) =>
      props.checked
        ? "var(--color-moon-background)"
        : "var(--color-sun-background)"};
    aspect-ratio: 1/1;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
  }
`;

function DarkMode() {
  const [checked, setChecked] = useState(false);

  return (
    <DarkModeToggle
      checked={checked}
      onClick={() => setChecked((prev) => !prev)}
    />
  );
}

export default DarkMode;
