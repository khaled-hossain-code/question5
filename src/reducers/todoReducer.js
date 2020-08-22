import { v4 as uuidv4 } from "uuid"

const todoReducer = (state, action) => {
  for (const key in actionHandler) {
    if (key === action.type) {
      return actionHandler[key](state, action.payload)
    }
  }

  return state
}

const addTodo = (todos, newTodoText) => {
  const newTodo = {
    id: uuidv4(),
    task: newTodoText,
    completed: false,
  }

  return [...todos, newTodo]
}

const removeTodo = (todos, todoId) => {
  return todos.filter((todo) => todo.id !== todoId)
}

const toggleCompletion = (todos, todoId) => {
  return todos.map((todo) =>
    todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
  )
}

const updateTodo = (todos, { id, taskText }) => {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, task: taskText } : todo
  )
}

const actionHandler = {
  ADD_TODO : addTodo,
  REMOVE_TODO : removeTodo,
  TOGGLE_TODO : toggleCompletion,
  UPDATE_TODO : updateTodo,
}

export default todoReducer
