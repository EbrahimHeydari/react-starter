import useBookStore from '../store/bookStore'
import remove from '../delete.svg'

const BookDetail = ({ book }) => {
	const { removeBook, isLight, light, dark } = useBookStore(state => state)
	const theme = isLight ? light : dark

	return (
		<li style={{ background: theme.bg }}>
			<img
				className='delete'
				src={remove}
				alt='delete'
				width='20'
				onClick={() => removeBook(book.id)}
			/>
			<div className='title'>
				عنوان:
				{` ${book.title} `}
			</div>
			<div className='subtitle'>
				مولف:
				{` ${book.author} `}
			</div>
		</li>
	)
}

export default BookDetail
