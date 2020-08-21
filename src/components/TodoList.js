import React from "react"
import { Paper, List, ListItem, ListItemText, Divider } from "@material-ui/core"
import Todo from "./Todo"

function TodoList({ todos, onRemoveTodo, onToggleCompletion, onUpdateTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((todo, index) => (
          <>
            <Todo
              todo={todo}
              key={todo.id}
              onRemoveTodo={onRemoveTodo}
              onToggleCompletion={onToggleCompletion}
              onUpdateTodo={onUpdateTodo}
            />
            {index !== todos.length - 1 ? <Divider /> : null}
          </>
        ))}
      </List>
    </Paper>
  )
}

export default TodoList
