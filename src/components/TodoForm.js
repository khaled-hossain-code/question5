import React, { useContext } from "react"
import { Paper, TextField } from "@material-ui/core"
import useInputState from "../hooks/useInputState"
import { todosContext } from "../contexts/todosContext"

function TodoForm() {
  const { dispatchTodoAction } = useContext(todosContext)
  const [value, handleChange, reset] = useInputState()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatchTodoAction({ type: "ADD_TODO", payload: value })
    reset()
  }

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add Todo"
          fullWidth
        />
      </form>
    </Paper>
  )
}

export default TodoForm
