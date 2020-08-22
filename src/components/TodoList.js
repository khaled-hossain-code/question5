import React from "react"
import { Paper, List, Divider } from "@material-ui/core"
import { useSelector } from "react-redux"
import { createStructuredSelector } from "reselect"
import {
  selectCompletedTodos,
  selectActiveTodos,
} from "../redux/todo/todo.selector"
import Todo from "./Todo"

function TodoList() {
  const { todos, isDisplaying } = useSelector((state) => {
    return state.todosStore
  })

  const { completedTodos, activeTodos } = useSelector(
    createStructuredSelector({
      completedTodos: selectCompletedTodos,
      activeTodos: selectActiveTodos,
    })
  )

  const getFilteredTodos = () => {
    if (isDisplaying === "completed") {
      return completedTodos
    } else if (isDisplaying === "active") {
      return activeTodos
    }

    return todos
  }

  const todosToDisplay = getFilteredTodos()

  return todosToDisplay.length > 0 ? (
    <Paper>
      <List>
        {todosToDisplay.map((todo, index) => (
          <React.Fragment key={todo.id}>
            <Todo todo={todo} />
            {index !== todosToDisplay.length - 1 ? <Divider /> : null}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  ) : null
}

export default TodoList
