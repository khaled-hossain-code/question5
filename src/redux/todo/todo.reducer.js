import _ from "lodash"
import { v4 as uuidv4 } from "uuid"
import {
  ADD_TODO,
  REMOVE_TODO,
  REMOVE_COMPLETED_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  UPDATE_TODO_DISPLAY,
} from "./todo.types"

const INITIAL_STATE = {
  todos: [],
  isDisplaying: "all",
}

const todoReducer = (state = INITIAL_STATE, { type, payload }) => {
  if (!Object.keys(selectAction).includes(type)) return state

  const currentState = _.cloneDeep(state)

  return selectAction[type](currentState, payload)
}

const addTodo = (newState, newTodoText) => {
  const newTodo = {
    id: uuidv4(),
    task: newTodoText,
    completed: false,
  }

  newState.todos.push(newTodo)

  return newState
}

const removeTodo = (newState, todoId) => {
  newState.todos = newState.todos.filter((todo) => todo.id !== todoId)

  return newState
}

const removeCompletedTodo = (newState) => {
  newState.todos = newState.todos.filter((todo) => !todo.completed)

  return newState
}

const toggleCompletion = (newState, todoId) => {
  newState.todos = newState.todos.map((todo) =>
    todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
  )

  return newState
}

const updateTodo = (newState, { id, taskText }) => {
  newState.todos = newState.todos.map((todo) =>
    todo.id === id ? { ...todo, task: taskText } : todo
  )

  return newState
}

const updateTodoDisplay = (newState, isDisplaying) => {
  newState.isDisplaying = isDisplaying

  return newState
}

const selectAction = {
  [ADD_TODO]: addTodo,
  [REMOVE_TODO]: removeTodo,
  [REMOVE_COMPLETED_TODO]: removeCompletedTodo,
  [TOGGLE_TODO]: toggleCompletion,
  [UPDATE_TODO]: updateTodo,
  [UPDATE_TODO_DISPLAY]: updateTodoDisplay,
}

export default todoReducer
