import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignIn from './components/SignIn';
import Success from './components/Success';
import ForgotPassword from './components/ForgotPassword';
import Layout from './components/Layout';
import { appTheme } from  './components/theme';

const theme = createTheme(appTheme);

theme.typography.h1 = {
  fontSize: '1.25rem',
}

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route path="/success" element={<Success />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Layout>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
