import React, { useState } from 'react'

const FaqComponent = () => {
    const[clickedItem,setClickedItem]=useState(0)

	const handleClick =(index)=>{
console.log(index)
setClickedItem(index)
	}

	const accordians = []
	for (let i = 0; i < 4; i++) {
		accordians.push(
			<div className="accordion m-4 border border-black"
			 onClick={(e)=>handleClick(i)}
			 >
				<div className="question p-2 bg-black text-white">Question {i + 1}</div>
				<div className={'answer p-2' +(clickedItem !=0 ? ' hidden' : '')}>Answer {i + 1}</div>
			</div>
		)
	}
  return (
    <div>
      {accordians}
    </div>
  )
}

export default FaqComponent
