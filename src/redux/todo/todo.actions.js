import {
  ADD_TODO,
  REMOVE_TODO,
  REMOVE_COMPLETED_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  UPDATE_TODO_DISPLAY,
} from "./todo.types"

export const addTodo = (newTodoText) => ({
  type: ADD_TODO,
  payload: newTodoText,
})

export const removeTodo = (todoId) => ({
  type: REMOVE_TODO,
  payload: todoId,
})

export const removeCompletedTodo = () => ({
  type: REMOVE_COMPLETED_TODO,
  payload: null,
})

export const toggleCompletion = (todoId) => ({
  type: TOGGLE_TODO,
  payload: todoId,
})

export const updateTodo = (updatedTodo) => ({
  type: UPDATE_TODO,
  payload: updatedTodo,
})

export const updateTodoDisplay = (isDisplaying) => ({
  type: UPDATE_TODO_DISPLAY,
  payload: isDisplaying,
})
