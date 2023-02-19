import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MuiTextField } from './components/MuiTextField';
import { ImageImport } from './components/ImageImport';
import { MuiButton } from './components/MuiButton';
import { useState } from "react";


function App() {
  const [xxx, setXXX] = useState('')

  return (
    <div className="App">
      <MuiTextField />
      <ImageImport/>
      <MuiButton xxx={xxx} /> 
      
    </div>
  );
}

export default App;
