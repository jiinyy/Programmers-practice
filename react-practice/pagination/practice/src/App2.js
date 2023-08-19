import './App.css';
import Logo from './components/Logo';
import Paragraph from './components/Paragraph';

function App2() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo size={300} />
        <Logo />
        <Logo />

      {/* size 와 color 을 안 넘겨줌 => default 값인 size=16, color=white 로 출력  */}
        <Paragraph>
          Edit <code>src/App.js</code> and save to reload.
        </Paragraph>

        <Paragraph size={14} color='blue'>
         I'm blue daba dee daba
        </Paragraph>
           
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div >
  );
}

export default App2