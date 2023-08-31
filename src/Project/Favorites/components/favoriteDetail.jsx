import { FavoriteContext } from '../contexts/favorite'
import { ThemeContext } from '../contexts/theme'
import remove from './../delete.svg'
import { useContext } from 'react'

const FavoriteDetail = ({ favorite }) => {
  const { dispatch } = useContext(FavoriteContext)
  const { isLight, light, dark } = useContext(ThemeContext)
	const theme = isLight ? light : dark

  return (
		<li style={{ background: theme.bg }}>
			<img
				src={remove}
				alt='delete'
				width='20'
				className='delete'
				onClick={() => dispatch({ type: 'REMOVE_FAVORITE', id: favorite.id })}
			/>
			<div className='title'>
				عنوان:
				{` ${favorite.name} `}
			</div>
			<div className='subtitle'>
				توضیحات:
				{` ${favorite.description} `}
			</div>
		</li>
	)
}

export default FavoriteDetail
