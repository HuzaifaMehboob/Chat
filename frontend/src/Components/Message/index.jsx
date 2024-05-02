import React from 'react'
import './index.css'
import userpic from '../../assets/person.jpg'
import { FaEllipsis } from "react-icons/fa6";
function Message() {
  return (
    <div className='msgs'>
        <div className='puserpic'>
            <img src={userpic} /> 
        </div>
        <div className='userinfo'>
            <div className='chatname'> 
            <p>Mughira Ubaid</p>
            <button><FaEllipsis/></button>
            </div>
            <div className='chatinfo'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, atque!
                </p>
                <div className='numbers'>2</div>
            </div>
        </div>
    </div>
  )
}

export default Message