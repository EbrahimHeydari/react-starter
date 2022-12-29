import React, { useContext } from 'react'
import { LoginContext } from '../../ContextAPI/contexts/LoginContext'
import { ThemeContext } from '../../ContextAPI/contexts/ThemeContext'

const NavbarHook = () => {
  const { isLight, light, dark } = useContext(ThemeContext)
  const { login, ChangeLogin } = useContext(LoginContext)
  const theme = isLight ? light : dark

  return (
    <nav
      className='navbar'
      style={{ background: theme.item, color: theme.text }}>
      <p className='login' onClick={ChangeLogin}>
        {login ? 'خوش آمدید' : 'لطفا وارد شوید'}
      </p>
      <h1>
        <ul>
          <li>خانه</li>
          <li>ورود</li>
          <li>جشنواره</li>
          <li>پشتیبانی</li>
        </ul>
      </h1>
    </nav>
  )
}

export default NavbarHook
