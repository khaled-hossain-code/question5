import React from "react"
import pluralize from "pluralize"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { useSelector } from "react-redux"
import {
  Paper,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Grid,
  Radio,
  Button,
} from "@material-ui/core"
import {
  selectCompletedTodos,
  selectActiveTodos,
} from "../redux/todo/todo.selector"
import {
  updateTodoDisplay,
  removeCompletedTodo,
} from "../redux/todo/todo.actions.js"

function FilterTodo({ updateTodoDisplay, removeCompletedTodo }) {
  const { todos, isDisplaying } = useSelector((state) => {
    return state.todosStore
  })

  const { activeTodos } = useSelector(
    createStructuredSelector({
      completedTodos: selectCompletedTodos,
      activeTodos: selectActiveTodos,
    })
  )

  return todos.length > 0 ? (
    <Paper style={{ margin: "1rem 0", padding: "1rem", position: "relative" }}>
      <Grid container alignItems="center" justify="space-between" spacing={0}>
        <Grid item xs={2}>
          <Typography>
            {activeTodos.length} {pluralize("item", activeTodos.length)} left
          </Typography>
        </Grid>
        <Grid style={{ display: "flex", justifyContent: "center" }} item xs={7}>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="todoShowing"
              name="todoShowing"
              value={isDisplaying}
              onChange={(event) => updateTodoDisplay(event.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="All" />
              <FormControlLabel
                value="active"
                control={<Radio />}
                label="Active"
              />
              <FormControlLabel
                value="completed"
                control={<Radio />}
                label="Completed"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <Button size="small" onClick={removeCompletedTodo}>
            Clear completed
          </Button>
        </Grid>
      </Grid>
    </Paper>
  ) : null
}

const mapDispatchToProps = (dispatch) => ({
  updateTodoDisplay: (displayState) =>
    dispatch(updateTodoDisplay(displayState)),
  removeCompletedTodo: () => dispatch(removeCompletedTodo()),
})

export default connect(undefined, mapDispatchToProps)(FilterTodo)
