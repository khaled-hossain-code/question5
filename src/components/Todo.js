import React, { memo } from "react"
import { connect } from "react-redux"
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
import { toggleCompletion, removeTodo } from "../redux/todo/todo.actions.js"

function Todo({ todo, toggleCompletion, removeTodo }) {
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
          <Checkbox checked={completed} onClick={() => toggleCompletion(id)} />
          <ListItemText style={textStyle}>{task}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
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

const mapDispatchToProps = (dispatch) => ({
  toggleCompletion: (todoId) => dispatch(toggleCompletion(todoId)),
  removeTodo: (todoId) => dispatch(removeTodo(todoId)),
})

export default connect(undefined, mapDispatchToProps)(memo(Todo))
