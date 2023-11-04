import { keyframes } from "styled-components";

export const fadeIn = keyframes`
0% {
    opacity: 0;
}

100% {
    opacity: 1;
}
`;

export const fadeFromTop = keyframes`
0% {
    transform: translateY(-100%);
    opacity: 0;
}

100% {
    transform: translateY(0%);
    opacity: 1;
}
`;

export const fadeFromLeft = keyframes`
0% {
    transform: translateX(-10%);
    opacity: 0;
}

100% {
    transform: translateX(0%);
    opacity: 1;
}
`;

export const fadeFromBottom = keyframes`
0% {
    transform: translateY(100%);
    opacity: 0;
}

100% {
    transform: translateX(0%);
    opacity: 1;
}
`;
