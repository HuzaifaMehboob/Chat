import React from 'react'
import './index.css'
import Text from '../Text'
const Conversation = () => {
  const myObject = [{ name: 'tsize',pname:'texttext' },{name:'you',pname:'texttexxt'},{name:'tsize',pname:'texttext'},{name:"you",pname:'texttexxt'}]
  return (
    <div className='converdiv'>
      {myObject.map((ele,index)=>(
        <div className='textsize'>
            <Text myObject={ele} /> 
        </div>))}
    </div>
  )
}

export default Conversation