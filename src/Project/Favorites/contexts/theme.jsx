import ThemeReducer from '../reducers/themeReducer'
import { createContext, useReducer } from 'react'

export const ThemeContext = createContext()

const FavoriteTheme = props => {
	const [isLight, dispatch] = useReducer(ThemeReducer, true)
	const light = {
		text: '#555',
		item: '#ddd',
		bg: '#eee',
		color: 'teal',
	}

	const dark = {
		text: '#ddd',
		item: '#333',
		bg: '#555',
		color: 'orange',
	}

	return (
		<ThemeContext.Provider value={{ isLight, light, dark, dispatch }}>
			{props.children}
		</ThemeContext.Provider>
	)
}

export default FavoriteTheme
