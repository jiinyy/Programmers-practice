// Counter 컴포넌트의 기능
// 1. 증감되는 기능
// 2. 부모 컴포넌트에게 메세지를 전달하는 기능

import { useState } from "react"
import { PropTypes } from "prop-types"
// 값이 변경되었을때 onChange 가 실행되게 props 받아오기 
function Counter({ onChange, onIncrease, onDecrease }) {
  const [count, setCount] = useState(0);

  // 인격부여
  const handleChange = (value) => {
    setCount(value)
    onChange?.(value);
  }

  const handleIncrease = () => {
    handleChange(count + 1);
    onIncrease?.()
  }

  const handleDecrease = () => {
    handleChange(count - 1);
    onDecrease?.();
  }

  return (
    <div>
      <span style={{ fontSize: 40 }}>{count}</span>
      <br />
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  )
}

Counter.propTypes = {
  onChange: PropTypes.func,
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func,
}

export default Counter