import { createContext } from 'react'
import lightTheme from './lightTheme'
import darkTheme from './darkTheme'
import { ToggleThemeType } from '@src/ThemeProvider'

const ToggleThemeContext = createContext<ToggleThemeType>({
  changeTheme: () => {},
  themeState: null
})

export { lightTheme, darkTheme, ToggleThemeContext }
