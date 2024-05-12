import React, { useState } from 'react'

const TipCalc = () => {

    const [billAmount, setBillAmount] = useState(null)
	const [tipPercent, setTipPercent] = useState(null)
	const [totalAmount, setTotalAmount] = useState(null)

	function handleCal() {
		const amount =
			parseFloat(billAmount) +
			(parseFloat(tipPercent) * parseFloat(billAmount)) / 100
			setTotalAmount(amount.toFixed(2))
		}
  return (
    <div>
      <h1>Hello there!</h1>

<input
    id="billAmount"
    placeholder="Bill Amount"
    onChange={(e) => setBillAmount(e.target.value)}
/>

<input
    id="tipPercent"
    placeholder="Tip Percent"
    onChange={(e) => setTipPercent(e.target.value)}
/>

<button id="calculateAmount" onClick={handleCal}>
    Calculate
</button>
<p id="totalAmount">{totalAmount}</p>
    </div>
  )
}

export default TipCalc
