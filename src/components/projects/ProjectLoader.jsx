import styled from "styled-components";
import { flexCenter } from "../../styles/Mixins";
import Loader from "../global/Loader";

const StyledLoader = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background-color: var(--color-background);
  border-radius: var(--border-radius-default);
  ${flexCenter}
`;

function ProjectLoader() {
  return (
    <StyledLoader>
      <Loader />
    </StyledLoader>
  );
}

export default ProjectLoader;
