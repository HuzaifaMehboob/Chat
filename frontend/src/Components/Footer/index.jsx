import React from 'react'
import './index.css'
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
const Footer = () => {
  return (
    <form className='footer'>
      <div className='textfoot'>
        <input type='text' placeholder='Write a message...' />
        <button className='emojiselec'><MdOutlineEmojiEmotions className='emojiicons'/></button>
      </div>
      <button className="subbut" type='submit' ><FaLocationArrow className='subicon'/></button>
    </form>
  )
}

export default Footer