// Actions
const REDUX_BUTTON_COUNT_ACTION = 'app/Main/REDUX_BUTTON_COUNT_ACTION'

// Reducer
const initialState = {
	count: 0,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case REDUX_BUTTON_COUNT_ACTION:
			return {...state, count: action.count}
		default:
			return state
	}
}

// Action Creators
export const reduxButtonCountAction = count => ({
	type: REDUX_BUTTON_COUNT_ACTION,
	count,
})
