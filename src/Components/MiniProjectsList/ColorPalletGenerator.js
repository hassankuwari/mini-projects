import React, { useState } from 'react'

const ColorPalletGenerator = () => {

    const [currentPellete, setCurrentPellete] = useState(null)
	const [savedPelletes, setSavedPelletes] = useState([])

	function genrateRandomColor() {
		let colorCode = '#'
		for (let i = 0; i < 3; i++) {
			let colorInt = Math.floor(Math.random() * 256)
			let colorHex = colorInt.toString(16).padStart(2, '0')
			colorCode += colorHex
		}
		return colorCode
	}

	const handleGenerate = () => {
		const colors = []
		for (let i = 0; i < 5; i++) {
			colors.push(genrateRandomColor())
		}
		setCurrentPellete(colors)
	}

	const handleSave = () => {
		const pelletes = [...savedPelletes]
		pelletes.push(currentPellete)
		setSavedPelletes(pelletes)
		console.log(savedPelletes)
	}

	const handleDelete = (index) => {
		console.log('index is', index)
		const pelletes = savedPelletes.filter((_, i) => i !== index)
		setSavedPelletes(pelletes)
	}
  return (
    <div>
      <button
				id="generate"
				className="border border-black py-2 px-4 m-4 rounded-md"
				onClick={handleGenerate}
			>
				Generate
			</button>

			<div id="current-palette" className="flex m-4">
				{currentPellete &&
					currentPellete.map((color, index) => {
						return (
							<div
								key={index}
								className="color-block w-24 h-40"
								style={{ backgroundColor: color }}
							>
								{color}
							</div>
						)
					})}
				<button
					id="save"
					className="border border-black py-2 px-4 m-4 rounded-md"
					onClick={handleSave}
				>
					Save
				</button>
			</div>

			<div id="saved-palettes" className="flex flex-col gap-4">
				{savedPelletes.length != 0 &&
					savedPelletes.map((pellete, index) => {
						return (
							<div key={index} className='saved-pallet'>
									{pellete &&
										pellete.map((color, index) => {
											return (
												<div
													key={index}
													className="color-block w-24 h-40"
													style={{
														background: color
													}}
												>
													{color}
												</div>
											)
										})}
								<button
									// id="delete-palette-button"
									className="delete-palette-button border border-black py-2 px-4 m-4 rounded-md"
									onClick={(e) => handleDelete(index)}
								>
									Delete
								</button>
							</div>
						)
					})}
			</div>
    </div>
  )
}

export default ColorPalletGenerator
