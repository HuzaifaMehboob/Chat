import React,{useState} from 'react'
import './index.css'
import axios from 'axios'
import { useAuth } from '../../store/auth'
import Logo from '../../Components/Logo'
import {useNavigate} from 'react-router-dom'
import {  toast } from 'react-toastify';
import {useDispatch} from 'react-redux';
import {setToken } from '../../redux/Slices/authSlice'
function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
 
  const [values,setValues]=useState(
    {
       
        email:'',
        password:'',
        
    }
)
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

const handleValues=(e)=>{
    
    setValues({...values, [e.target.name] : e.target.value})
    
        
}

    const handlefunc=async()=>{
      let body = values
      
      console.log("body : ",values)
        const response =  await axios.post('http://localhost:3000/user/Login',body)
        console.log(response.data)
        if (response.data.token) {
          dispatch(setToken (response.data.token))
          console.log(response.data)
          SuccessToast();
          navigate("/Home")
        } 
        else{
          console.log("error",response.data)
          ErrorToast();
        }


    }
  return (
    <div className='LoginPage'>
      <div className='logoside'><Logo/></div>
      <div className='AuthPage'>

    <div className='login'>

    <div className="authlogin" >
        <h1>Login Form</h1>
        <div className='emailbar'>
            <label>Email</label>
            <input type="text" placeholder='email' name="email" onChange={handleValues}/>
        </div>
        <div className='passwordbar'>
            <label>Password</label>
            <input type="password" placeholder='password' name="password" onChange={handleValues} />
        </div>
        <div className='LoginButtons'>

        <button className='sub2' onClick={()=>navigate("/SignUp")}>Create an account?</button>
        <button onClick={()=>handlefunc()} className='sub1'>Submit</button>
      
        </div>
      </div>
    </div>
        
        
    </div>
    
    </div>
  )
}

export default Login