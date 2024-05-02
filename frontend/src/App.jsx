import { useState,useEffect } from 'react'

import './App.css'
import Logo from './Components/Logo'
import AuthPage from './Page/Login';
import SignUp from './Page/SignUp';
import Home from './Page/Home/index';
import Login from './Page/Login';

function App() {
  const [showPage, setShowPage] = useState(true);
  return (
    <>
      <div className='frontpage'>
    
      {/* <div className='logoside'>
        <Logo/></div> 
      <div className='AuthPage'>
        <Login/>
      </div> */}
      <Home/>
    </div>

    </>
  )
}

export default App
