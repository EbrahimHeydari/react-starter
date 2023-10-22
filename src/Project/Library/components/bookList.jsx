import useBookStore from '../store/bookStore'
import BookDetail from './bookDetails'

const BookList = () => {
	const { books, isLight, light, dark } = useBookStore(state => state)
	const theme = isLight ? light : dark

	return books.length ? (
		<div
			className='list-item'
			style={{ background: theme.item, color: theme.color }}>
			<ul>
				{books.map(book => {
					return (
						<BookDetail
							key={book.id}
							book={book}
						/>
					)
				})}
			</ul>
		</div>
	) : (
		<div style={{ color: theme.color }}>
			<p>هیچ کتابی یافت نشد :)</p>
		</div>
	)
}

export default BookList
