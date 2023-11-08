import { keyframes } from "styled-components";

export const fadeIn = keyframes`
0% {
    opacity: 0;
}

100% {
    opacity: 1;
}
`;

export const fadeVertical = (start = -10, end = 0) => keyframes`
0% {
    transform: translateY(${start}%);
    opacity: 0;
}

100% {
    transform: translateY(${end}%);
    opacity: 1;
}
`;

export const fadeHorizontal = (start = -10, end = 0) => keyframes`
0% {
    transform: translateX(${start}%);
    opacity: 0;
}

100% {
    transform: translateX(${end}%);
    opacity: 1;
}
`;
