import React, { useContext } from "react"
import { Paper, List, Divider } from "@material-ui/core"
import Todo from "./Todo"
import { TodosContext } from "../contexts/todosContext"

function TodoList() {
  const todos = useContext(TodosContext)

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
