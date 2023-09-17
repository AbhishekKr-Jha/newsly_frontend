import React,{useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { fail, success } from '../../Utils/toasts';

export default function OTP() {
    const navigate=useNavigate()
    const location=useLocation()
    console.log(location)
    // const [OTP_Data,setOTP_Data]=useState({
    //     otp:"",email:location.email
    // })
    const [Otp,setOtp]=useState("")
    
    const otp_data=(e)=>{
    // const name=e.target.name
    const value=e.target.value
    // setOTP_Data({...OTP_Data,[name]:value})
    // console.log(OTP_Data)
    setOtp(value)
   
    }

    const verifyOTP=async()=>{
        console.log(Otp)
        if(Otp===""){
            console.log("otp field is empty")
        }
        else if(Otp.length!==6){
            console.log("please enter a 6 digit otp code")
        }
        else{
try {
    const {data}=await axios.post('http://localhost:5000/sendotp',{email:location.state,Otp})
    if(data.success){
        let Email=location.state
        navigate('/signup',{state:Email})        
        console.log("email verification with otp was successful")
    }
} catch (error) {
  console.log("validation otp__----",error)
}
        }
    }
  return (
    <>
     <div className="loginC">
   
   <form >         
       <h2 id='h2l'>Enter your 6 digit OTP</h2> 

       <div className="loginBox">
           <input type="email" value={location.state}  className='editInput' id="email" name="email" placeholder="E-mail address" required disabled/>
           <input type="contact" onChange={otp_data} className='editInput '  name="OTP" placeholder="Enter Your OTP" required />
           
       </div>
       <button  type="button"  onClick={verifyOTP} id="signinbtn" className='otpButton' >Send Otp</button> 
    

   </form>
   </div>
    
    
    </>
  )
}
