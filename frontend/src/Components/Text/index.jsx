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
            Lorem ipsum dolor sit amet consectetur adSipisicing elit. Quibusdam earum, ipsum dignissimos laborum aperiam quis saepe exercitationem omnis molestiae obcaecati architecto quo ratione.
            </div>
        </div>
       
        
     
    </div>
  )
}

export default Text