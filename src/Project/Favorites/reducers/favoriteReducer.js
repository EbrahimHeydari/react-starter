import { v4 as uuid } from 'uuid'

const FavoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [
        ...state,
        {
          name: action.favorite.name,
          description: action.favorite.description,
          id: uuid(),
        },
      ]
    case 'REMOVE_FAVORITE':
      return state.filter(music => music.id !== action.id)

    default:
      return state
  }
}

export default FavoriteReducer