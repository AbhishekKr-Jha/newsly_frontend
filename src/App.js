import {  Routes, Route } from "react-router-dom";
import { useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {login} from './redux/LoginSlice'

import './App.css';
import About from './components/About/About';
import Home from './components/Hero/Home';
import Login from './components/Login_Section/Login';
import Navbar from './components/Nav/Navbar';
import Registeration from './components/Registeration_Section/Registeration';
import News from './components/News_Section/News';
import Signing from './components/Signing';
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Docs from "./components/Docs/Docs";
 import Logo from "./components/Logo";
import MyNews from "./components/MyNews_Section/MyNews";
import Profile from "./Items/Profile";
import OtpVerification from "./components/Registeration_Section/OtpVerification";
import OTP from "./components/Registeration_Section/OTP";



function App() {

  const BASE_URL="https://headlinehub-backend-v1.onrender.com"

const dispatch=useDispatch()
    const loggedInOrNot=localStorage.getItem('user')
    useEffect(()=>{
    if(loggedInOrNot){
    dispatch(login())
 } })
  
 return(
    <>

      <div className="containerM" >
        <Logo/>
   <Navbar />
<Routes>
            <Route index element={<Home  back_url={BASE_URL} />} />
            <Route path="/" element={<Home back_url={BASE_URL} />} />
            <Route path="/docs" element={<Docs/>} />
            <Route path="login" element={<Login back_url={BASE_URL} />} />
            <Route path="newsapi" element={<News back_url={BASE_URL} />} />
            <Route path="about" element={<About />} />
            <Route path="signing" element={<Signing />} />
            <Route path="contact" element={<Contact />} />
            <Route path="signup" element={<Registeration back_url={BASE_URL} />} />
            <Route path="mynews" element={<MyNews back_url={BASE_URL} />} />
            <Route path="myprofile" element={<Profile back_url={BASE_URL} />} />
            <Route path="footer" element={<Footer />} />
            <Route path="otpVerification" element={<OTP back_url={BASE_URL} />} />
            <Route path="emailVerification" element={<OtpVerification back_url={BASE_URL} />} />
          </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;



// babel-preset-react-app is part of the create-react-app project, which      
// is not maintianed anymore. It is thus unlikely that this bug will
// ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to  
// your devDependencies to work around this error. This will make this message
// go away.
