import { createSelector } from "reselect"

const selectTodos = (state) => state.todosStore.todos

export const selectCompletedTodos = createSelector([selectTodos], (todos) => {
  return todos.filter((todo) => todo.completed)
})

export const selectActiveTodos = createSelector([selectTodos], (todos) =>
  todos.filter((todo) => !todo.completed)
)
