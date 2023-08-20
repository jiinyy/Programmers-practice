import { useState } from "react";

const MIN_LENGTH = 2 
const MAX_LENGTH = 20

const lengthCheck = (inputLength) => {
  return inputLength >= MIN_LENGTH && inputLength <= MAX_LENGTH
}

function useTodos() {
  const [todos, setTodos] = useState([])

  const checkDuplicated = (findValue) => {
    todos.find((e) => e.content === findValue)
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    const value = 
    e.target.querySelector('input').value
    
    if (lengthCheck(value.length) && 
    !checkDuplicated(value)) {
      setTodos([
        ...todos,
        {
          id : todos[todos.length - 1].id + 1,
          content : value,
          complete : false
        }
      ])
      e.target.reset()
    } else {
      alert ( '2자 이상 -20자 이하로만 입력해주세요. or 이미 있습니다!')
    }
  }

  return {
    todos,
    onSubmit : handleSubmit,
  }
}
