import {v4 as uuid} from 'uuid';

const GameReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_GAME':
            return [
                ...state ,{
                    name: action.game.name,
                    creator: action.game.creator,
                    platform: action.game.platform,
                    id: uuid()
                }
            ]
        case 'REMOVE_GAME':
            return state.filter( game => game.id !== action.id)
    
        default:
            return state
    }
}

export default GameReducer;