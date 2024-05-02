import React,{useState} from 'react'
import './index.css'
import axios from 'axios'
import Logo from '../../Components/Logo'
import { useNavigate } from 'react-router-dom'

import {  toast } from 'react-toastify';

function SignUp() {
    const navigate =  useNavigate()
    

    // (e)=>{
    //  setValues((prev)=>{
    //     let temp={...prev}
    //     temp.name=e
    //     return temp
    //  })
    // }
    const [values,setValues]=useState(
        {
            name:'',
            email:'',
            password:'',
            confirm_password:'',
        }
    )
    const [errors, setErrors]= useState( {
        name:false,
        email:false,
        password:false,
        confirm_password:false,
    });
    

    const handleValues=(e)=>{
        // let temp={...value} 
        
        setValues({...values, [e.target.name] : e.target.value})
        
            
    }
    const handleValidation=()=>{
        
        const validationErrors = validate(values);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            console.log('helooo')
            handleRequest();
        }
    }
    const SuccessToast = ()=>{
        toast.success("Signed Up Successfully!", {
          position: "top-center",
        })
      }
      
      const ErrorToast = ()=>{
        toast.error("Signed Up Failed! ",{
          position:"top-center",
        })
      }
    const handleRequest=async()=>{
        setErrors( {
            name:false,
            email:false,
            password:false,
            confirm_password:false,
        })
        
        let body={...values}
        for (const key in body) {
            if (body[key]==='') {
             setErrors((prev)=>{
                let temp={...prev}
                temp[key]=true
             })   
             return alert(`fill ${key}`)
                
            }
        }
       try{
         const response=await axios.post('http://localhost:3000/user/SignUp',body)
             console.log(response.data)
             if(response.data){
                SuccessToast()
                navigate("/Login")
             }
             else{
                ErrorToast();
             }
       }
       catch(error){
          alert(error);
       }
    
        
    }
    
    const validate=(values)=>{
        
        const errors={};
        let email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        let password_pattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
         
        
        if(values.name==="")
        {
            errors.name = "Name should not be empty"
        }
        if(values.email==='')
        {
            errors.email = "Email should not be empty"
        }
        else if(!email_pattern.test(values.email))
        {
            errors.email = "Email doesnt match"
        }
        if(values.password === '')
        {
            errors.password = "Password should not be empty"
        }
        else if (!password_pattern.test(values.password))
        {
            errors.password = "Password should have a minimum 8 and max 16 length and contain 1 special and numberic value atleast"
        }
        if(values.confirm_password === '')
        {
            errors.confirm_password = "Password should not be empty"
        }
        else if(!password_pattern.test(values.confirm_password))
        {
            errors.confirm_password = "Password should have a minimum 8 and max 16 length and contain 1 special and numberic value atleast"
        }
        else if(values.confirm_password !== values.password)
        {
            errors.confirm_password = "Password doesnt match"
        }
        return errors
    }
  return (
    <div className='SignPage'>
        <div className='logoside'><Logo/></div>
    <div className='SiPage'>
    <div className='SignUp' >
        <h1>Sign Up</h1>
        <div className='inputtag'>
            <label>Name</label>
            <input type="text" placeholder='Name' name="name" onChange={handleValues}/>
            {errors.name && <p style={{color:'red'}}>{errors.name}</p>}
        </div>
        <div className='inputtag'>
            <label>Email</label>
            <input type="email" placeholder='email' name="email" onChange={handleValues}/>
            {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
        </div>
        <div className='inputtag'>
            <label>Password</label>
            <input type="password" placeholder='Password' name="password" onChange={handleValues}/>
            {errors.password && <p style={{color:'red',fontSize:'x-small'}}>{errors.password}</p>}
        </div>
        <div className='inputtag'>
            <label>Check Password</label>
            <input type="password" placeholder='Check Password' name="confirm_password" onChange={handleValues}/>
            {errors.confirm_password && <p style={{color:'red'}}>{errors.confirm_password}</p>}
        </div>
        <button onClick={()=>handleRequest()} >SignUp</button>
    </div>
    </div>
    </div>
  )
}

export default SignUp