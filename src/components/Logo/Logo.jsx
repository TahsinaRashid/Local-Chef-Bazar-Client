import React from 'react'
import logo from '../../assets/logo.png';

export default function Logo() {
  return (
    <div>
        <div className="flex items-center gap-8">
            {/* Logo and Project Name */}
            <a className="flex items-center gap-2 group" href="#">
              <div className="size-8 rounded-full overflow-hidden">
                <img src={logo} alt="" />
              </div>
              <h2 className="text-lg font-bold leading-tight tracking-tight text-green-900">LocalChefBazaar</h2>
            </a>
          </div>
    </div>
  )
}
