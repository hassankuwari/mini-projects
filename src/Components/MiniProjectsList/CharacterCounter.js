import React from 'react'
import { useState } from "react";


const CharacterCounter = () => {
    
const [characterCount,setCharacterCount] =useState(0);

  return (
    <div>
      <h1>Hello there!</h1>
		<textarea id="textInput"
		onChange={(e)=>setCharacterCount(e.target.value.length)}
		/>
		<div id="count">{characterCount}</div>	
    </div>
  )
}

export default CharacterCounter
