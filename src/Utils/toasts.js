import { toast } from "react-toastify"

export const success = (text) => toast.success(text,{
    position: "top-right",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: false,
draggable: false,
progress: undefined,
theme: "colored",
})

export const fail = (text) => toast.error(text,{
    position: "top-right",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: false,
draggable: false,
progress: undefined,
theme: "colored"
})













