import React from 'react'
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

export default function PrivateRoute({children}) {
    const {user,loading}=useAuth();
    const location=useLocation();
   

    if(loading){
        return <span className='loading loading-infinity loading-lg'></span>
    }
    if(!user){
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }
    return children;
  return (
    <div>PrivateRoute</div>
  )
}
