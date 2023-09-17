import React from 'react'
import {useState} from 'react'
import axios  from 'axios';
import { Link,useNavigate,useLocation } from "react-router-dom";
import './Registeration.css'
 import './mediaRegister.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fail, success } from '../../Utils/toasts';

export default function Regiteration() {
  const navigate=useNavigate()
const location=useLocation()
console.log(location) 
 
  // console.log("-----",state)
//   const success = (text) => toast.success(text,{
//     position: "top-right",
// autoClose: 3000,
// hideProgressBar: false,
// closeOnClick: true,
// pauseOnHover: false,
// draggable: false,
// progress: undefined,
// theme: "colored",
// })
// const fail = (text) => toast.error(text,{
//     position: "top-right",
// autoClose: 3000,
// hideProgressBar: false,
// closeOnClick: true,
// pauseOnHover: false,
// draggable: false,
// progress: undefined,
// theme: "colored"
// })

  const [registerData,setregisterData]=useState({
    firstName:"",lastName:"",contact:"",pw:"",email:location.state,cpw:""
})

const getRegister=(e)=>{
const name=e.target.name
const value=e.target.value
setregisterData({...registerData,[name]:value})
// console.log(loginData)
}

const registerBtnClick=async(e)=>{
    e.preventDefault()
    try {
    const {data}=await axios.post('http://localhost:5000/register',registerData)       
        console.log(data.message)    
        if(data.success){
          navigate('/signing')
          success(data.message)
         
        }                                                               
    } catch (error) {
      fail(error)
        console.log("_ _",error)
    }
}
  return (
    <>

      <div className="RegisterationC">
        <ToastContainer position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored" />
        <h2 style={{ color: 'black' }} id="h2r">SignUp</h2>

          <h5 id='smallHeading'>Create account in easy Steps</h5>
          <form onSubmit={registerBtnClick} >
        <div className="CreateAccountContainer">
          <div className="namelist newaccountdiv">
            <div>
              <input onChange={getRegister} value={registerData.firstName} type="text" className="namefield" id="first-name" name="firstName" placeholder="First_Name" required />
            </div>
            <div >

              <input onChange={getRegister} value={registerData.lastName} type="text" className="namefield" id="last-name" name="lastName" placeholder="Last_Name" required />
            </div>
          </div>

          <input value={registerData.email} type="email" className='editInput' id="email" name="email" placeholder="E-mail address" required autocomplete="off" disabled/>
          <input onChange={getRegister} value={registerData.contact} type="tel" className='editInput' id="tel" name="contact" placeholder="Contact" required  autocomplete="off"/>  
         <input onChange={getRegister} value={registerData.pw} type="password" className='editInput' id="pw" name="pw" placeholder="Password" required />
          <input onChange={getRegister} value={registerData.cpw} type="text" className='editInput' id="cpw" name="cpw" placeholder="Confirm Password" required />
          <div id="div1">
            <input type="checkbox"  id="policy" name="vehicle1" value="Bike" required />
            <label for="policy">Agree to our privacy policy</label>
          </div>
          <button type="submit" id="signinbtn">SignUp</button>
          <div id="div2">
            Already have an account?<Link className='anotherPageLink' to='/login'> <u>Login</u></Link>
          </div>


        </div>
        </form>
      </div>


    </>
  )
}
