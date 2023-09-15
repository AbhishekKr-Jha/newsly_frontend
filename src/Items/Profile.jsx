import React from 'react'
import { useState, useEffect } from 'react';
import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import './profile.css'
import axios from 'axios';





export default function Profile() {
  const [userLoginData, setuserLoginData] = useState("")
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userLoginDetails'))
    console.log(userData)
    setuserLoginData(userData)
    console.log("____", userLoginData)
  },[])



  const updateProfile = () => {
    const element = document.getElementsByClassName('userProfileData')[0]
    element.style.display = "none"
    const updationForm=document.getElementsByClassName('updationForm')[0]
   updationForm.style.display="flex"
  }

const new_UpdatedData=(e)=>{
const name=e.target.name
const value=e.target.value
setuserLoginData({...userLoginData,[name]:value})
console.log(userLoginData)
}


  const saveUpdated_data=async(e)=>{
  e.preventDefault()
  console.log(".........updatikim.....")
    const id=localStorage.getItem('user')
    try {
      const {data}=await axios.put(`http://localhost:5000/updateUserDetails/${id}`,userLoginData)
      if(data.success){
        localStorage.setItem('userLoginDetails',JSON.stringify(userLoginData))
        console.log("updation process successful")
      }
      console.log(data.message)
    } catch (error) {
    console.log("___:",error)
    }
   
  }

  return (
    <>

      <div className="profileC">
        <div className="userProfileData">
        <div className="left">
          {console.log("-----", userLoginData)}
          <img src="https://c0.wallpaperflare.com/preview/481/723/825/wallpaper-background-wolf-animal-thumbnail.jpg" alt="err" />
          <div className="profileName">
            <h3>{userLoginData.firstName}&nbsp;_&nbsp;{userLoginData.lastName}</h3><IconButton onClick={updateProfile}> <EditIcon /></IconButton>
          </div>
        </div>
        {/* <div className="right">
          <span>joined on :&nbsp; khewfrkjfk</span>
          <span>email:&nbsp;{userLoginData.email}</span>
          <span>contact:&nbsp;{userLoginData.contact}</span>
          <span>your intersts: &nbsp;</span>
        </div> */}
        </div>
    
        <div className="updationForm" style={{display:"none"}}>
          <h1> Updation Form...</h1>
<form  className='updationFormInputs' onSubmit={saveUpdated_data}>
<input  type="text" onChange={new_UpdatedData} className='editInput'id="first-name" value={userLoginData.firstName} name="firstName" placeholder="First_Name"  />
<input  type="text" onChange={new_UpdatedData} className='editInput' id="last-name" value={userLoginData.lastName} name="lastName" placeholder="Last_Name" />
<input  type="email" className='editInput' id="email" value={userLoginData.email} name="email" placeholder="E-mail address" required autocomplete="off"disabled />
<input  type="tel" onChange={new_UpdatedData} className='editInput' id="tel" value={userLoginData.contact} name="contact" placeholder="Contact" required  autocomplete="off"/>  
<button type="submit" id='signinbtn'>Save</button>
</form>
        </div>
    
        </div>
    </>
  )
}
