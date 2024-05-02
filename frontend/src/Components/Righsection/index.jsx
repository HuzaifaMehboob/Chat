import React from 'react'
import Navbar from '../Navbar'
import './index.css'
import Footer from '../Footer'
import Conversation from '../Conversation'
function Rightsection() {
  return (
    <div className='rightsection'>
      <Navbar/>
      <Conversation/>
      <Footer/>
    </div>
  )
}

export default Rightsection