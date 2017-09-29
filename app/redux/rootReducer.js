import {combineReducers} from 'redux'

import reduxButton from 'Redux/ducks/reduxButton-duck'
import reduxButtonCount from 'Redux/ducks/reduxButtonCount-duck'
import buttonInfo from 'Redux/ducks/buttonInfo-duck'

const rootReducer = combineReducers({
	reduxButton,
	reduxButtonCount,
	buttonInfo,
})

export default rootReducer
