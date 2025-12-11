import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Error() {
  return (
    <div>
        <Navbar/>
        <div class="flex flex-col items-center gap-6 px-4 py-6 text-center">
           <div class="bg-center bg-no-repeat aspect-square bg-contain w-full max-w-[280px] sm:max-w-[320px] mb-4" data-alt="Illustration of a spilled bowl of soup with a sad face" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCEZAM-ttHICB9n9EpyE-djff_Fjfb9gNs8cXSqf6t0QnDgXFDJvYyh46x0pz8e8SCHaH7YXown1vzMQiENlOYKIm6IFG0X-WOyXIRft-XlucH9cB17zirexbmqBd7T4nTxCLcxFSL-HGBUoJeNavjAIG4lf1dA43k5ci4vMARchcYH0itfom0LSEldFYkRRvcYAC01V4aiTiWAxd8_8aAa7nyaqEejdt1wez5q-FstCtuz3WRATT9OeVStuTcF9p1uiWdNbCDrRM2A");'></div>
           <div class="flex max-w-[480px] flex-col items-center gap-2">
           <h1 class="text-2xl sm:text-3xl font-bold leading-tight tracking-tight text-black dark:text-white">Oops! Something went wrong.</h1>
           <p class="text-sm sm:text-base font-normal leading-normal text-black/70 dark:text-white/70">
                                               It seems we've misplaced this page. Don't worry, let's get you back to discovering delicious homemade food.
                                           </p>
           </div>
           <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-black text-base font-bold leading-normal tracking-wide shadow-sm hover:opacity-90 transition-opacity">
           <span class="truncate">Go Back to Homepage</span>
           </button>
        </div>
        <Footer/>
    </div>
  )
}
