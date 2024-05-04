import React,{useState} from 'react'
import './index.css'
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
const Footer = () => {
  const [text,setText] = useState('')

  const handleMessage=()=>{
    console.log(text)
  }
  return (
    <form className='footer'>
      <div className='textfoot'>
        <input type='text' placeholder='Write a message...' />
        <button className='emojiselec' onChange={(e)=>setText(e.target.value)}><MdOutlineEmojiEmotions className='emojiicons'/></button>
      </div>
      <button className="subbut" type='submit' onClick={()=>handleMessage}><FaLocationArrow className='subicon'/></button>
    </form>
  )
}

export default Footer