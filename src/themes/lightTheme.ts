import baseTheme from './baseTheme';
import { Theme } from './types';

const lightTheme: Theme = {
  ...baseTheme,
  colors: {
    primary: '#db7e32',
    background: '#fff',
    primaryText: '#333',
    lightText: '#cdcdcd',
  },
}

export default lightTheme
