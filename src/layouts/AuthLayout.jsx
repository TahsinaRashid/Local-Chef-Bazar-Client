import React from 'react'
import Navbar from '../pages/Shared/Navbar/Navbar'
import { Outlet } from 'react-router'
import log from '../assets/f3.jpg';
import Footer from '../pages/Shared/Footer/Footer';

export default function AuthLayout() {
  return (
    
    <div className="max-w-full  ">
        <Navbar />

      {/* Main Content Area with Background Image */}
      <div
        className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-0 bg-cover bg-center bg-no-repeat max-w-full min-h-[576px]"
        style={{
          backgroundImage: `url(${log})`,
          backgroundPosition: 'right center',
        }}
      >
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 lg:to-transparent lg:absolute lg:inset-0"></div>

        {/* Form Container - Left side */}
        <div className="relative z-10 w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 md:py-0">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
        
  )
}
