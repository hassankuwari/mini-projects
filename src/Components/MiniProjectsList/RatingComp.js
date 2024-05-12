import React from 'react'
import { useState } from 'react'

const RatingComp = () => {

    const [emoji, setEmoji] = useState(null)
	const [content, setContent] = useState(null)

	function handleSubmit(){
		console.log(emoji.toString(),' ',content)
	}

  return (
    <div>
    <div id="feedback">
				<button
					className="m-2 p-1"
					onClick={(e) => setEmoji(e.target.value)}
				>
					😍
				</button>

				<button
					className="m-2 p-1"
					onClick={(e) => setEmoji(e.target.value)}
				>
					😀
				</button>

				<button
					className="m-2 p-1"
					onClick={(e) => setEmoji(e.target.value)}
				>
					🙁
				</button>

				<button
					className="m-2 p-1"
					onClick={(e) => setEmoji(e.target.value)}
				>
				 😭
				</button>

				
			</div>

			<div className={'flex flex-col' + (emoji == null ? ' hidden' : '')}>
				<textarea
					placeholder="Feedback"
					onChange={(e)=>setContent(e.target.value)}
					className="border border-gray-800 m-2"
				/>

				<button onClick={handleSubmit} id="submit">Submit</button>
			</div>
           
    </div>
  )
}

export default RatingComp
