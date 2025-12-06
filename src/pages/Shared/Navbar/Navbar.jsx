import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Logo from '../../../components/Logo/Logo'

export default function Navbar() {
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
              <a className="text-sm font-medium hover:text-blue-800 transition-colors" href="/dashboard">Dashboard</a>
            </div>

            {/* Auth Buttons & Cart */}
            <div className="flex items-center gap-4">
              {/* Login / Register or User Profile */}
              <div className="hidden md:flex items-center gap-3">
                <a className="px-4 py-2 bg-[#ebf3e7] dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-sm font-bold text-gray-900 dark:text-white transition-colors" href="/login">Log In</a>
              </div>
            </div>

            {/* Shopping Cart */}
            <button className="relative flex items-center justify-center size-10  transition-colors">
             <FaShoppingCart size={28} color="green" />
            </button>

            {/* Mobile Menu */}
            <button className="md:hidden flex items-center justify-center size-10 rounded-lg text-black">
              <span className="material-symbols-outlined">⁝</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
