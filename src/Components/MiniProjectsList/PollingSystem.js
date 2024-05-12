import React from 'react'
import { useState } from 'react'


const PollingSystem = () => {

    const [optionA, setOptionA] = useState(0)
	const [optionB, setOptionB] = useState(0)
	const [optionC, setOptionC] = useState(0)
	const [optionD, setOptionD] = useState(0)

    return (
    <div>
      <h4 id="question">Sample Question?</h4>
			<button
				className="option"
				onClick={(e) => setOptionA((prevValue) => prevValue + 1)}
			>
				<span>Option A </span>
				<span> {optionA}</span>
			</button>

      <button
				className="option"
				onClick={(e) => setOptionB((prevValue) => prevValue + 1)}
			>
				<span>Option B </span>
				<span> {optionB}</span>
			</button>

      <button
				className="option"
				onClick={(e) => setOptionC((prevValue) => prevValue + 1)}
			>
				<span>Option C </span>
				<span> {optionC}</span>
			</button>

      <button
				className="option"
				onClick={(e) => setOptionD((prevValue) => prevValue + 1)}
			>
				<span>Option D </span>
				<span> {optionD}</span>
			</button>
    </div>
  )
}

export default PollingSystem
