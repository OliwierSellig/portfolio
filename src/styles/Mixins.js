import { fadeHorizontal, fadeIn, fadeVertical } from "./Animations";
import { css } from "styled-components";

export const tile = css`
  border-radius: var(--border-radius-default);
  background-color: var(--color-background);
`;

export const backgroundCenter = css`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const absoluteFull = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const selectedAnimation = (
  animationType,
  animationTime,
  fadeCoordStart,
  fadeCoordsEnd
) =>
  css`
    animation: ${animationType === "fadeIn"
        ? fadeIn
        : animationType === "fadeHorizontal"
        ? fadeHorizontal(fadeCoordStart, fadeCoordsEnd)
        : animationType === "fadeVertical"
        ? fadeVertical(fadeCoordStart, fadeCoordsEnd)
        : "none"}
      ${animationTime}s;
  `;
