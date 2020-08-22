import useLocalStorageState from "../hooks/useLocalStorageState"
import todoReducer from "../reducers/todoReducer"

function useTodoState(initialTodos) {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos)

  

  return {
    
  }
}

export default useTodoState
