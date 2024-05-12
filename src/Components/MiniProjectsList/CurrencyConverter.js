import React, { useState } from 'react'

const CurrencyConverter = () => {

    const [fromInput, setFromInput] = useState(null)
	const [toInput, setToInput] = useState(null)
	const [result, setResult] = useState(null)

	const handleConvert = () => {
		fetch("https://open.er-api.com/v6/latest/" + fromInput)
			.then((response) => response.json())
			.then((data) => {
				const rate = data.rates[toInput] // Assuming EUR is the target currency
				const convertedValue = 1 * rate // Convert 1 unit of USD to EUR
					setResult(convertedValue)
			})
	}

  return (
    <div>
      <input
				type="text"
				id="from"
				maxlength="3"
				placeholder="From: e.g., USD"
				onChange={(e) => setFromInput(e.target.value)}
			/>

			<input
				type="text"
				id="to"
				maxlength="3"
				placeholder="To: e.g., EUR"
				onChange={(e) => setToInput(e.target.value)}
			/>

			<button id="convert" onClick={handleConvert}>
				Convert
			</button>

			<div id="currencyValue">{result}</div>
    </div>
  )
}

export default CurrencyConverter
