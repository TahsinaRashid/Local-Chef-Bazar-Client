import React from 'react'
import logo from '../../assets/logo.png';
import { PiChefHat } from 'react-icons/pi';

export default function Logo() {
  return (
    <div>
        <div className="flex items-center gap-2">
            {/* Logo and Project Name */}
            <a className="flex items-center gap-1 group" href="/">
            

            <PiChefHat className="text-md md:text-2xl text-green-700" />
            
            <span className="text-md font-bold leading-tight tracking-tight text-green-900">
                LocalChefBazaar
            </span>
            
        </a>
          </div >
          
    </div>
  )
}
