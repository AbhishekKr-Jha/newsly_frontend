import React from 'react'
import{ Box, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import {Link } from 'react-router-dom';

export default function Logo() {
  const showNav=()=>{
    const navItem=document.getElementById('vnav')
    navItem.style.display = "block"; 
  }
    const styleImg={
width:"45px",
position:"absolute",
top:"6px",
left:"5px",
display:"none"
    }
    const styleIcon={
      width:"45px",
position:"absolute",
top:"6px",
right:"5px" ,
display:"none"

    }
  return ( 
   <>
     
   <img style={styleImg} src='https://lh3.googleusercontent.com/oDoIif4GV1dMAVqNocJFpT5wc4QsOpuIJjqYSsnX1txTA_Klq1KAkUo-QzvRYwqmt64pDaBy53MCj8znPZfcKDuKZe9nL7lmcuXkPA' alt='err'/>

   <div className="MenuIcon" style={styleIcon}>
    <Box><IconButton onClick={showNav}><MenuIcon sx={{ fontSize:"28px"}}/></IconButton></Box>
   </div>

   </>
  )
}
