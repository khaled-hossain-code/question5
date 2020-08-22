import React, { createContext } from "react"
import todoReducer from "../reducers/todoReducer"
import useLocalStorageReducer from "../reducers/useLocalStorageReducer"

export const TodosContext = createContext()
export const DispatchContext = createContext()

export function TodosContextProvider(props) {
  const [todos, dispatchTodoAction] = useLocalStorageReducer(
    "todos",
    [],
    todoReducer
  )

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatchTodoAction}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}
