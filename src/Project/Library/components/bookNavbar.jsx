import useBookStore from '../store/bookStore'

const BookNavbar = () => {
	const {books, isLight, light, dark } = useBookStore(state => state)
	const theme = isLight ? light : dark

	return (
		<div
			className='navbar'
			style={{ background: theme.item, color: theme.text }}>
			<h1>لیست کتاب های شما</h1>
			<p>
				تعداد:
				{` ${books.length} `}
			</p>
		</div>
	)
}

export default BookNavbar
