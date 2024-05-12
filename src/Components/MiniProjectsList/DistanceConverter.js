import React, { useState } from 'react'

const DistanceConverter = () => {

    const conversionRates = {
		centimeters: 1,
		inches: 2.54,
		feet: 30.48,
		meters: 100,
		kilometers: 100000,
		miles: 160934.4
	}

	const [fromUnit,setFromUnit] = useState(null)
	const [toUnit,setToUnit] = useState(null)

	const [input, setInput] = useState('')
	const [output, setOutput] = useState('')

	function handleConvert() {
		const inputNumber = parseFloat(input)

		const inBaseUnit = inputNumber * conversionRates[fromUnit]

		const toResultUnit = inBaseUnit / conversionRates[toUnit]

		setOutput(toResultUnit.toFixed(3))
	}

  return (
    <div>
      <h1>Hello there!</h1>

<select id="fromUnit"
onChange={(e)=>setFromUnit(e.target.value)}>
    <option value="centimeters">centimeters</option>
    <option value="inches">inches</option>
    <option value="feet">feet</option>
    <option value="meters">meters</option>
    <option value="kilometers">kilometers</option>
    <option value="miles">miles</option>
</select>

<select id="toUnit"
onChange={(e)=>setToUnit(e.target.value)}>
    <option value="centimeters">centimeters</option>
    <option value="inches">inches</option>
    <option value="feet">feet</option>
    <option value="meters">meters</option>
    <option value="kilometers">kilometers</option>
    <option value="miles">miles</option>
</select>

<input
    id="fromValue"
    type="number"
    placeholder="Input Number"
    onChange={(e) => setInput(e.target.value)}
/>

<button id="convert" onClick={handleConvert}>
    Convert
</button>

<div id='outputValue'>{output}</div>
    </div>
  )
}

export default DistanceConverter
