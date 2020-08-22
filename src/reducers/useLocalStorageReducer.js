import { useReducer, useEffect } from "react"

function useLocalStorageState(key, defaultValue, reducer) {
  const [state, dispatchLocalStorage] = useReducer(reducer, defaultValue, () => {
    let val

    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultValue))
    } catch (e) {
      val = defaultValue
    }

    return val
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, dispatchLocalStorage]
}

export default useLocalStorageState
