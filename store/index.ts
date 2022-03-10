import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'

const saga = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: [saga]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
