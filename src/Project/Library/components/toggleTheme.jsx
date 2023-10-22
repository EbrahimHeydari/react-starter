import useBookStore from '../store/bookStore'

const ToggleTheme = () => {
	const { isLight, light, dark, toggleTheme } = useBookStore(state => state)
	const theme = isLight ? light : dark

	return (
		<button
			onClick={toggleTheme}
			className='send'
			style={{ background: theme.item, color: theme.text }}>
			تغییر حالت
		</button>
	)
}

export default ToggleTheme
