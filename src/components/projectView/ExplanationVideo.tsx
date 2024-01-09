import { fadeVertical } from "../../styles/Animations";
import styled from "styled-components";

const PlayerContainer = styled.button`
  justify-self: center;
  grid-column: 1/3;
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: var(--border-radius-default);
  background-color: #222;
  animation: ${fadeVertical(20, 0)} 1s;
  overflow: hidden;

  @media only screen and (max-width: 840px) {
    grid-column: 1/-1;
  }

  & iframe {
    border: none;
  }
`;

interface ExplanationVideoProps {
  video: string;
}

function ExplanationVideo({ video }: ExplanationVideoProps) {
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
