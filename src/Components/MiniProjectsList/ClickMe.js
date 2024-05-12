import React from 'react'

const ClickMe = () => {
    const handleClick =()=>{
		console.log("Clicked!")
	}
  return (
    <>

    <div>
      <button data-testid="button" onClick={(e)=>handleClick(e)}>Click me!	</button>
    </div>
    </>
  )
}

export default ClickMe
