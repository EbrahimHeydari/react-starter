import { FavoriteContext } from '../contexts/favorite'
import { ThemeContext } from '../contexts/theme'
import FavoriteDetail from './favoriteDetail'
import { useContext } from 'react'

const FavoriteList = () => {
  const { favorites } = useContext(FavoriteContext)
  const { isLight, light, dark } = useContext(ThemeContext)
  const theme = isLight ? light : dark

  return favorites.length ? (
    <div
      className='list-item'
      style={{ background: theme.item, color: theme.color }}>
      <ul>
        {favorites.map(favorite => {
          return <FavoriteDetail key={favorite.id} favorite={favorite} />
        })}
      </ul>
    </div>
  ) : (
    <div style={{ color: theme.color }}>
      <p>هیچ موردی پیدا نشد :(</p>
    </div>
  )
}

export default FavoriteList
