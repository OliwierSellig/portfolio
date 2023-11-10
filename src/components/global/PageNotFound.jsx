import styled from "styled-components";
import { absoluteFull, flexCenter } from "../../styles/Mixins";
import { useDarkMode } from "../../contexts/DarkModeContext";

const ErrorMessage = styled.p`
  ${absoluteFull}
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 6px;
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
    font-size: 2.8rem;
    font-weight: 500;
  }

  & img {
    width: 6rem;
    height: 6rem;
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
