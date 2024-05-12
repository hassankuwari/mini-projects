import React, { useState } from 'react'

const Parag = () => {
    const [visibility, setVisibility] = useState(true)

	const handleToggle = () => {
		setVisibility(!visibility)
	}
  return (
    <div>
			{visibility && <p id="my-paragraph">
				This is the paragraph you can toggle.
			</p> }
			

			<button id="toggle-btn" onClick={handleToggle}>
				Toggle Paragraph
			</button>
		</div>
  )
}

export default Parag
