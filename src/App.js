import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const apiKey = "876515ac3fa84f7fae2086241397f84f"
  // const apiKey = process.env.REACT_APP_API_KEY - importing from .env.local
  const [progress, setProgress] = useState(0)
  const [mode, setMode] = useState('light')
  
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      console.log("dark mode")
      
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      console.log("light mode")
    }
  }

    return (
      <div>
        <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={3}
        />
        <Routes>
          <Route exact path='/' element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} pageSize={12} key="general" country="us" category="general"/>}/>
       
          <Route exact path='/business' element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} pageSize={12} key="business" country="us" category="Business"/>}/>
        
          <Route exact path='/entertainment' element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} pageSize={12} key="entertainment" country="us" category="Entertainment"/>}/>
       
          <Route exact path='/health' element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} pageSize={12} key="health" country="us" category="health"/>}/>
        
          <Route exact path='/science' element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} pageSize={12} key="science" country="us" category="Science"/>}/>
        
          <Route exact path='/sports' element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} pageSize={12} key="sports" country="us" category="Sports"/>}/>
        
          <Route exact path='/technology' element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} pageSize={12} key="technology" country="us" category="Technology"/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }

export default App

// If multiple 'Routes' are used we get a warning fro no-routes-matched