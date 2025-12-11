import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router';

export default function Register() {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm(); 
    const { registerUser, updateUserProfile } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleRegistration = (data) => {
        console.log('After register', data.photo[0]);
        const profileImg = data.photo[0];

        registerUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                const formData = new FormData();
                formData.append('image', profileImg);
                const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;
                axios.post(image_API_URL, formData)
                    .then(res => {
                        console.log('Image upload response', res.data.data.url);

                        const userProfile = {
                            displayName: data.name,
                            photoURL: res.data.data.url,
                            // address: data.address, 
                        }
                        updateUserProfile(userProfile)
                            .then(() => {
                                console.log('User profile updated successfully');
                                navigate(location.state || '/');
                            })
                            .catch(error => {
                                console.log('Error updating user profile', error);
                            })
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="max-w-full w-full flex items-center justify-center px-4 sm:px-6 md:px-8 py-8">
            <div className="w-full max-w-lg md:max-w-2xl"> 
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(handleRegistration)} className="card-body">
                        <h1 className="text-3xl font-bold text-center mt-2 text-gray-900">Register</h1>
                        
                        <fieldset className="fieldset mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">

                            {/* 1. Email Field */}
                            <div>
                                <label className="label text-black font-bold">Email</label>
                                <input type="email" {...register("email", { required: true })} className="input input-bordered w-full" placeholder="Email" />
                                {errors.email?.type === 'required' && <p className="text-red-600 text-sm">Please Enter Your Email</p>}
                            </div>


                            {/* 2. Name Field */}
                            <div>
                                <label className="label text-black font-bold">Name</label>
                                <input type="text" {...register("name", { required: true })} className="input input-bordered w-full" placeholder="Your Name" />
                                {errors.name?.type === 'required' && <p className="text-red-600 text-sm">Please Enter Your Name</p>}
                            </div>

                            
                            {/* 3. Address Field */}
                            <div>
                                <label className="label text-black font-bold">Address</label>
                                <input type="text" {...register("address", { required: true })} className="input input-bordered w-full" placeholder="Your Address" />
                                {errors.address?.type === 'required' && <p className="text-red-600 text-sm">Please Enter Your Address</p>}
                            </div>
                            

                            {/* 4. Photo Field */}
                            <div>
                                <label className="label text-black font-bold">Your Photo</label>
                                <input type="file" {...register("photo", { required: true })} className="file-input file-input-neutral w-full" />
                                {errors.photo?.type === 'required' && <p className="text-red-600 text-sm">Please Select Your Photo</p>}
                            </div>


                            {/* 5. Password Field */}
                            <div>
                                <label className="label text-black font-bold">Password</label>
                                <input type="password" {...register("password", { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/ })} className="input input-bordered w-full" placeholder="Password" />
                                {errors.password?.type === 'required' && <p className="text-red-600 text-sm">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600 text-sm">Password must be at least 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600 text-sm">Password must have at least one uppercase letter, one lowercase letter, one number and one special character</p>}
                            </div>

                            {/* 6. Confirm Password Field */}
                            <div>
                                <label className="label text-black font-bold">Confirm Password</label>
                                <input
                                    type="password"
                                    {...register("confirmPassword", {
                                        required: true,
                                        validate: value => 
                                            value === getValues('password') || "Passwords do not match"
                                    })}
                                    className="input input-bordered w-full"
                                    placeholder="Confirm Password"
                                />
                                {errors.confirmPassword?.type === 'required' && <p className="text-red-600 text-sm">Please re-enter your password</p>}
                                {errors.confirmPassword && errors.confirmPassword.type === 'validate' && (
                                    <p className="text-red-600 text-sm">{errors.confirmPassword.message}</p>
                                )}
                            </div>

                            {/* Register Button and Links - Full Width and Centered */}
                            <div className="col-span-full mt-3">
                                <a className="link link-hover text-black font-bold">Forgot password?</a>
                            </div>

                            <div className="col-span-full">
                                <button className="btn btn-neutral mt-3 w-full">Register</button>
                                <p className="text-center text-gray-950 text-sm mt-4">
                                    Already have an account? 
                                    <a state={location.state} href="/login" className="text-primary hover:underline font-bold">Login</a>
                                </p>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}