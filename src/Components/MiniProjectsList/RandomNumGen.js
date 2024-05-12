import React, { useState } from 'react'

const Random = () => {

    const [startRange, setStartRange] = useState(null)
    const [endRange, setEndRange] = useState(null)
    const [output, setOutput] = useState(null)

    const handleGenerateButton = () => {
        console.log('start', startRange)
        console.log('end', endRange)

        const start = parseInt(startRange)
        const end = parseInt(endRange)

        if (
            isNaN(start) ||
            isNaN(end) ||
            start.length === 0 ||
            end.length === 0
        ) {
            setOutput('Invalid Input')
        } else {
            const randomNumber = Math.random() * (end - start) + start
            setOutput(randomNumber)
        }
    }

    return (
        <div>
            <input
                id="startRange"
                type="number"
                placeholder="Start range"
                value={startRange}
                onChange={(e) => setStartRange(e.target.value)}
            />
            <input
                id="endRange"
                type="number"
                placeholder="End range"
                value={endRange}
                onChange={(e) => setEndRange(e.target.value)}
            />

            <button id="generate" onClick={handleGenerateButton}>
                Generate
            </button>

            <div id="randomNumber">{output}</div>
        </div>
    )
}

export default Random
