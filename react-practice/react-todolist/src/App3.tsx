import { FormEvent, useRef, useState } from "react"

type TodoItem = {
  id: number,
  content: string,
  created: number,
  completed: boolean
}




function App3() {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

  const $input = useRef<HTMLInputElement>(null);

  const submit = (event : FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodoItems([
      ...todoItems,
      {
        id : Date.now() + Math.random(),
        content : $input.current?.value || '',
        completed: false,
        created: Date.now(),
      }
    ])
    event.currentTarget.reset();
  }

  const toggle = (index:number) => {
    const newTodoItems = [...todoItems]
    newTodoItems[index].completed = !newTodoItems[index].completed  // [index] 를 써야하는 이유 뭔가요?
    setTodoItems(newTodoItems)
  }


  const deleteItem = (id:number) => {
    setTodoItems(todoItems.filter((item) => item.id !== id))  // id 가 각자 나타내는 것은?
  }


  return (
    <div>
      <form onSubmit={submit}>
        <input placeholder="할일을 작성해주세요." ref={$input}/>
        <button>저장</button>
      </form>

      <ul>
        {todoItems.map((e, index) => (  // {} 대신 () 사용하는 이유는?
          <li key={e.id}>
            <label style={{ textDecoration: e.completed ? "line-through" : undefined }}>
              <input type="checkbox" checked={e.completed} onChange={() => toggle(index)}/> // onChange 를 써야하는이유는?
              {e.id} / {e.content} / {e.created}
            </label>
            <button onClick={() => deleteItem(e.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App3