import { AxiosResponse } from 'axios'
import API from './api'
import { TodoType } from '../types'

export const getTodos = async (): Promise<AxiosResponse<TodoType[]>> => {
  const response = await API({
    url: '/todos',
    method: 'GET',
    data: {}
  })

  return response
}

export const postTodo = async (
  todo: TodoType
): Promise<AxiosResponse<TodoType[]>> => {
  const response = await API({
    url: '/todos',
    method: 'POST',
    data: todo
  })

  return response
}

export const updateTodo = async (payload: {
  id: string
  todo: TodoType
}): Promise<AxiosResponse<TodoType[]>> => {
  const response = await API({
    url: '/todos',
    method: 'PUT',
    data: payload
  })

  return response
}

export const removeTodo = async (
  id: string
): Promise<AxiosResponse<TodoType[]>> => {
  const response = await API({
    url: '/todos',
    method: 'DELETE',
    data: { id }
  })

  return response
}
