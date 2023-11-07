import styled from "styled-components";
import { tile } from "../../styles/Mixins";

const StyledBox = styled.div`
  ${tile}
  aspect-ratio: 4/3;
`;

function ProjectBox() {
  return <StyledBox />;
}

export default ProjectBox;
