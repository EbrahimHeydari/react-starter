import React, { useContext } from 'react'
import { ThemeContext } from '../../ContextAPI/contexts/ThemeContext'

const ChangeThemeHook = () => {
  const { ChangeTheme } = useContext(ThemeContext)

  return <button onClick={ChangeTheme}>تغییر حالت</button>
}

export default ChangeThemeHook
