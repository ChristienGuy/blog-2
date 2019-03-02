import { createContext } from 'react'
import lightTheme from './lightTheme'
import darkTheme from './darkTheme'

const ToggleThemeContext = createContext({})

export { lightTheme, darkTheme, ToggleThemeContext }
