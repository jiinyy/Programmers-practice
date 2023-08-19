import logo from './logo.svg';
import './App.css';

function App() {
  const name = '리액트';
  const showLink = false;
  const showLogo = "show";
  const names = ['React', 'Vue', 'Angular']

  return (
    // 아래와 같은 것을 JSX 라고 합니다.
    <div className="App">

      {/* JSX 에 표현식 넣기 => 3항연산자 */}
      <header className="App-header">
        {
          showLogo === "show" ?
            <img src={logo} className="App-logo" alt="logo" />
            : <h1>React</h1>
        }

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/* JSX 에 조건넣기  */}
        {showLink && (
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn {name}
          </a>
        )}

        {/* JSX 에 반복문  */}
        <ul>
          {
            names.map(item => (
              <li key={item.id}>{item}</li>
            ))
          }
        </ul>

      </header>
    </div>

  );
}

export default App;
