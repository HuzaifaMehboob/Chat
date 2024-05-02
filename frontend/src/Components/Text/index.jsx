import React from 'react'
import './index.css'
import personpic from '../../assets/person.jpg'
const Text = (props) => {
  return (
    <div className={props.myObject.name}>
      <button className='picpic'>
        
            <img src={personpic} />
        </button>
        <div className='textcover'>
          <div className={props.myObject.pname}>
            Hi my name is Huzaifa and i want to talk to you about something and that is very important so i request you to kindly hear me out!!netur, fugit  nulla voluptate est. Alias!
          </div>
        </div>
       
        
     
    </div>
  )
}

export default Text