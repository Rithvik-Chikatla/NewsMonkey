import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const apiKey = "33c2b27ba6f7478da16d1bd2c7a30e39"
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
          <Route exact path='/' element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} pageSize={12} key="general" country="in" category="general"/>}/>
       
          <Route exact path='/business' element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} pageSize={12} key="business" country="in" category="Business"/>}/>
        
          <Route exact path='/entertainment' element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} pageSize={12} key="entertainment" country="in" category="Entertainment"/>}/>
       
          <Route exact path='/health' element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} pageSize={12} key="health" country="in" category="health"/>}/>
        
          <Route exact path='/science' element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} pageSize={12} key="science" country="in" category="Science"/>}/>
        
          <Route exact path='/sports' element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} pageSize={12} key="sports" country="in" category="Sports"/>}/>
        
          <Route exact path='/technology' element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} pageSize={12} key="technology" country="in" category="Technology"/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }

export default App

// If multiple 'Routes' are used we get a warning fro no-routes-matched