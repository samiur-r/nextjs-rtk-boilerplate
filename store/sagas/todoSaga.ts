import { call, takeLatest, put } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import * as todoApi from '../apis/todoApi'
import { todoActions } from '../reducers/todosSlice'
import { TodoType } from '../types'

export function* fetchTodosAction() {
  try {
    yield put(todoActions.updateStatus({ status: 'loading', msg: '' }))
    const response: TodoType[] = yield call(todoApi.getTodos)
    yield put(todoActions.fetchTodos(response))
    yield put(todoActions.updateStatus({ status: 'finished', msg: '' }))
  } catch (e: any) {
    yield put(todoActions.updateStatus({ status: 'error', msg: e.message }))
  }
}

export function* addTodoAction(action: PayloadAction<TodoType>) {
  try {
    yield put(todoActions.updateStatus({ status: 'loading', msg: '' }))
    const response: TodoType[] = yield call(todoApi.postTodo, action.payload)
    yield put(todoActions.addTodo(response))
    yield put(todoActions.updateStatus({ status: 'finished', msg: '' }))
  } catch (e: any) {
    yield put(todoActions.updateStatus({ status: 'error', msg: e.message }))
  }
}

export function* editTodoAction(
  action: PayloadAction<{ id: string; todo: TodoType }>
) {
  try {
    yield put(todoActions.updateStatus({ status: 'loading', msg: '' }))
    const response: TodoType[] = yield call(todoApi.updateTodo, action.payload)
    yield put(todoActions.editTodo(response))
    yield put(todoActions.updateStatus({ status: 'finished', msg: '' }))
  } catch (e: any) {
    yield put(todoActions.updateStatus({ status: 'error', msg: e.message }))
  }
}

export function* removeTodoAction(action: PayloadAction<string>) {
  try {
    yield put(todoActions.updateStatus({ status: 'loading', msg: '' }))
    const response: TodoType[] = yield call(todoApi.removeTodo, action.payload)
    yield put(todoActions.fetchTodos(response))
    yield put(todoActions.updateStatus({ status: 'finished', msg: '' }))
  } catch (e: any) {
    yield put(todoActions.updateStatus({ status: 'error', msg: e.message }))
  }
}

export default function* todoSaga() {
  yield takeLatest(todoActions.fetchTodos.type, fetchTodosAction)
  yield takeLatest(todoActions.addTodo.type, addTodoAction)
  yield takeLatest(todoActions.editTodo.type, editTodoAction)
  yield takeLatest(todoActions.removeTodo.type, removeTodoAction)
}
