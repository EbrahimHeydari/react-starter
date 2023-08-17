import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/theme'

const ToggleTheme = () => {
  const { isLight, light, dark, ToggleTheme } = useContext(ThemeContext)
  const theme = isLight ? light : dark

  return (
    <button
      onClick={ToggleTheme}
      className='send'
      style={{ background: theme.item, color: theme.text }}>
      تغییر حالت
    </button>
  )
}

export default ToggleTheme
