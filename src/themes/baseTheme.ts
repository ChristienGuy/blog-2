import { css } from "styled-components";

const themeTransitionSpeed = 200;

export default {
  themeTransitionSpeed,
  themeTransition: (property: string) => css`
    ${property} ${themeTransitionSpeed}ms ease-out;
  `
}