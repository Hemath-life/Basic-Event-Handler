import React, { useState } from "react"

function App() {
	const [headingText, setHeadingTest] = useState("Hello")
	const [isMousedOver, setMouseOver] = useState(false)

	function handelClick() {
		setHeadingTest("Submitted")
	}
	function handelMouseOver(params) {
		setMouseOver(true)
	}
	function handelMouseLeave(params) {
		setMouseOver(false)
	}
	return (
		<div className='container'>
			<h1>{headingText}</h1>
			<input type='text' placeholder="What's your name?" />
			<button
				onClick={handelClick}
				onMouseOver={handelMouseOver}
				onMouseOut={handelMouseLeave}
				style={{ background: isMousedOver ? "black" : "white" }}>
				Submit
			</button>
		</div>
	)
}

export default App
