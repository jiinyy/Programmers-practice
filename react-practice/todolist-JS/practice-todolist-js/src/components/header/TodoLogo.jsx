import React from 'react'

export default React.memo(
  function TodoLogo ({children}) {

  return (
    <h2>
      <span>{children}</span>
    </h2>
  )
})