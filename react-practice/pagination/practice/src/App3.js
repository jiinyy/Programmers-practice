// 분기와 반복 => 간단한 게시판 만들기

import { useState } from "react"
import Board from "./components/Board/Board";

function App3() {

  const [visible, setVisible] = useState(false);

  const articles = [{
    id: 1,
    title: '안녕하세요 포롱이 여러분 :',
    author: '이선협'
  },
  {
    id: 2,
    title: '안녕하세요 백롱이 여러분 :',
    author: '이선협'
  },
  {
    id: 3,
    title: 'React 잘하는 법 :',
    author: '이선협'
  },
  {
    id: 4,
    title: '안녕하세요 포롱이 여러분 :',
    author: '거짓말쟁이'
  }
]
  

  // JSX 내에서는 표현식만 작성가능하다.
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        Toggle
      </button>
      {visible ? (
        <h1> 논리곱 연산자를 통해 쉽게 JSX 랜더링 여부를 결정할 수 있습니다.</h1>
      ) : null}
      {/* 논리곱 연산자  */}
      {/* {visible && (
      <h1> 논리곱 연산자를 통해 쉽게 JSX 랜더링 여부를 결정할 수 있습니다.</h1>
      )} */}

      {visible ? (<Board articles={articles} />
      ) : ( 
      <p> 게시판을 보려면 toggle 버튼을 누르세요.</p>)}
    </div>
  )
}

export default App3