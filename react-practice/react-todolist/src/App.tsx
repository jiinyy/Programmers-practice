import { useState, FormEvent, useRef } from 'react'

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

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodoItems([
      ...todoItems,
      {
        id: Date.now() + Math.random(),
        content: $input.current?.value || '',
        completed: false,
        created: Date.now(),
      }
    ])
    event.currentTarget.reset();
  }

  const toggle = (index: number) => {
    const newTodoItems = [ ...todoItems];
    newTodoItems[index].completed = !e.completed
    setTodoItems(newTodoItems)
  }

  const deleteItem = (id: number) => {
    setTodoItems(todoItems.filter((item) => id !== item.id))
  }

  return (
    <div className="todo">
      <form onSubmit={submit}>
        <input placeholder={"할일을 적으시오"} ref={$input} />
        <button type="submit">저장</button>
      </form>
      <ul>
        {todoItems.map((e, index) => (
          <li key={e.id}>
            <label style={{ textDecoration: e.completed ? 'line-through' : undefined  }}>
              <input type='checkbox' checked={e.completed} onChange={() => toggle(index)}/>
              {e.id} / {e.content} / {e.created}
            </label>
            <button onClick={() => deleteItem(e.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
