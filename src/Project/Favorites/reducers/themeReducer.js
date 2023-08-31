const ThemeReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE_THEME':
			return !state

		default:
			return state
	}
}

export default ThemeReducer