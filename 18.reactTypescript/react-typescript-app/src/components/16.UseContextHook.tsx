import React,{createContext} from 'react'
import { theme, Theme } from './16.v1them.ts'


type ThemeContextProviderProps = {
    children : React.ReactNode
}
 export const ThemeContext = createContext<Theme>(theme);

 export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({children}: ThemeContextProviderProps)=>{
    return(
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
 }