import React from 'react'
import { useState } from 'react'


const Timer = () => {

    const [seconds, setSeconds] = useState(null)
	const [disableStop, setdisableStop] = useState(true)
	const [timer, setTimer] = useState(0)

	let intervalId = null

	function handleStart() {
		if (!seconds || seconds < 1) {
			return
		}
		setdisableStop(false)
		intervalId = setInterval(() => {
			const oldTimer = parseInt(timer)
			setTimer((oldTimer) => {
				if (oldTimer < seconds) {
					return parseInt(oldTimer) + 1
				} else {
					handleStop()
					return oldTimer
				}
			})
		}, 1000)
	}

	function handleStop() {
		setdisableStop(true)
		clearInterval(intervalId)
	}
  return (
    <div>
			<input
				id="seconds-input"
				className="m-2 border border-black px-3 py-1 rounded"
				type="number"
				placeholder="seconds"
				values={seconds}
				onChange={(e) => setSeconds(e.target.value)}
			/>

			<button
				id="start"
				className="m-2 border border-black px-3 py-1 rounded"
				disabled={!disableStop}
				onClick={handleStart}
			>
				Start
			</button>
			<button
				id="stop"
				className="m-2 border border-black px-3 py-1 rounded"
				disabled={disableStop}
				onClick={handleStop}
			>
				Stop
			</button>

			<div id="timer" className="m-2 flex justify-center text-lg">
				{timer}
			</div>
    </div>
  )
}

export default Timer
