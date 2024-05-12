import React, { useState } from 'react'

const HoverCounter = () => {

	const [count, setCount] = useState(0)

  return (
    <div>
      <button onMouseEnter={(e) => setCount(count + 1)} data-testid="button">Hover Me</button>
			<h1 data-testid="count">
				{count}
			</h1>
    </div>
  )
}

export default HoverCounter
