import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MuiTextField } from './components/MuiTextField';
import { ImageImport } from './components/ImageImport';
import { MuiButton } from './components/MuiButton';


function App() {
  return (
    <div className="App">
      <MuiTextField />
      <ImageImport/>
      <MuiButton/> 
      
    </div>
  );
}

export default App;
