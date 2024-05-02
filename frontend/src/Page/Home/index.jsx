import React, { useEffect, useState } from 'react';
import './index.css';
import Leftsection from '../../Components/Leftsection/index';
import Rightsection from '../../Components/Righsection/index';
import Profile from '../Profile';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {  toast } from 'react-toastify';
import { setUser } from '../../redux/Slices/User';

function Home() {
  const [page, setPage] = useState("Profile");
  const getToken = useSelector(state=>state.authUser.token)
  const dispatch = useDispatch()

  const SuccessToast = ()=>{
    toast.success("Logged In Successfully!", {
      position: "top-center",
    })
    
  }
  
  const ErrorToast = ()=>{
    toast.error("Logged In Failed! ",{
      position:"top-center",
    })
  }

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        console.log(getToken)
        const response = await axios.get(`http://localhost:3000/user/info`,  {
          headers: { Authorization: `Bearer ${getToken}` },
        });
        console.log(response.data.msg);
        dispatch(setUser(response.data.msg))
        if (response.data) {
          SuccessToast();
        } else {
          ErrorToast();
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      }
    };

    fetchData();
  }, []); 

  return (
    <div className='homepage'>
      <div className='leftsect'>
        <Leftsection />
      </div>
      <div className='rightsect'>
        {page === "Profile" ? <Profile /> : <Rightsection />}
      </div>
    </div>
  );
}

export default Home;
