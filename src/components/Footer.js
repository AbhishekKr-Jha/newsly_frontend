import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <>
    {/* https://cdn.dribbble.com/users/975543/screenshots/4623054/1_d.png */}
<hr />
    <div className="footerC">
      <div className="firstFooterDiv">       
      <div className="footerLogo">
            <div className="footerImageDiv">
                <img src="https://lh3.googleusercontent.com/oDoIif4GV1dMAVqNocJFpT5wc4QsOpuIJjqYSsnX1txTA_Klq1KAkUo-QzvRYwqmt64pDaBy53MCj8znPZfcKDuKZe9nL7lmcuXkPA" alt="error"  id='footerImg' />
                <h1 className="footerHeading">ewsly</h1>
            </div>
        </div>
        <div className="links1">
       <Link className="links" >jknlmjkl</Link>
       <Link className="links" >jknlmjkl</Link>
       <Link className="links" >jknlmjkl</Link>
       <Link className="links" >jknlmjkl</Link>
       </div>
        <div className="map"></div>
    </div>

<div className="secondFooterDiv">

</div>


    </div>
 
    </>
)
}

