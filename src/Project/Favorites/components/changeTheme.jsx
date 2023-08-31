import { ThemeContext } from '../contexts/theme'
import { useContext } from 'react'

const ChangeTheme = () => {
	const { isLight, light, dark, dispatch } = useContext(ThemeContext)
	const theme = isLight ? light : dark

	return (
		<button
			type='submit'
			onClick={() => dispatch({ type: 'CHANGE_THEME' })}
			className='send'
			style={{ background: theme.item, color: theme.text }}>
			تغییر حالت
		</button>
	)
}

export default ChangeTheme
