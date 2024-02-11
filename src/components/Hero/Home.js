import React from 'react'
import {useNavigate} from 'react-router-dom'

import './Home.css'
import './mediaHome.css'


export default function Home() {
  const navigate=useNavigate()
  return (
    <>
    <div className="homeC">
<div className="page1">
 {/* <img src="https://img.freepik.com/premium-photo/white-desktop-with-news-screen_72104-5065.jpg?w=2000" alt="err"/>
  <img src='https://img.freepik.com/premium-vector/online-news-news-update-news-website_1200-705.jpg?w=2000' alt="err"/> */}
     <h1 className="homeHeading">News Monkey</h1>
     <h3>Your News Buddy!</h3>
     <h5>Get the important latest and Updated News digitally on your samrtphones and laptops.See News related to topics you choose. With the exam preparation feature for Current affairs and Events. Wanna try it!</h5>
     <button id='startBtn' onClick={()=>navigate('/signing')} type="button">SignIn/Up</button>

    </div>
    
<div className="page2"></div>


    </div>





      
    </>
  )
}
