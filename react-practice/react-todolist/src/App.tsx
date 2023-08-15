import { useState, FormEvent, useRef } from 'react'
import './App.css'

type TodoItem = {
  id: number,
  content: string,
  created: number,
  completed: boolean
}

function App() {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([
    {
      id: 1,
      content: "아침",
      created: Date.now(),
      completed: true
    },
    {
      id: 2,
      content: "점심",
      created: Date.now(),
      completed: true
    },
    {
      id: 3,
      content: "저녁",
      created: Date.now(),
      completed: true
    }
  ]);

  const $input = useRef<HTMLInputElement>(null);

  const submit = (event: FormEvent) => {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input placeholder={"할일을 적으시오"} ref={$input} />
        <button type="submit">저장</button>
      </form>
      <ul>
        {todoItems.map((e, index) => (
          <li key={e.id}>
            <label style={{ textDecoration: e.completed ? 'line-through' : undefined  }}>
              <input type='checkbox' checked={e.completed} onChange={() => {
                const newTodoItems = [ ...todoItems];
                newTodoItems[index].completed = !e.completed
                setTodoItems(newTodoItems)
              }}/>
              {e.id} / {e.content} / {e.created}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
