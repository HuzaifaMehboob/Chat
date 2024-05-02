import React from 'react'
import logo from '../../assets/logo.svg'
import './index.css'
function Logo() {
  return (
    <div className='logoinfo'>
            <img src={logo} width="100%" height="100%"/>
            <div className='descriptext'>
            <h1>SwiftChat</h1>
            <p style={{fontSize:'small'}} className='texthead'>"SwiftChat: Where conversations flow effortlessly. Join us for instant connections and lively discussions!"</p></div> 
          
    </div>
  )
}

export default Logo