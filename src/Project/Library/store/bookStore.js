import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { v4 as uuid } from 'uuid'

const bookStore = set => ({
	books: [],
	isLight: true,
	light: { text: '#555', item: '#ddd', bg: '#eee', color: 'teal' },
	dark: { text: '#ddd', item: '#333', bg: '#555', color: 'orange' },
	addBook: book => {
		set(state => ({
			...state,
			books: [{ ...book, id: uuid() }, ...state.books],
		}))
	},
	removeBook: bookId => {
		set(state => ({
			...state,
			books: state.books.filter(book => book.id !== bookId),
		}))
	},
	toggleTheme: () => {
		set(state => ({
			...state,
			isLight: !state.isLight,
		}))
	},
})

const useBookStore = create(
	devtools(
		persist(bookStore, {
			name: 'books',
		})
	)
)

export default useBookStore
