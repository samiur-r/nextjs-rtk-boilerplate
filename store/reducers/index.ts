import { combineReducers } from 'redux'

import todosReducer from './todosSlice'

const rootReducer = combineReducers({
  todos: todosReducer
  // add reducer here
})

export default rootReducer
