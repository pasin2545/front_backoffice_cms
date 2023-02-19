import React from 'react';
import { Box, styled } from '@mui/material'
import logo from './logo.svg';
import './App.css';
import { useState } from "react";
/** components */
import { MuiTextField } from './components/MuiTextField';
import { ImageImport } from './components/ImageImport';
import { MuiButton } from './components/MuiButton';
import { FormComponent } from './components/FormComponent';
// import { callapi } from './redux/callsAPI';

const Page = styled(Box)(() => ({
  width: '100%', display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: "20px",
}))


function App() {

  return (
    <Page >
      <FormComponent />
      <ImageImport />
    </Page>
  );
}

export default App;
