import React from 'react'
import { GiCheckMark } from "react-icons/gi";

export default function About() {
	const arr = ["Convert text to Uppercase", "Convert text to Lowercase", "Remove extra spaces", "Copy text to the clipboard",
		 "Clear the text","View the word and character count", "See an estimated reading time","Preview your text instantly",
		  "Switch between Light Mode and Dark Mode"
	]
  return (
	<div className='container '>
		<div className='pt-5 text-center'>
		<h2>About TextUtils</h2>
		<p className='mt-2'>TextUtils is a simple and useful text utility application that helps you analyze and modify your text quickly.</p>
		<div class="card mt-5 mx-auto " style={{ backgroundColor: "#fff3cd" , maxWidth: "600px"}}>
  			<div class="card-body">
    		<h5 class="card-title">With TextUtils, you can:</h5>
  			</div>
  			<ul class="list-group list-group-flush list-unstyled ">
    			{
				arr.map((item)=>(
					<li key={item} className="ms-5 py-1 text-start"><GiCheckMark className="me-2 text-success"/>{item}</li>
				))
			}
  			</ul>
 
		</div>
		
		<p className='pt-5'>Whether you are writing, editing, or simply analyzing text, TextUtils provides useful tools to make everyday text processing easier.</p>
		<strong>Made with &hearts;</strong>
		</div>
	</div>
  )
}
