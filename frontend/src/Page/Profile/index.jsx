import React from 'react'
import './index.css'
import Navbar from '../../Components/Navbar'
import Conversation from '../../Components/Conversation'
import Footer from '../../Components/Footer'
const Profile = () => {
  return (
    <div className='profilepage'>
        <Navbar/>
        <Conversation/>
        <Footer/>
    </div>
  )
}

export default Profile