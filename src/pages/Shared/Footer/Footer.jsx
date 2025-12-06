import React from 'react'
import Logo from '../../../components/Logo/Logo';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 px-6 md:px-12 mt-10">
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-10">
        <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-sm text-gray-950 font-semibold ">Connecting wonderful cooks with food lovers. Authentic, fresh and local.</p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-black">Contact</h4>
          <p className="text-sm text-gray-950">Foodie Lane, Tangail</p>
          <a className="text-sm text-gray-950 hover:text-primary transition-colors" href="tel:+8801748614843">+880-1748614843</a>
          <a className="text-sm text-gray-950 hover:text-primary transition-colors" href="mailto:customercare@localchefbazaar.com">customercare@localchefbazaar.com</a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-black">Follow Us</h4>
          <div className="flex items-center gap-4">
            <a className="text-gray-950 hover:text-primary transition-colors text-xl" href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a className="text-gray-950 hover:text-primary transition-colors text-xl" href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a className="text-gray-950 hover:text-primary transition-colors text-xl" href="https://www.twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-black">Working Hours</h4>
          <p className="text-sm text-gray-950">Mon - Fri: 9:00 AM - 8:00 PM</p>
          <p className="text-sm text-gray-950">Sat: 10:00 AM - 6:00 PM</p>
          <p className="text-sm text-gray-950">Sun: Closed</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col justify-between items-center gap-4 text-xs text-gray-950">
        <p>© 2025 LocalChefBazaar Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <a className="hover:text-primary" href="#">Privacy Policy</a>
          <a className="hover:text-primary" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
