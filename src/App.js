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
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Layout>
          <Routes>
            <Route exact path="/" element={<SignIn />} />
            <Route path="/success" element={<Success />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
