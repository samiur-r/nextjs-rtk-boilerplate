import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import createSagaMiddleware from 'redux-saga'

import { config } from 'utils/config'
import rootReducer from './reducers'
import rootSaga from './sagas'

const saga = createSagaMiddleware()

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: [saga],
    devTools: config.isDevEnv
  })

saga.run(rootSaga)

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>

export const reduxWrapper = createWrapper(makeStore, { debug: config.isDevEnv })
