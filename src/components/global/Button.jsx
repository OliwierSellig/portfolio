import styled from "styled-components";

const StyledButton = styled.button`
  background: var(--color-blue-400);
  border-radius: var(--border-radius-default);
  box-shadow: var(--color-blue-400) 0 10px 20px -10px;
  color: var(--color-grey-50);
  font-weight: 500;
  padding: 1rem 3.2rem;
  display: inline-block;
  font-size: 1.8rem;
  letter-spacing: 0.3px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  word-break: break-word;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.03);
    background: var(--color-blue-500);
    box-shadow: var(--color-blue-500) 0 10px 20px -10px;
  }
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
