import React from 'react'
import './index.css'
import person from '../../assets/person.jpg'
import { IoChatbubbleEllipsesOutline, IoEllipsisVertical }  from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { FaEllipsisVertical } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import Searchbar from '../Searchbar';
import Message from '../Message';
import { TbLogout2 } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import {clearToken} from '../../redux/Slices/authSlice'
import { clearUser } from '../../redux/Slices/User';
import { useNavigate } from 'react-router-dom';

function Leftsection() {
    const pic = useSelector(state=>state.user.pic)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const DeleteToken = ()=>{
        dispatch(clearToken())
        dispatch(clearUser())
        navigate('/Login')
    }
  return (
    <div className='leftsection'>
        <div className='leftinfo'>
            <div className='userpic'><img src={pic} width="100%" height="100%"  /></div>
            <button><IoChatbubbleEllipsesOutline className="icons" /></button>
            <button><MdGroups className='icons' /> </button>
            <button><IoIosSettings className='icons'/></button>
            <button onClick={()=>DeleteToken()}><TbLogout2 className='icons'/></button>
        </div>
        <div className='contacts'>
            <div className='herocomp'>
                <h2>Message</h2>
                <button><FaEllipsisVertical className='heroicon'/></button>
            </div>
            <div className='choices'>
                <button>All Chats</button>
                <button>Muted Chats</button>
                <button>Archived</button>
            </div>
            <div className='searchbar'>
                <Searchbar/>
            </div>

            <div className='peoplechat'>
               { Array(10).fill().map((ele,index)=>(
                <div className='singleperson' key={index}>
                    <Message/>
                </div>))
}</div>
            

        </div>
    </div>
  )
}

export default Leftsection