import { useState } from "react"

function useInputState(intialValue = "") {
  const [value, setValue] = useState(intialValue)

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue("")
  }

  return [value, handleChange, reset]
}

export default useInputState
