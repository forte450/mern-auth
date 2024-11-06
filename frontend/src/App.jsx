import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import GoogleLogin from './GoogleLogin';
import PagenotFound from './PagenotFound';
import Dashboard from './Dashboard';
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {
 
  const GoogleAuthWrapper = () =>{
    return(
      <GoogleOAuthProvider clientId='284378918198-87gjqkr1e5hmq7o45p5en1k6nqdhiqj9.apps.googleusercontent.com'>
        <GoogleLogin></GoogleLogin>
      </GoogleOAuthProvider>
    )
  }
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<GoogleAuthWrapper/>}/>
      <Route path='/' element={<Navigate to="/login"/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='*' element={<PagenotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
