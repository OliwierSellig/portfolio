import { css } from "styled-components";

export const tile = css`
  background-color: var(--color-background);
  border-radius: var(--border-radius-default);
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
  height: 100%;
  width: 100%;
`;
