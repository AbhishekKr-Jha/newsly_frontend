import React from 'react'
import { Link } from 'react-router-dom'
import { MDBContainer, MDBBtn, MDBIcon } from 'mdb-react-ui-kit'
import '../styles/Footer.css'

export default function Footer() {
    return (
        <>



            <footer className="text-center text-lg-start bg-white text-muted footerC">

                <section className="d-flex justify-content-center justify-content-lg-between pb-4">



                    <MDBContainer className=' iconContainer '>


                        <div className="me-5 d-none d-lg-block">
                            <span>Get connected with us on social networks:</span>
                        </div>
                        <section className=''>
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
                                href='#!'
                                role='button'>
                                <MDBIcon fab icon='linkedin-in' />
                            </MDBBtn>

                            <MDBBtn
                                floating
                                className='m-1'
                                style={{ backgroundColor: '#333333' }}
                                href='#!'
                                role='button'>
                                <MDBIcon fab icon='github' />
                            </MDBBtn>
                        </section>
                    </MDBContainer>

                </section>




                <section  >
                    <hr />
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto footerImg">
                                <img src="https://lh3.googleusercontent.com/oDoIif4GV1dMAVqNocJFpT5wc4QsOpuIJjqYSsnX1txTA_Klq1KAkUo-QzvRYwqmt64pDaBy53MCj8znPZfcKDuKZe9nL7lmcuXkPA" alt="loding.." />

                            </div>



                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" >

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Home</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Docs</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">News</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">About Us</a>
                                </p>
                            </div>



                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4" >

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Bookmarks</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Membership</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help</a>
                                </p>
                            </div>



                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" >

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

