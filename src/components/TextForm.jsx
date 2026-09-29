import React, { useState } from 'react'

export default function TextForm(props) {
	const[text, setText] = useState("")

	const handleUp = (e)=>{
		let newText = text.toUpperCase();
		setText(newText)
		props.showAlert("Converted to Uppercase!", "Success")
	}

	const handleLower = ()=>{
		let newText = text.toLowerCase();
		setText(newText)
		props.showAlert("Converted to Lowercase!", "Success")
	}

	const handleChange = (e)=>{
		setText(e.target.value)
	}

	const handleClear = (e)=>{
		setText("")
		props.showAlert("Text Cleared!", "Success")
	}

	const handleCopy = ()=>{
		navigator.clipboard.writeText(text);
		props.showAlert("Copied to clipboard!", "Success")
	}

	const handleSpaces = () => {
		let newText = text.split(/\s+/).join(" ");
    	setText(newText);
		props.showAlert("Extra spaces removed!", "Success")
	}

	const handleCapital = () =>{
		let lower = text.toLowerCase()
		let newText = lower.charAt(0).toUpperCase()+lower.slice(1)
		setText(newText)
		props.showAlert("Text captalized!", "Success")
	}

  return (
	<>
	<div className='container pt-4'>
		<h3 >{props.heading}</h3>
		<div className='py-3'>
  			<textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleChange} rows="8"></textarea>
		</div>
		<button className='btn btn-primary mt-3' onClick={handleUp}>Uppercase</button>
		<button className='btn btn-primary mt-3 mx-md-3' onClick={handleLower}>Lowercase</button>
		<button className='btn btn-primary mt-3 mx-md-3' onClick={handleClear}>Clear Text</button>
		<button className='btn btn-primary mt-3 mx-md-3' onClick={handleCopy}>Copy</button>
		<button className='btn btn-primary mt-3 mx-md-3' onClick={handleSpaces}>Remove Extra Spaces</button>
		<button className='btn btn-primary mt-3 mx-md-3' onClick={handleCapital}>Capitalize</button>
		<div className='pt-4'>
		<h4>Your Text Summary</h4>
		<p>{text.trim() === ""? 0 :text.trim().split(/\s+/).length} words and {text.length} characters</p>
		<p>{text.trim() === ""? 0 :0.008 * text.split(" ").length} minutes read</p>
		<h4>Preview</h4>
		<p>{text === "" ? "Enter something in the textbox above to preview it here!" : text}</p>
		</div>
	</div>
	
	</>
  )
}
