import React from "react"
import { Typography, Paper, AppBar, Toolbar, Grid } from "@material-ui/core"
import { TodosContextProvider } from "../contexts/todosContext"
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
import TodoFilter from "./TodoFilter"

export default function TodoApp() {
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
      <TodosContextProvider>
        <Grid container justify="center" style={{ marginTop: "1rem" }}>
          <Grid item xs={12} md={8} lg={5}>
            <TodoForm />
            <TodoList />
            <TodoFilter />
          </Grid>
        </Grid>
      </TodosContextProvider>
    </Paper>
  )
}
