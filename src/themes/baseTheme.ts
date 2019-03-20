import { css } from "styled-components";
import { BaseTheme } from './types';

const themeTransitionSpeed = 200;

const baseTheme: BaseTheme = {
    themeTransitionSpeed,
    themeTransition: (property: string) => css`
      ${property} ${themeTransitionSpeed}ms ease-out
    `
}

export default baseTheme