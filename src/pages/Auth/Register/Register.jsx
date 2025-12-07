import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router';

export default function Register() {
    const {register , handleSubmit, formState:{errors}}= useForm();
    const {registerUser , updateUserProfile}=useAuth();
    const location=useLocation();
    const navigate= useNavigate();
    console.log(location);


    const handleRegistration =(data) =>{
        console.log('After register',data.photo[0]);
        const profileImg=data.photo[0];


        registerUser(data.email , data.password)
        .then(result =>{
            console.log(result.user);
            const formData=new FormData();
            formData.append('image',profileImg);
            const image_API_URL=`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;
            axios.post(image_API_URL,formData)
            .then(res=>{
                console.log('Image upload response',res.data.data.url);

                const userProfile={
                    displayName: data.name,
                    photoURL: res.data.data.url
                }
                updateUserProfile(userProfile)
                .then(()=>{
                    console.log('User profile updated successfully');
                    navigate(location.state || '/');
                })
                .catch(error =>{
                    console.log('Error updating user profile',error);
                })
            })

    })
    .catch(error =>{
        console.log(error);
    }) } 
    return (
      <div className="max-w-full w-full flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 md:py-0">
        <div className="w-full max-w-sm">
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(handleRegistration)} className="card-body">
              <h1 className="text-3xl font-bold text-center mt-2 text-gray-900">Register</h1>
              <fieldset className="fieldset mt-4">

              <label className="label text-black font-bold">Email</label>
                <input type="email" {...register("email", { required: true })} className="input" placeholder="Email" />
                {errors.email?.type === 'required' && <p className="text-red-600 text-sm">Please Enter Your Email</p>}


              <label className="label text-black font-bold">Name</label>
              <input type="text" {...register("name", { required: true })} className="input" placeholder="Your Name" />
              {errors.name?.type === 'required' && <p className="text-red-600 text-sm">Please Enter Your Name</p>}



              <label className="label text-black font-bold">Your Photo URL</label>
              <input type="file" {...register("photo", { required: true })} className="file-input file-input-neutral" placeholder="Your Photo URL" />
              {errors.photo?.type === 'required' && <p className="text-red-600 text-sm">Please Enter Your Photo URL</p>}


                <label className="label mt-4 text-black font-bold">Password</label>
                <input type="password" {...register("password", { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/ })} className="input" placeholder="Password" />
                {errors.password?.type === 'required' && <p className="text-red-600 text-sm">Password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-red-600 text-sm">Password must be at least 6 characters</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-600 text-sm">Password must have at least one uppercase letter, one lowercase letter, one number and one special character</p>}

                <div className="mt-3"><a className="link link-hover text-black font-bold">Forgot password?</a></div>

                <button className="btn btn-neutral mt-6 w-full">Register</button>
                <p className="text-center text-gray-950 text-sm mt-4">Already have an account? <a state={location.state} href="/login" className="text-primary hover:underline font-bold">Login</a></p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    )
}