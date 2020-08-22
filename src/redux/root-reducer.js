import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" //this is for local-storage
import todoReducer from "./todo/todo.reducer"

const persistConfig = {
  key: "root",
  storage,
}

const rootReducer = combineReducers({
  todosStore: todoReducer,
})

//this is just a enhanced reducer
export default persistReducer(persistConfig, rootReducer)
