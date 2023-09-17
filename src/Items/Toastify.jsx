import React from 'react'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Toastify(props) {
const toast=()=>{
                                                             

    const toastify = () => toast[props.status]([props.message],{
        position: "top-right",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: false,
draggable: false,                     
progress: undefined,
theme: "colored",
    })

  } 
    
  return ( 
  <>
  <ToastContainer/>

  </>
  )
}
