import React from 'react'
import Banner from '../Banner/Banner'
import { MdMenuBook } from 'react-icons/md'
import { LuChefHat } from 'react-icons/lu'
import { GrDeliver } from 'react-icons/gr'
import Reviews from '../Reviews/Reviews';
const reviewsPromise= fetch('/reviews.json').then(res=>res.json());

export default function Home() {
  return (
    <>
      <Banner />
      <div className="  w-full  px-4 md:px-10 py-16 ">
        <div className=" mx-auto flex flex-col gap-12">
          <div className="text-center flex flex-col gap-3">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-800 text-lg max-w-2xl mx-auto">Getting fresh food is easier than ever. Support your neighbors and eat well.</p>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Step 1 */}
            <div className=" flex flex-col items-center text-center p-6 rounded-2xl bg-green-200 border border-[#d7e7cf] dark:border-gray-800 transition-transform hover:-translate-y-1 duration-300">
               <MdMenuBook size={64} className="mb-6 text-primary"/>
              
              <h3 className="text-xl font-bold mb-3">1. Choose Meal</h3>
              <p className="text-black">Browse diverse menus from local chefs based on cuisine, dietary needs, or location.</p>
            </div>
            

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-green-200 border border-[#d7e7cf] dark:border-gray-800 transition-transform hover:-translate-y-1 duration-300">
             <LuChefHat size={64} className="mb-6 text-primary"/>
              <h3 className="text-xl font-bold mb-3">2. Chef Cooks</h3>
              <p className="text-black">Your neighborhood chef prepares your order with fresh, locally sourced ingredients.</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-green-200 border border-[#d7e7cf] dark:border-gray-800 transition-transform hover:-translate-y-1 duration-300">
              <GrDeliver size={64} className="mb-6 text-primary"/>
              <h3 className="text-xl font-bold mb-3">3. Delivery / Pickup</h3>
              <p className="text-black">Enjoy a hot meal delivered to your doorstep or pick it up nearby on your way home.</p>
            </div>
            </div>
          </div>
      </div>
      <Reviews reviewsPromise={reviewsPromise} />
    </>
  )
}
