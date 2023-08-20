// 요구사항
// 1. Counter 컴포넌트 구현하기
// 2. 모든 Counter 컴포넌트의 합 구현하기

// 무엇을 배울 것인가
// 1. 컴포넌트에서 지역 상태 관리하는 법 => useState
// 2. 컴포넌트에 이벤트 바인딩하기
// 3. 부모 컴포넌트에게 메시지 전달하기

import { useState } from "react";
import Counter from "./components/Counter";

function App4 () {
  const [totalCount, setTotalCount] = useState(0);
  const handleIncrease = () => setTotalCount(totalCount + 1);
  const handleDecrease = () => setTotalCount(totalCount - 1);

  return (
    <div>
      TotalCount : {totalCount}
      <Counter 
        onChange={console.log}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
      <Counter 
        onChange={console.log}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
      <Counter 
        onChange={console.log}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
    </div>
  )
}

export default App4;