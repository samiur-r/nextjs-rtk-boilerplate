import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TodoType } from '../types'

interface StateType {
  todos: TodoType[]
  status: string // 'idle' | 'loading' | 'finished' | 'error',
  msg: string
}

const initialState: StateType = {
  todos: [],
  status: 'idle',
  msg: ''
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    fetchTodos: (state, action: PayloadAction<TodoType[]>) => {
      state.todos = action.payload
    },
    addTodo: (state, action: PayloadAction<TodoType[]>) => {
      state.todos = action.payload
    },
    editTodo: (state, action: PayloadAction<TodoType[]>) => {
      state.todos = action.payload
    },
    removeTodo: (state, action: PayloadAction<TodoType[]>) => {
      state.todos = action.payload
    },
    updateStatus: (
      state,
      action: PayloadAction<{ status: string; msg: string }>
    ) => {
      state.status = action.payload.status
      state.msg = action.payload.msg
    }
  }
})

export const todoActions = todoSlice.actions

const todoReducer = todoSlice.reducer

export default todoReducer
