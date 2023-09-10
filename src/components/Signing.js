import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Signing.css'
import '../styles/MediaQuery/mediaSigning.css'

export default function Signing() {
  return (
   <>
   
   <div className="SigningC">

<Link to='/signup' className="signingitem" title="Click for Registeration or SignUp">Register</Link>
<Link to='/login' className="signingitem" title="Click for Login or SignIn">Login</Link>


   </div>

   </>

  )
}
