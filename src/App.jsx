import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alerts from './components/Alerts'
import About from './components/About'

export default function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() =>{
      setAlert(null)
    }, 1500)
    }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "#0F172A";
      document.body.style.color = "#F8FAFC"
      showAlert("Dark mode has been enabled", "Success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "#F8FAFC";
      document.body.style.color = "#0F172A"
      showAlert("Light mode has been enabled", "Success")
    } 
  }
  return (
    <BrowserRouter>
     <Navbar mode={mode} toggleMode={toggleMode}/>
     <Alerts alert={alert}/>
     <Routes>
     <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert}/>}/>
     <Route exact path="/about" element={<About/>}/>
     </Routes>
     </BrowserRouter>
  )
}
