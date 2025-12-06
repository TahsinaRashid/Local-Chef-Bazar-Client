import React from 'react'
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const  ReviewCard = ({review})=> {
    const { reviewerName, reviewerImage, rating,comment,date }=review;
  return (
    <div className="w-full max-w-xl bg-white border shadow-sm p-4 rounded-xl">

      {/* Top Section */}
      <div className="flex items-center gap-3">

        {/* Avatar */}
        <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-semibold">
         <img src= {reviewerImage} alt="" />
        </div>

        {/* Name + Stars */}
        <div>
          <h3 className="font-semibold text-lg">{reviewerName}</h3>

          <div className="flex text-yellow-500 mt-1">
            {[...Array(rating)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Comment */}
      <p className="mt-4 italic text-gray-950">
        "{comment}"
      </p>

      {/* Date */}
      <p className="mt-4 text-sm text-gray-950">
        Reviewed on: {date}
      </p>

    </div>
  )
  
}
export default ReviewCard;
