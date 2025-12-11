import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Logo from '../../../components/Logo/Logo'
import useAuth from '../../../hooks/useAuth'
import { Link } from 'react-router';

export default function Navbar() {
  const { user, logOut } = useAuth() || {};
  const handleLogOut = () => {
    if (!logOut) return;
    logOut()
      .then(() => {
        // navigate to login page after successful logout
        window.location.href = '/login';
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="sticky top-0 z-50 text-[#121b0d] font-display">
      <div className=" w-full border-b border-[#ebf3e7] dark:border-gray-800 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
        <div className="px-4 md:px-10 py-3 flex items-center justify-between">
          <Logo />

          {/* Right Section: Nav Links & Auth Buttons */}
          <div className="flex items-center gap-4 md:gap-8">
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              <a className="text-sm font-medium hover:text-blue-800 transition-colors" href="/">Home</a>
              <a className="text-sm font-medium hover:text-blue-800 transition-colors" href="/meals">Meals</a>
              {user && <a className="text-sm font-medium hover:text-blue-800 transition-colors" href="/dashboard">Dashboard</a>}
              <a className="text-sm font-medium hover:text-blue-800 transition-colors" href="/orderpage">Order</a>
            </div>

            {/* Auth Buttons & Cart */}
            <div className="flex items-center gap-4">
              {/* Login / Register or User Profile */}
              <div className="hidden md:flex items-center gap-3">
                {user ? (
                  <>
                    <button onClick={handleLogOut} className="px-4 py-2 bg-[#ebf3e7] dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-sm font-bold text-gray-900 dark:text-white transition-colors">Log Out</button>
                    {user.photoURL ? (
                      <img src={user.photoURL} alt={user.displayName || 'User'} className="w-8 h-8 rounded-full object-cover" />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm font-medium text-gray-800">{(user.displayName && user.displayName[0]) || 'U'}</div>
                    )}
                  </>
                ) : (
                  <>
                  <button className="px-4 py-2 bg-[#ebf3e7] dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-sm font-bold text-gray-900 dark:text-white transition-colors">
                   <a className=" text-white text-sm font-medium hover:text-blue-200 transition-colors" href="/login">Log In</a>
                  </button>
                  </>
                )}
              </div>
              <Link to="/chef" className="hidden md:flex px-4 py-2 bg-[#ebf3e7] dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-sm font-bold text-gray-900 dark:text-white transition-colors">Be a Chef</Link>
            </div>


            {/* Mobile Menu */}
            <button className="md:hidden flex items-center justify-center size-10 rounded-lg text-black">
              <span className="dropdown dropdown-end">⁝</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
