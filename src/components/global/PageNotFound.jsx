import { absoluteFull } from "../../styles/Mixins";
import { useDarkMode } from "../../contexts/DarkModeContext";
import styled from "styled-components";

const ErrorMessage = styled.p`
  ${absoluteFull}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 6px;
  padding: 2.4rem;
`;

const ErrorSign = styled.span`
  font-weight: 500;
  font-size: 8rem;
`;

const ErrorText = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;

  & span {
    font-weight: 500;
    font-size: 2.8rem;
  }

  & img {
    width: 6rem;
    height: 6rem;
  }

  @media only screen and (max-width: 425px) {
    flex-direction: column;
    align-items: start;
    gap: 2.4rem;
  }
`;

function PageNotFound() {
  const { inDarkMode } = useDarkMode();

  return (
    <ErrorMessage>
      <ErrorSign>404</ErrorSign>
      <ErrorText>
        <span>We couldn't find the page you were looking for</span>
        <img
          src={`/svg/ghost-${inDarkMode ? "dark" : "light"}.svg`}
          alt="Ghost Icon"
        />
      </ErrorText>
    </ErrorMessage>
  );
}

export default PageNotFound;
