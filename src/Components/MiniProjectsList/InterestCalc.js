import React, { useEffect, useState } from 'react'

const Interest = () => {

    const [principal, setPrincipal] = useState(0)
	const [rate, setRate] = useState(0)
	const [time, setTime] = useState(0)
	const [simpleInterest, setSimpleInterest] = useState(null)
	const [totalAmount, setTotalAmount] = useState(null)

	const calculate = () => {
		const interest = (principal * rate * time) / 100
		setSimpleInterest(interest)

		const amount = parseFloat(interest) + parseFloat(principal)
		setTotalAmount(amount)
	}

	useEffect(() => {
		calculate()
	}, [principal, rate, time])
  return (
    <div>
      			<input
				id="principal"
				class="border border-black p-2 m-2 block"
				placeholder="Principal"
				value={principal}
				onChange={(e) => {
					setPrincipal(e.target.value)
					calculate()
				}}
			/>

			<input
				id="rate"
				class="border border-black p-2 m-2 block"
				placeholder="Rate"
				value={rate}
				onChange={(e) => {
					setRate(e.target.value)
				}}
			/>

			<input
				id="time"
				class="border border-black p-2 m-2 block"
				placeholder="Time"
				value={time}
				onChange={(e) => {
					setTime(e.target.value)
				}}
			/>

			<div id="simpleInterest">{simpleInterest}</div>
			<div id="totalAmount">{totalAmount}</div>
    </div>
  )
}

export default Interest
