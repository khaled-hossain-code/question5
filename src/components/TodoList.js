import React from "react"
import { Paper, List, Divider } from "@material-ui/core"
import { useSelector } from "react-redux"
import Todo from "./Todo"

function TodoList() {
  const { todos } = useSelector((state) => {
    console.log({ state })
    return state.todosStore
  })

  return todos.length > 0 ? (
    <Paper>
      <List>
        {todos.map((todo, index) => (
          <React.Fragment key={todo.id}>
            <Todo todo={todo} />
            {index !== todos.length - 1 ? <Divider /> : null}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  ) : null
}

export default TodoList
