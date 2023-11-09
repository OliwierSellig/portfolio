import styled from "styled-components";
import { fadeVertical } from "../../styles/Animations";

const PlayerContainer = styled.button`
  grid-column: 1/3;
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: var(--border-radius-default);
  background-color: #222;
  justify-self: center;
  overflow: hidden;
  animation: ${fadeVertical(20, 0)} 1s;

  @media only screen and (max-width: 840px) {
    grid-column: 1/-1;
  }

  & iframe {
    border: none;
  }
`;

function ExplanationVideo({ video }) {
  return (
    <PlayerContainer>
      <iframe
        width="100%"
        height="100%"
        src={video}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </PlayerContainer>
  );
}

export default ExplanationVideo;
