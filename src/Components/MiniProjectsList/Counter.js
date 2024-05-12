import React, { useState } from 'react'

const Counter = () => {

	const [number, setNumber] = useState(0);

  return (
    <div className="card">
    <h1 data-testid="counter">{number}</h1>
    <button
        data-testid="incrementButton"
        onClick={() => {
            setNumber(number + 3);
            
        }}
    >
        Increment 3 times
    </button>
</div>
  )
}

export default Counter
