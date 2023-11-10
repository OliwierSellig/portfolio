import { Link } from "react-router-dom";
import { fadeHorizontal } from "../../styles/Animations";
import { useDarkMode } from "../../contexts/DarkModeContext";
import styled from "styled-components";

const StyledButton = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 5rem;
  padding: 1.2rem 4.2rem;
  border-radius: var(--border-radius-default);
  background-color: var(--color-grey-300);
  box-shadow: var(--back-button-shadow);
  font-weight: 500;
  font-size: 1.8rem;
  letter-spacing: var(--letter-spacing-default);
  cursor: pointer;
  animation: ${fadeHorizontal(10, 0)} 1s;
  overflow: hidden;

  &,
  & * {
    transition: transform 0.3s, background-color 0.2s;
  }

  &::after {
    content: 'Back to "/"';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(200%, -50%);
    transition: transform 0.2s;
  }

  &:hover,
  &:focus {
    background-color: var(--color-grey-350);

    &::after {
      transform: translate(-50%, -50%);
    }

    & span {
      transform: translateX(-250%);
    }

    & img {
      transform: translateX(-600%);
    }
  }

  & img {
    width: 3rem;
    height: 3rem;
  }
`;

function GoBackButton({ dest = "/" }) {
  const { inDarkMode } = useDarkMode();

  return (
    <StyledButton to={dest}>
      <img
        src={`/svg/arrow-left-${inDarkMode ? "dark" : "light"}.svg`}
        alt="Arrow Back"
      />
      <span>Go Back</span>
    </StyledButton>
  );
}

export default GoBackButton;
