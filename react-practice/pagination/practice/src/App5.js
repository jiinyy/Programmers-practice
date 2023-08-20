import { useState } from "react";
import Counter2 from "./components/Counter/index2";

function App5() {
  const [totalCount, setTotalCount] = useState(0);

  const handleIncrease = () =>  setTotalCount(totalCount + 1) 
  const handleDecrease = () =>  setTotalCount(totalCount - 1) 

  return (
    <div>
      Total Count : {totalCount}
      <Counter2
        onChange={console.log}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
      <Counter2
        onChange={console.log}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
      <Counter2
        onChange={console.log}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
    </div>

  )
}

export default App5;