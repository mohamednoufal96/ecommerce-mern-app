import { css } from "styled-components";

export const mobileDevice = (props) => {
    return css`
        @media screen and (max-width: 390px) {
            ${props}
        }
    `;
};
export const smallScreen = (props) => {
    return css`
        @media screen and (max-width: 570px) {
            ${props}
        }
    `;
};
export const mediumScreen = (props) => {
    return css`
        @media screen and (max-width: 770px) {
            ${props}
        }
    `;
};
export const largeScreen = (props) => {
    return css`
        @media screen and (max-width: 970px) {
            ${props}
        }
    `;
};
