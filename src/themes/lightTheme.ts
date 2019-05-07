import baseTheme from './baseTheme'
import { Theme } from './types'

const lightTheme: Theme = {
  ...baseTheme,
  colors: {
    primary: '#cc7126',
    background: '#fff',
    primaryText: '#333',
    fadedText: '#696969',
  },
}

export default lightTheme
