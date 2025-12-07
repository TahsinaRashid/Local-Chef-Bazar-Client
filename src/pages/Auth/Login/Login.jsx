import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';

export default function Login() {

    const {register,handleSubmit ,formState:{errors}}=useForm();
    const {signInUser}= useAuth();
    const location=useLocation();
    const navigate= useNavigate();



    const handleLogin=(data)=>{
        console.log(data);
        signInUser(data.email , data.password)
        .then(result =>{
            console.log(result.user);
            navigate(location.state || '/');
        })
        .catch(error =>{
            console.log(error);
        })
    }

  return (
    <div className="max-w-full w-full flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-sm">
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">Login</h1>
            <fieldset className="fieldset">
              
              <label className="label text-black font-bold">Email</label>
              
              
              <input type="email" {...register("email" , { required: true })} className="input" placeholder="Email" />
              {errors.email?.type === 'required' && <p className="text-red-600 text-sm">Email is required</p>}
              
              <label className="label text-black font-bold mt-4">Password</label>


              <input type="password" {...register("password" , { required: true ,minLength: 6 })} className="input" placeholder="Password" />
              {errors.password?.type === 'required' && <p className="text-red-600 text-sm">Password is required</p>}
             {errors.password?.type === 'minLength' && <p className="text-red-600 text-sm">Password must be at least 6 characters</p>}

              <div className="mt-3"><a className="link link-hover text-black font-bold text-sm">Forgot password?</a></div>
             
              <button className="btn btn-neutral mt-6 w-full">Login</button>
              <p className="text-center text-gray-950 text-sm mt-4">
                Don't have an account? <a state={location.state} href="/register" className="text-primary hover:underline font-bold">Register here</a>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}