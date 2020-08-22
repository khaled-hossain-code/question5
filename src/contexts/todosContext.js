import React, { createContext, useReducer } from "react"
import todoReducer from "../reducers/todoReducer"

export const todosContext = createContext()

export function TodosContextProvider(props) {
  const [todos, dispatchTodoAction] = useReducer(todoReducer, [])

  return (
    <todosContext.Provider value={{ todos, dispatchTodoAction }}>
      {props.children}
    </todosContext.Provider>
  )
}
