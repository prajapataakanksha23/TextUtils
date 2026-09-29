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
	<div className='container'>
		<div className='text-center'>
		<h3 >Accidentally left the caps lock on and typed something, but can't be bothered to start again and retype it all?</h3>
		<p>Simply enter your text and convert it to uppercase, lowercase, remove extra spaces and more.</p>

		</div>
		<div className='py-3'>
  			<textarea className="form-control" style={{backgroundColor: props.mode === "light" ? "#FFFFFF" : "#1E293B",
    		color: props.mode === "light" ? "#0F172A" : "#F8FAFC",borderColor: props.mode === "light" ? "#DEE2E6" : "#334155"}} 
			id="exampleFormControlTextarea1" value={text} onChange={handleChange} rows="8"></textarea>
		</div>
		<button disabled = {text.length === 0} className='btn btn-primary mt-3 mx-2' onClick={handleUp}>Uppercase</button>
		<button disabled = {text.length === 0} className='btn btn-primary mt-3 mx-2' onClick={handleLower}>Lowercase</button>
		<button disabled = {text.length === 0} className='btn btn-primary mt-3 mx-2 ' onClick={handleClear}>Clear Text</button>
		<button disabled = {text.length === 0} className='btn btn-primary mt-3 mx-2' onClick={handleCopy}>Copy Text</button>
		<button disabled = {text.length === 0} className='btn btn-primary mt-3 mx-2' onClick={handleSpaces}>Remove Extra Spaces</button>
		<button disabled = {text.length === 0} className='btn btn-primary mt-3 mx-2' onClick={handleCapital}>Capitalize</button>
		<div className='pt-4'>
		<h4>Your Text Summary</h4>
		<p>{text.split(/\s+/).filter((element) =>{return element.length !== 0}).length} words and {text.length} characters</p>
		<p>{0.008 * text.split(/\s+/).filter((element) =>{return element.length !== 0}).length} minutes read</p>
		<h4>Preview</h4>
		<p>{text === "" ? "Nothing to preview!" : text}</p>
		</div>
	</div>
	
	</>
  )
}
