import React, { useContext } from "react"
import { TextField } from "@material-ui/core"
import useInputState from "../hooks/useInputState"
import { DispatchContext } from "../contexts/todosContext"

function EditTodo({ todo: { id, task }, onEditComplete }) {
  const dispatchTodoAction = useContext(DispatchContext)
  const [taskText, setTaskText] = useInputState(task)

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatchTodoAction({ type: "UPDATE_TODO", payload: { id, taskText } })
    onEditComplete()
  }

  return (
    <form
      style={{
        width: "70%",
        margin: "4px 0 4px 1rem",
      }}
      onSubmit={handleSubmit}
    >
      <TextField value={taskText} onChange={setTaskText} fullWidth autoFocus />
    </form>
  )
}

export default EditTodo
