import { css } from "styled-components";

export const fluidType = (
  minVw: number,
  maxVw: number,
  minFontSize: number,
  maxFontSize: number
) => css`
  font-size: ${ minFontSize }px;

  @media screen and (min-width: ${ minVw }px) {
    font-size: calc(
      ${ minFontSize }px + (${ maxFontSize } - ${ minFontSize }) *
        ((100vw - ${ minVw }px) / (${ maxVw } - ${ minVw }))
    );
  }

  @media screen and (min-width: ${ maxVw }px) {
    font-size: ${ maxFontSize }px;
  }
`