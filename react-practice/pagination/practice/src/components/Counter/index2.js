import { useState } from "react";
import { PropTypes } from 'prop-types';

function Counter2({ onChange, onIncrease, onDecrease }) {
  const [count, setCount] = useState(0);

  const handleChange = (value) => {
    setCount(value)
    onChange?.(value);
  }
  const handleIncrease = () => {
    handleChange(count + 1)
    onIncrease?.()
  }

  const handleDecrease = () => {
    handleChange(count - 1)
    onDecrease?.()
  }

  return (
    <div>
      <span>{count}</span>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  )
}

Counter2.propTypes = {
  onChange: PropTypes.func,
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func
}

export default Counter2;