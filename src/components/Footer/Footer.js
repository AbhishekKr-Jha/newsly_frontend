import React from 'react'
import { Link } from 'react-router-dom'

import { MDBContainer, MDBBtn, MDBIcon } from 'mdb-react-ui-kit'
import './Footer.css'
import './mediaFooter.css'

export default function Footer() {
    return (
        <>



            <footer className="text-center text-lg-start bg-white text-muted footerC " >

                <section className="d-flex justify-content-center justify-content-lg-between pb-4 iconSection">

                    <MDBContainer className=' iconContainer '>

<div className="me-5 d-none d-lg-block ">
                            <span>Get connected with us on social networks:</span>
                        </div>
                        <section >
                            <MDBBtn
                                floating
                                className='m-1'
                                style={{ backgroundColor: '#3b5998' }}
                                href='#!'
                                role='button'>
                                <MDBIcon fab icon='facebook-f' />
                            </MDBBtn>

                            <MDBBtn
                                floating
                                className='m-1'
                                style={{ backgroundColor: '#55acee' }}
                                href='#!'
                                role='button'>
                                <MDBIcon fab icon='twitter' />
                            </MDBBtn>

                            <MDBBtn
                                floating
                                className='m-1'
                                style={{ backgroundColor: '#dd4b39' }}
                                href='#!'
                                role='button'>
                                <MDBIcon fab icon='google' />
                            </MDBBtn>
                            <MDBBtn
                                floating
                                className='m-1'
                                style={{ backgroundColor: '#ac2bac' }}
                                href='#!'
                                role='button'>
                                <MDBIcon fab icon='instagram' />
                            </MDBBtn>

                            <MDBBtn
                                floating
                                className='m-1'
                                style={{ backgroundColor: '#0082ca' }}
                                href='https://www.linkedin.com/in/abhishek-jha1108/' target="_blank" rel="noopener noreferrer"
                                role='button'>
                                <MDBIcon fab icon='linkedin-in' />
                            </MDBBtn>

                            <MDBBtn
                                floating
                                className='m-1'
                                style={{ backgroundColor: '#333333' }}
                                href='https://github.com/AbhishekKr-Jha' target="_blank" rel="noopener noreferrer"
                                role='button'>
                                <MDBIcon fab icon='github' />
                            </MDBBtn>
                        </section>
                    </MDBContainer>

                </section>




                {/* <section  style={{ backgroundColor: 'green' }} > */}
                <section >
                    <hr />
                    <div className="container text-center text-md-start mt-5 ">

                        <div className="row mt-3 footerLinks" >

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto footerImg">
                                <img src="https://lh3.googleusercontent.com/oDoIif4GV1dMAVqNocJFpT5wc4QsOpuIJjqYSsnX1txTA_Klq1KAkUo-QzvRYwqmt64pDaBy53MCj8znPZfcKDuKZe9nL7lmcuXkPA" alt="loding.." />

                            </div>



                            {/* <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" style={{backgroundColor:"orange"}} > */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" >

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Links
                                </h6>
                                <p>
                                    <Link to='/' className="text-reset">Home</Link>
                                </p>
                                <p>
                                    <Link to='docs'className="text-reset">Docs</Link>
                                </p>
                                <p>
                                    <Link to='newsapi' className="text-reset">News</Link>
                                </p>
                                <p>
                                    <Link to='about' className="text-reset">About Us</Link>
                                </p>
                            </div>



                            {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4"  style={{ backgroundColor: 'blue' }}> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4" >

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <Link to='mynews' className="text-reset">Bookmarks</Link>
                                </p>
                                <p>
                                    <Link to='#' className="text-reset">Membership</Link>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Settings</a>
                                </p>
                                <p>
                                    <Link to='contact' className="text-reset">Help</Link>
                                </p>
                            </div>



                            {/* <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4"  style={{ backgroundColor: 'yellow' }}> */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4"  >

                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3 text-secondary"></i> India , W.B. Kolkata</p>
                                <p>
                                    <i className="fas fa-envelope me-3 text-secondary"></i>
                                    NewslyDigital@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print me-3 text-secondary"></i> + 01 234 567 89</p>
                            </div>

                        </div>

                    </div>
                </section>



                <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}>
                    © 2023 Copyright:
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">Newsly.com</a>
                </div>

            </footer >

        </>
    )
}

