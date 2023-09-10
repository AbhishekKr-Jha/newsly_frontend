import React from 'react'
import '../styles/Contact.css'
import '../styles/MediaQuery/mediaContact.css'
import { Box, IconButton } from '@mui/material'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';

export default function Contact() {
  return (
    <>

      <div className="contactC">

        <div className="contactImage">
          <img src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg" id='contactLogo' alt="error" />
         
        </div>
        <div className="contactText ">
          <div className="box">
            <h1 id='contactHeading'>Contact Us</h1>
            <div className="imageIcons">
              <Box>
                <IconButton className='iconBtn'><AddIcCallIcon /></IconButton>
                <IconButton className='iconBtn'><AlternateEmailSharpIcon /></IconButton>
              </Box>
               </div>
            </div>
            <h1 id='secondaryContactHeading'>Yor Queries, our Solutions!</h1>

            <form method='post' action='https://formspree.io/f/mbjvgvba'>

              <div className="contactInfo">
                <input type="text" name='email' className='contactInput' placeholder='email address' required />
                <textarea rows="6" cols="30" name='message' type="text"  id='contactTextarea' className='contactInput' placeholder='your message' />
              </div>
              <button type="submit" id='signinbtn'>Send</button>
            </form>
          </div>
        </div>

      </>
      )
}







