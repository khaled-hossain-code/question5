import React from "react"
import { TextField } from "@material-ui/core"
import useInputState from "../hooks/useInputState"

function EditTodo({ todo: { id, task }, onUpdateTodo, onEditComplete }) {
  const [taskText, setTaskText] = useInputState(task)

  const handleSubmit = (event) => {
    event.preventDefault()
    onUpdateTodo(id, taskText)
    onEditComplete()
  }

  return (
    <form
      style={{
        width: "70%",
        margin: "4px 0 4px 1rem"
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        value={taskText}
        onChange={setTaskText}
        fullWidth
        autoFocus
      />
    </form>
  )
}

export default EditTodo
