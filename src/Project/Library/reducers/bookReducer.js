export const bookReducer = (state, action) => {

    var randomId = Math.round(Math.random() * 999999999);

    switch (action.type) {
        case 'ADD_BOOK':
            return (
                [...state, {
                    title: action.book.title,
                    author: action.book.author,
                    id: randomId
                }]
            )

        case 'REMOVE_BOOK':
            return  state.filter( book => book.id !== action.id)

        default:
            return state
    }
}