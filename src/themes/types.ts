export type BaseTheme = {
  themeTransitionSpeed: number,
  themeTransition: (property: string) => any,
}

export type Theme = BaseTheme & {
  colors: {
    primary: string,
    background: string,
    primaryText: string,
  }
}