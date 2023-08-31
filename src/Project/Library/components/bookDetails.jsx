import { ThemeContext } from '../contexts/theme'
import { BookContext } from '../contexts/book'
import { useContext } from 'react'
import remove from '../delete.svg'

const BookDetail = ({ book }) => {
	const { removeBook } = useContext(BookContext)
	const { isLight, light, dark } = useContext(ThemeContext)
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
