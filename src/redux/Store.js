import {configureStore} from '@reduxjs/toolkit'
import loginSlice from './LoginSlice'

const reduxStore=configureStore({
reducer:{
    login:loginSlice
}
})
    
export default reduxStore