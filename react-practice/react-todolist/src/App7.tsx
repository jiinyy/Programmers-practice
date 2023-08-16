import { FormEvent, useRef, useState } from "react";

type TodoItem = {
  id: number,
  content: string,
  completed: boolean,
  created: number
}

function App7() {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

  const $input = useRef<HTMLInputElement>(null)

  const submit = (event : FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodoItems([
      ...todoItems,
      {
        id : Date.now() + Math.random(),
        content : $input.current?.value || "",
        created : Date.now(),
        completed : false
      }
    ])
    event.currentTarget.reset();
  }

  const toggle = (index : number)=> {
    const newTodoItems = [...todoItems]
    newTodoItems[index].completed = !newTodoItems[index].completed 
    setTodoItems(newTodoItems) 
  }

  const deleteItem = (id: number) => {
    setTodoItems(todoItems.filter((item) => item.id !== id ))
  }

  return (
    <div className="todo">
      <form onSubmit={submit}>
        <input placeholder={"할일을 입력하세요"} ref={$input} />
        <button type="submit">완료</button>
      </form>

      <ul>
        {todoItems.map((e, index) => (
          <li key={e.id}>
            <label style={{ textDecoration : e.completed ? "line-through" : undefined}}>
              <input type="checkbox" checked={e.completed} onChange={() => toggle(index) } />
              {e.id} | {e.content} | {e.created}
            </label>
            <button onClick={() => deleteItem(e.id)}>❌</button>
          </li>
        ))}
      </ul>

    </div>
  )

}

export default App7;