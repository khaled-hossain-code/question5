import React from "react"
import { connect } from "react-redux"
import { TextField } from "@material-ui/core"
import useInputState from "../hooks/useInputState"
import { updateTodo } from "../redux/todo/todo.actions.js"

function EditTodo({ todo: { id, task }, onEditComplete, updateTodo }) {
  const [taskText, setTaskText] = useInputState(task)

  const handleSubmit = (event) => {
    event.preventDefault()
    updateTodo({ id, taskText })
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

const mapDispatchToProps = (dispatch) => ({
  updateTodo: (updatedTodo) => dispatch(updateTodo(updatedTodo)),
})

export default connect(undefined, mapDispatchToProps)(EditTodo)
