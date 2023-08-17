import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/theme'

const ChangeTheme = () => {
	const { isLight, light, dark, setTheme } = useContext(ThemeContext)
	const theme = isLight ? light : dark

	return (
		<button
			type='submit'
			onClick={setTheme}
			className='send'
			style={{ background: theme.item, color: theme.text }}>
			تغییر حالت
		</button>
	)
}

export default ChangeTheme
