import React, { useState } from 'react'

const MultiplicationTableGenerator = () => {

    const [number, setNumber] = useState(null)
	const [tableValues, setTableValues] = useState(null)

	const handleGenerate = () => {
		const inputNumber = parseInt(number)
		const table = []
		for (let i = 1; i <= 20; i++) {
			table.push(i * inputNumber)
		}
		setTableValues(table)
	}

  return (
    <div>
      <input
				type="number"
				onChange={(e) => setNumber(e.target.value)}
				id="number"
				placeholder="Number"
			/>

			<button id="generateTable" onClick={handleGenerate}>
				Generate
			</button>

			{
	tableValues && 
	<ul id='multiplicationTable'>
		{tableValues.map((item,index) => (
			<li key={index}>{item}</li>
		))}
	</ul>
}
    </div>
  )
}

export default MultiplicationTableGenerator
