import React from "react"
import { connect } from "react-redux"
import { Paper, TextField } from "@material-ui/core"
import useInputState from "../hooks/useInputState"
import { addTodo } from "../redux/todo/todo.actions.js"

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState()

  const handleSubmit = (event) => {
    event.preventDefault()
    addTodo(value)
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

const mapDispatchToProps = (dispatch) => ({
  addTodo: (taskText) => dispatch(addTodo(taskText)),
})

export default connect(undefined, mapDispatchToProps)(TodoForm)
