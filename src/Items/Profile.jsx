import React from 'react'
import { useState,useEffect } from 'react';
import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import './profile.css'





export default function Profile() {
  const [loginData,setloginData]=useState({
    firstName:"",lastName:"",email:""
  })
useEffect(()=>{
  const userData=JSON.parse(localStorage.getItem('userLoginDetails'))
  console.log(userData)
  setloginData(userData)
  console.log("____",loginData)
},[])
  return (
   <>
   
   <div className="profileC">
<div className="left">
  {console.log("-----",loginData)}
    <img src="https://c0.wallpaperflare.com/preview/481/723/825/wallpaper-background-wolf-animal-thumbnail.jpg" alt="err" />
    <div className="profileName">
        <h3>{loginData.firstName}&nbsp;_&nbsp;{loginData.lastName}</h3><IconButton> <EditIcon/></IconButton>                        
    </div>
</div>
<div className="right">
 <span>joined on :&nbsp; khewfrkjfk</span>
<span>email:&nbsp;{loginData.email}</span>
 <span>contact:&nbsp;{loginData.contact}</span> 
<span>your intersts: &nbsp;</span>
{/* <span>bookmarks collection: { loginData.bookmarks==[] ? "No bookmarks yet" : loginData.bookmarks.length }</span>  */}




</div>
   </div>
   
   </>
  )
}
