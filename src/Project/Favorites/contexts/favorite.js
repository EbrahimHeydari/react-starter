import React, { useReducer, createContext, useContext, useEffect } from 'react'
import { FavoriteReducer } from '../reducers/favoriteReducer'
import { ThemeContext } from './theme'

export const FavoriteContext = createContext()

const FavoriteProvider = props => {
  // use reducer
  const { isLight, light, dark } = useContext(ThemeContext)
  const theme = isLight ? light : dark

  const [favorites, dispatch] = useReducer(FavoriteReducer, [], () => {
    const data = localStorage.getItem('Favorite')
    return data ? JSON.parse(data) : []
  })

  useEffect(() => {
    localStorage.setItem('Favorite', JSON.stringify(favorites))
  }, [favorites])

  return (
    <FavoriteContext.Provider value={{ favorites, dispatch }}>
      <div className='box' style={{ background: theme.bg }}>
        {props.children}
      </div>
    </FavoriteContext.Provider>
  )
}

export default FavoriteProvider
