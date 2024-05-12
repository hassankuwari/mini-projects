import React, { useState } from 'react'

const LoanCalculator = () => {

    const[amount,setAmount]=useState(null)
const[months,setMonths]=useState(null)
const[output,setOutput]=useState(null)

const handleCalculate =()=>{
const output = parseFloat(amount) / parseFloat(months) 
setOutput(output.toFixed(2))
}

  return (
    <div>
      <h1>Hello there!</h1>
			<input id="totalCost" onChange={(e)=>setAmount(e.target. value)} type="number" placeholder="Loan Amount" />
			<input id="numberOfIntervals" onChange={(e)=>setMonths(e.target. value)} type="number" placeholder="Months" />
			<button id="calculate" onClick={handleCalculate}>Calculate</button>
			<div id="output">{output}</div>
    </div>
  )
}

export default LoanCalculator;
