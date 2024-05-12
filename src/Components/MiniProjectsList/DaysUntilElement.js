import React, { useState } from 'react'

const DaysUntilElement = () => {

    const [inputDate, setInputDate] = useState(null)
	const [error, setError] = useState(null)
	const [output, setOutput] = useState(null)

	const handleFindDays = () => {
		const inputDate = document.getElementById('datePicker').value
		console.log('inputDate:', inputDate)

		const today = new Date()
		const future = new Date(inputDate)

		console.log('today:', today.getDate())
		console.log('future:', future.getDate())

		const numberOfDays = parseInt((future - today)/ (1000*60*60*24))
		console.log('numberOfDays:', numberOfDays)

		if (numberOfDays > 0){
			setError(null)
			setOutput(numberOfDays)
		} else{
			setOutput(null)
			setError('Error: Past Date Entered')
		}
	}

	const handleInputDate = (e) => {
		setError(null)
		setInputDate(e.target.value)
	}

  return (
    <div>
      <input
				id="datePicker"
				onChange={(e) => handleInputDate(e)}
				className="border border-black block p-2 m-2"
				type="date"
			/>
			<button
				id="findDays"
				className="bg-gray-900 text-white rounded-md block p-2 m-2"
				onClick={handleFindDays}
			>
				Find Days
			</button>
			{output && <span id="daysLeft">{output}</span>}
			{error && <div id="error">{error}</div>}
    </div>
  )
}

export default DaysUntilElement
