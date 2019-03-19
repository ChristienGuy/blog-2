import baseTheme from './baseTheme';
import { Theme } from './types';

const darkTheme: Theme = {
  ...baseTheme,
  colors: {
    primary: '#ea8635',
    background: '#222',
    primaryText: '#ddd',
  },
}

export default darkTheme;
