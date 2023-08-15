import { FormEvent, useRef, useState } from "react"

type TodoItem = {
  id : number,
  content : string,
  created : number,
  completed : boolean
}

function App5() {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

  const $input = useRef<HTMLInputElement>(null);
  

  const submit = (event : FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 왜 여기에만...?
    setTodoItems([
      ...todoItems,
      {
        id : Date.now() + Math.random(),
        content : $input.current?.value || "",
        completed : false,
        created : Date.now(),
      }
    ])
    event.currentTarget.reset();
  }

  const toggle = (index : number) => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].completed = !newTodoItems[index].completed
    setTodoItems(newTodoItems);
  }

  const deleteItem = (id : number) => {
    setTodoItems(todoItems.filter((item) => item.id !== id))
  }

  return (
    <div className="todo">
      <form onSubmit={submit}>
        <input type="text" placeholder={"할일을 입력해주세요."} ref={$input} />
        <button type="submit">저장</button>
      </form>

      <ul>
        {todoItems.map((e,index) => (
          <li key={e.id}>
            <label style={{textDecoration: e.completed ? "line-through" : undefined}}>
              <input type="checkbox" checked={e.completed} onChange={() => toggle(index)} />
              {e.id} / {e.content} / {e.created}
            </label>
            <button onClick={() => deleteItem(e.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App5