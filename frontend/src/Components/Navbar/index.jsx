import React from 'react'
import './index.css'
import userlogo from '../../assets/person.jpg'
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { PiVideoCameraFill } from "react-icons/pi";
import { MdCall } from "react-icons/md";
import { useSelector } from 'react-redux';
function Navbar() {
  const name = useSelector(state=>state.user.name)
  return (
    <div className='navbar'>
    <div className='personname'>
        
            <div className='piclon'>
               <img src={userlogo}  />
            </div>
        
        <h3>{name}</h3>
    </div>
    <div className='rightnav'>
      <button><MdCall className='iconsbutton'/></button>
      <button><PiVideoCameraFill className='iconsbutton'/></button>
      <button><IoEllipsisVerticalSharp className='iconsbutton'/></button>
    </div>
    </div>
  )
}

export default Navbar