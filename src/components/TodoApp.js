import React, { useState } from "react"
import { Typography, Paper, AppBar, Toolbar, Grid } from "@material-ui/core"
import { v4 as uuidv4 } from "uuid"
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"

export default function TodoApp() {
  const initialTodos = [
    { id: uuidv4(), task: "Clean Car", completed: false },
    { id: uuidv4(), task: "Wash Garden", completed: true },
    { id: uuidv4(), task: "Buy grocery", completed: false },
  ]
  const [todos, setTodos] = useState(initialTodos)

  const handleAddTodo = (newTodoText) => {
    const newTodo = {
      id: uuidv4(),
      task: newTodoText,
      completed: false,
    }

    setTodos([newTodo, ...todos])
  }

  const handleRemoveTodo = (todoId) => {
    const restTodos = todos.filter((todo) => todo.id !== todoId)

    setTodos(restTodos)
  }

  const handleToggleCompletion = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    )

    setTodos(updatedTodos)
  }

  const handleUpdateTodo = (todoId, newTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    )

    console.log(updatedTodos)

    setTodos(updatedTodos)
  }

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        background: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography>TODOS APP</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={12} md={8} lg={4}>
          <TodoForm onAddTodo={handleAddTodo} />
          <TodoList
            todos={todos}
            onRemoveTodo={handleRemoveTodo}
            onToggleCompletion={handleToggleCompletion}
            onUpdateTodo={handleUpdateTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}
