import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignIn from './components/SignIn';
import Success from './components/Success';
import ForgotPassword from './components/ForgotPassword';
import Layout from './components/Layout';
import { appTheme } from  './components/theme';

// testing different ways of updating theme tokens
// provide own theme from an import
const theme = createTheme(appTheme);

// update a one off token 
theme.typography.h1 = {
  fontSize: '1.25rem',
}

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route exact path="/mui-hackathon" element={<SignIn />} />
          <Route path="/mui-hackathon/success" element={<Success />} />
          <Route path="/mui-hackathon/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Layout>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
