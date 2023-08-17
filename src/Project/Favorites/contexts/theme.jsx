import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

const FavoriteTheme = props => {
  const [isLight, setLight] = useState(true)
  const [light] = useState({
    text: '#555',
    item: '#ddd',
    bg: '#eee',
    color: 'teal',
  })
  const [dark] = useState({
    text: '#ddd',
    item: '#333',
    bg: '#555',
    color: 'orange',
  })

  const setTheme = () => setLight(isLight => (isLight = !isLight))

  return (
    <ThemeContext.Provider value={{ isLight, light, dark, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default FavoriteTheme
