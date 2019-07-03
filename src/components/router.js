import React from 'react'
import { BrowserRouter as R, Route } from "react-router-dom";
import Login from './auth/login'
import Signup from './auth/signup'


const CustomRouter = () => {
   return (
       <R>
           {/* <Route path='/' component={}></Router> */}
           <Route path='/login/' component={Login}></Route>
           <Route path='/signup/' component={Signup}></Route>
           

       </R>
   )
}

export default CustomRouter