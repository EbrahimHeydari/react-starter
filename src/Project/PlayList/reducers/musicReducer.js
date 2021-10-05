import {v4 as uuid} from 'uuid';

export const MusicReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_MUSIC':
            return (
                [...state, {
                    title: action.music.title,
                    singer: action.music.singer,
                    id: uuid()
                }])

        case 'REMOVE_MUSIC':
            return state.filter( music => music.id !== action.id)
    
        default:
            return state
    }
}