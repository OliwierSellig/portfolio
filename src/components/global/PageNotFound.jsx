import styled from "styled-components";
import { absoluteFull, flexCenter } from "../../styles/Mixins";

const Container = styled.section`
  ${absoluteFull}
  ${flexCenter}
  flex-direction: column;
  gap: 1.4rem;
`;

const ErrorMessage = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ErrorSign = styled.span`
  font-weight: 500;
  font-size: 4rem;
`;

const ErrorText = styled.span`
  font-size: 2.4rem;
  font-weight: 500;
`;

function PageNotFound() {
  return (
    <Container>
      <ErrorMessage>
        <ErrorSign>404</ErrorSign>
        <ErrorText>We couldn't find the page you were looking for</ErrorText>
      </ErrorMessage>
    </Container>
  );
}

export default PageNotFound;
