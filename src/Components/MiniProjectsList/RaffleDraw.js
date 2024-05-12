import React, { useState } from 'react'

const RaffleDraw = () => {

    const [nameList, setNameList] = useState([])
	const [pickedList, setPickedList] = useState([])

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			console.log('enter pressed')
			const name = e.target.value
			console.log('name:', name)

			if (name) {
				setNameList((prevList) => [...prevList, name])
				e.target.value = ''
			}
		}
	}

	const pickRandomName = () => {
		const randomIndex = Math.floor(Math.random() * nameList.length)
		return nameList[randomIndex]
	}

	const handlePick = () => {
		const randomName = pickRandomName()
		console.log("randomName",randomName)

		if (randomName) {
			setPickedList((prevList) => [...prevList, randomName])
		}
		document.getElementById('nameDialog').show()
	}

  return (
    <div>
      <input
				type="text"
				id="nameInput"
				placeholder="Enter Name"
				onKeyDown={(e) => handleKeyDown(e)}
			/>

			<div id="nameList">
				{nameList.map((name, index) => {
					return (
						<span key={index} className="name p-2 m-2">
							{name}
						</span>
					)
				})}
			</div>

			<button id="pick" onClick={handlePick}>
				Pick a Name
			</button>
			<dialog id="nameDialog">{pickedList.length-1}</dialog>

			<div id="pickedList">
				{pickedList.map((name, index) => {
					return (
						<span key={index} className="name p-2 m-2">
							{name}
						</span>
					)
				})}
			</div>
    </div>
  )
}

export default RaffleDraw
