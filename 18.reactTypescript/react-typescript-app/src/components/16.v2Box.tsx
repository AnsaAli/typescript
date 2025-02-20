import React,{useContext} from 'react'
import { ThemeContext } from './16.UseContextHook.tsx'

const Box: React.FC= () => {
    const theme= useContext(ThemeContext)
  return (
    <div >
      <p style={{ backgroundColor: theme.primary.main, color: theme.primary.text, padding: '10px' }}>Style from primary</p>
      <p style={{ backgroundColor: theme.secondary.main, color: theme.secondary.text, padding: '10px' }}>From secondary</p>
    </div>
  )
}

export default Box