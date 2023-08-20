import { useEffect, useRef } from "react";

// 입력 받고 제출하는 작업
function TodoForm ({ onSubmit }) {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <form onSubmit={onSubmit}>
      <input type="text" ref={inputRef}/>
      <button>저장</button>
    </form>
  )
}

export default TodoForm;