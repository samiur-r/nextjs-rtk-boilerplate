import { combineReducers } from 'redux'

import counterReducer from './counterSlice'

const rootReducer = combineReducers({
  counter: counterReducer
  // add reducer here
})

export default rootReducer
