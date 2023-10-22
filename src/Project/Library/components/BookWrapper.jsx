import useBookStore from '../store/bookStore'

const BookWrapper = ({ children }) => {
	const { isLight, light, dark } = useBookStore(state => state)
	const theme = isLight ? light : dark

	return (
		<div className='App'>
			<div
				className='wrapper'
				style={{ background: theme.bg }}>
				{children}
			</div>
		</div>
	)
}

export default BookWrapper
