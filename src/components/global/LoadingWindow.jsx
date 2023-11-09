import styled from "styled-components";
import Loader from "./Loader";
import { absoluteFull, flexCenter } from "../../styles/Mixins";

const StyledContainer = styled.div`
  ${absoluteFull}
  ${flexCenter}
  padding: 2.4rem;
  flex-direction: column;
  gap: 1.4rem;
`;

const LoadingText = styled.span`
  font-size: 2.4rem;
  font-weight: 500;
  letter-spacing: var(--letter-sapcing-default);
`;

function LoadingWindow() {
  return (
    <StyledContainer>
      <Loader size={15} />
      <LoadingText>Loading the data...</LoadingText>
    </StyledContainer>
  );
}

export default LoadingWindow;
