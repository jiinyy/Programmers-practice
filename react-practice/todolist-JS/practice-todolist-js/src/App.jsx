import './App.css';
import TodoCount from './components/TodoCount';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoLogo from './components/header/TodoLogo';
import useTodos from './hooks/useTodos';

function App() {
  const {
    onSubmit,
    todos,
    toggleTodos,
    deleteTodos,
    allTodos,
    completedTodos,
  } = useTodos()

  return (
    <div className="App">
      <header>
        <TodoLogo> JS TodoList </TodoLogo>
      </header>

      <main>
        <TodoForm onSubmit = {onSubmit} />

        <TodoList 
          todos={todos}
          toggleTodos={toggleTodos}
          deleteTodos={deleteTodos}
        />

        <div className='todoBottom'>
          <TodoCount
          allTodos={allTodos}
          completedTodos={completedTodos}
          />
        </div>
      </main>


    </div>
  );
}

export default App;
