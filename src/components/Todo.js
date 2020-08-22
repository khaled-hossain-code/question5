import React, { useContext } from "react"
import {
  IconButton,
  ListItemSecondaryAction,
  Checkbox,
  ListItem,
  ListItemText,
} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"
import useToggleState from "../hooks/useToggleState"
import EditTodo from "./EditTodo"
import { DispatchContext } from "../contexts/todosContext"

function Todo({ todo }) {
  const { dispatchTodoAction } = useContext(DispatchContext)
  const { id, task, completed } = todo
  const [isEditing, toggleIsEditing] = useToggleState(false)

  const textStyle = {
    textDecoration: completed ? "line-through" : "none",
  }

  return (
    <ListItem>
      {isEditing ? (
        <EditTodo todo={todo} onEditComplete={toggleIsEditing} />
      ) : (
        <>
          <Checkbox
            checked={completed}
            onClick={() => dispatchTodoAction({type:"TOGGLE_TODO",payload:id})}
          />
          <ListItemText style={textStyle}>{task}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => dispatchTodoAction({type:"REMOVE_TODO",payload:id})}>
              <DeleteIcon></DeleteIcon>
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggleIsEditing}>
              <EditIcon></EditIcon>
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  )
}

export default Todo
