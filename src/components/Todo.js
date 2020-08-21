import React from "react"
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

function Todo({ todo, onRemoveTodo, onToggleCompletion, onUpdateTodo }) {
  const { id, task, completed } = todo
  const [isEditing, toggleIsEditing] = useToggleState(false)

  const textStyle = {
    textDecoration: completed ? "line-through" : "none",
  }

  return (
    <ListItem>
      {isEditing ? (
        <EditTodo
          onUpdateTodo={onUpdateTodo}
          todo={todo}
          onEditComplete={toggleIsEditing}
        />
      ) : (
        <>
          <Checkbox
            checked={completed}
            onClick={() => onToggleCompletion(id)}
          />
          <ListItemText style={textStyle}>{task}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => onRemoveTodo(id)}>
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
