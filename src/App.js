import {  Routes, Route } from "react-router-dom";
import { useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {login} from './redux/LoginSlice'

import './App.css';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Registeration from './components/Registeration';
import News from './components/News';
import Signing from './components/Signing';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Docs from "./components/Docs";
import Logo from "./components/Logo";
import MyNews from "./components/MyNews";
import Profile from "./Items/Profile";


function App() {
const dispatch=useDispatch()
    const loggedInOrNot=localStorage.getItem('user')
    useEffect(()=>{
    if(loggedInOrNot){
    dispatch(login())
 } })
  
 return(
    <>

      <div className="containerM">
        <Logo/>
   <Navbar />
<Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Docs/>} />
            <Route path="login" element={<Login />} />
            <Route path="newsapi" element={<News />} />
            <Route path="about" element={<About />} />
            <Route path="signing" element={<Signing />} />
            <Route path="contact" element={<Contact />} />
            <Route path="signup" element={<Registeration />} />
            <Route path="mynews" element={<MyNews />} />
            <Route path="myprofile" element={<Profile />} />
            <Route path="footer" element={<Footer />} />
      
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
