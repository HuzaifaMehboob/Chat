import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import App from '../App'
import Login from '../Page/Login'
import SignUp from '../Page/SignUp'
import Home from '../Page/Home'

const Approuting = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
            
      
                <Route exact path="/Login" element={<Login/>} />
                <Route path="/SignUp" element={<SignUp/>}/>
                <Route path="/Home" element={<App/>} />
                
               
            </Routes>
           
        </BrowserRouter>
    </div>
  )
}

export default Approuting