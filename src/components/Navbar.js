import React from 'react'
import { useNavigate, NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

import '../styles/Navbar.css'
// import ShowAccount from '../Items/ShowAccount'
import '../styles/MediaQuery/mediaNav.css'
import { Box, IconButton, Modal, Popover, Typography, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { logout } from '../redux/LoginSlice'
import Profile from '../Items/Profile';
import AccountMenu from '../Items/AccountMenu';








export default function Navbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const notify = () => toast.success("Logout Successful")
    const loginState = useSelector((state) => state.login.isLogin)
    const Logout = () => {
        localStorage.removeItem('user')
        navigate('/signing')
        dispatch(logout())
        notify()
    }

    //todo....modaql
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 750,
        height: 500,
        borderRadius: "75px 0 75px 0",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,

    };

    //todo... popper menu
    // const [anchorEl, setAnchorEl] = React.useState(null);

    // const handleClick = (event) => {
    //   setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    //   setAnchorEl(null);
    // };

    // const open = Boolean(anchorEl);
    // const id = open ? 'simple-popover' : undefined;



    //todo....hiding navigation window.......
    const hideNav = () => {
        const navItem = document.getElementById('vnav')
        navItem.style.display = "none";
        navItem.style.transition = "all linear 3s"

    }





    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
                theme="colored"
            />
            <div id="vnav">
                <span className="menuCloseIconStyle" onClick={hideNav}><Box ><IconButton><CloseIcon /></IconButton></Box></span>
                <div className="heading">


                    <img to='/home' src="https://lh3.googleusercontent.com/oDoIif4GV1dMAVqNocJFpT5wc4QsOpuIJjqYSsnX1txTA_Klq1KAkUo-QzvRYwqmt64pDaBy53MCj8znPZfcKDuKZe9nL7lmcuXkPA" id='navLogo' alt="error" />


                    {loginState && <> </>}
                    <h1 id="logoHeading">Newsly</h1>
                </div>
                <div className="navlist">
                    <div className="navitems">
                        <NavLink to="/" className="listitems">Home</NavLink>
                    </div>
                    <div className="navitems" id='navitems'>
                        <NavLink to="/docs" className="listitems" id='hid'>Docs</NavLink>
                    </div>
                    {!loginState && <>
                        <div className="navitems" >
                            <NavLink to="/signing" className="listitems">SignIn/SignUp</NavLink>
                        </div></>}
                    {loginState && <>
                        <div className="navitems" >
                            <NavLink to="/newsapi" className="listitems">News</NavLink>
                        </div>
                    </>}
                    <div className="navitems">
                        <NavLink to="/contact" className="listitems">Contact</NavLink>
                    </div>

                    <div className="navitems">
                        <NavLink to="/about" className="listitems">About</NavLink>
                    </div>
                    {loginState && <>
                       

                        <div className="navitems">
                            <li id="logout" onClick={Logout} className="listitems">Logout</li>
                        </div>
                        <div className="account">
                        <IconButton ><AccountCircleRoundedIcon sx={{ fontSize: "38px" }} />
                        </IconButton>
                        <div className="accountMenu">
                            <div className="accountMenuItems">
                                <span onClick={handleOpen}  >My Profile</span>
                                <span  ><Link id='gh' to='/mynews'>Bookmarks</Link></span>
                                <span style={{ borderBottom: "none" }} onClick={Logout} >Logout</span>
                            </div>
                        </div>

                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>

                                <Profile />
                            </Box>
                        </Modal>
                    </div>
                    </>}
                    {/* <div className="account">
                        <IconButton ><AccountCircleRoundedIcon sx={{ fontSize: "38px" }} />
                        </IconButton>
                        <div className="accountMenu">
                            <div className="accountMenuItems">
                                <span onClick={handleOpen}  >My Profile</span>
                                <span  >Bookmarks</span>
                                <span style={{ borderBottom: "none" }} onClick={Logout} >Logout</span>
                            </div>
                        </div>

                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>

                                <Profile />
                            </Box>
                        </Modal>
                    </div> */}
                        {/* <Popover
//aria-describedby={id}   onClick={handleClick}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
      >
       helloo
      </Popover> */}

                        {/* onClick={handleOpen} */}


                       

                </div>

            </div>

        </>
    )
}
