import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import './OtpVerification.css'

export default function OtpVerification() {
    const navigate=useNavigate()
    const [VerificationData,setVerificationData]=useState({
        otp:"",email:""
    })
    
    const verification_data=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setVerificationData({...VerificationData,[name]:value})
    console.log(VerificationData)
    }

const otpBtn=async(e)=>{
    e.preventDefault()
    console.log("button clicked")
    console.log(VerificationData.email)
    try {
        const {data}=await axios.post('http://localhost:5000/sendotp',VerificationData)
        if(data.success){
            console.log("email sent successfully")
            navigate('/otpVerification',{state:VerificationData.email})
        }
        else{
console.log("email not send")
        }
        
    } catch (error) {
        console.log("verifictaion error___",error)

    }
}

  return ( 
   <>
    <div className="loginC">
   
   <form >         
       <h2 id='h2l'>Enter your Email</h2> 

       <div className="loginBox">
           <input type="email" onChange={verification_data} value={VerificationData.email} className='editInput' id="email" name="email" placeholder="E-mail address" required />
         
       </div>
       <button  type="button" onClick={otpBtn} id="signinbtn" className='otpButton' >Send Otp</button> 
     
   </form>
   </div>
   </>
  )
}
