import React, { createContext, useReducer } from "react"
import todoReducer from "../reducers/todoReducer"

export const TodosContext = createContext()
export const DispatchContext = createContext()

export function TodosContextProvider(props) {
  const [todos, dispatchTodoAction] = useReducer(todoReducer, [])

  return (
    <TodosContext.Provider value={{ todos }}>
      <DispatchContext.Provider value={{ dispatchTodoAction }}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}
