import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {  Link,useNavigate } from "react-router-dom";
import './Login.css'
import './mediaLogin.css'
import {login} from '../../redux/LoginSlice.js'
import {useDispatch} from 'react-redux'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { fail, success } from '../../Utils/toasts';


export default function Login() {
//     const logedIn = () => toast.success("Login Successful",{
//         position: "top-right",
// autoClose: 3000,
// hideProgressBar: false,
// closeOnClick: true,
// pauseOnHover: false,
// draggable: false,
// progress: undefined,
// theme: "colored",
//     })
//     const notlogedIn = () => toast.error("Invalid Credentials",{
//         position: "top-right",
// autoClose: 3000,
// hideProgressBar: false,
// closeOnClick: true,
// pauseOnHover: false,
// draggable: false,
// progress: undefined,
// theme: "colored"
//     })

const dispatch=useDispatch()
const navigate=useNavigate()

const [loginData,setloginData]=useState({
    pw:"",email:""
})

const getLogin=(e)=>{
const name=e.target.name
const value=e.target.value
setloginData({...loginData,[name]:value})
}

const loginBtnClick=async(e)=>{
    console.log("yes")
    e.preventDefault()
    try {
    const {data}=await axios.post('http://localhost:5000/login',loginData)     
        console.log(data.message)    
        console.log(data.success)       
        if(data.success){ 
//  logedIn()
success("login successful")
dispatch(login())
        localStorage.setItem('user',data.loginDetails._id) 
        localStorage.setItem('userLoginDetails',JSON.stringify(data.loginDetails))
    
navigate('/')
        }
else{
    fail("invalid credentials")
}
                                                    
} catch (error) {
       fail("error while login....")
        console.log("_ _",error)
       
    }
}

    return (
        <>
<ToastContainer/>
            <div className="loginC">
   
            <form onSubmit={loginBtnClick}>
                <h2 id='h2l'>SignIn</h2> 

                <div className="loginBox">
                    <input type="email" onChange={getLogin} value={loginData.email} className='editInput' id="email" name="email" placeholder="E-mail address" required />

                    <input type="text" onChange={getLogin} value={loginData.pw} className='editInput' id="pw" name="pw" placeholder="Password" required />

                </div>
                <button type="submit" id="signinbtn" >SignIn</button> 
                <div id="div2">
                    Create new account?<Link id='l4' to='/signup'> <u>SignUp</u></Link>
                </div>


            </form>
            </div>



        </>
    )
}
