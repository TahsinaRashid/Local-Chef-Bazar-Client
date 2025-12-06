import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import f1 from '../../../assets/f1.jpg';
import f2 from '../../../assets/f3.jpg';
import f3 from '../../../assets/f4.jpg';

export default function Banner() {
  return (
                <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} interval={3000}>
                                <div className="p-4 md:p-8">
                                    <div className="w-full aspect-[16/7] sm:aspect-[16/6] md:aspect-[16/5] lg:aspect-[16/5] overflow-hidden rounded">
                                        <img
                                            src={f1}
                                            alt="Delicious home-cooked meal 1"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute inset-0 flex items-end md:items-center justify-start md:justify-center p-4 md:p-8">
                                        <div className="max-w-2xl bg-gradient-to-t from-black/70 to-transparent rounded-md p-3 md:p-6">
                                            <h3 className="text-white text-base sm:text-lg md:text-2xl font-bold">Taste real home cooking</h3>
                                            <p className="text-gray-200 text-xs sm:text-sm md:text-base">Discover local chefs and bring authentic meals to your table.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 md:p-8">
                                    <div className="w-full aspect-[16/7] sm:aspect-[16/6] md:aspect-[16/5] lg:aspect-[16/5] overflow-hidden rounded">
                                        <img
                                            src={f2}
                                            alt="Delicious home-cooked meal 2"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute inset-0 flex items-end md:items-center justify-start md:justify-center p-4 md:p-8">
                                        <div className="max-w-2xl bg-gradient-to-t from-black/80 to-black/50 rounded-md p-3 md:p-6">
                                            <h3 className="text-white text-base sm:text-lg md:text-2xl font-bold">Fresh, local and made with care</h3>
                                            <p className="text-gray-200 text-xs sm:text-sm md:text-base">Support home cooks and enjoy meals prepared just for you.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 md:p-8">
                                    <div className="w-full aspect-[16/7] sm:aspect-[16/6] md:aspect-[16/5] lg:aspect-[16/5] overflow-hidden rounded">
                                        <img
                                            src={f3}
                                            alt="Delicious home-cooked meal 3"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute inset-0 flex items-end md:items-center justify-start md:justify-center p-4 md:p-8">
                                        <div className="max-w-2xl bg-gradient-to-t from-black/60 to-transparent rounded-md p-3 md:p-6">
                                            <h3 className="text-white text-base sm:text-lg md:text-2xl font-bold">Your neighborhood food marketplace</h3>
                                            <p className="text-gray-200 text-xs sm:text-sm md:text-base">Browse menus, order meals and connect with chefs near you.</p>
                                        </div>
                                    </div>
                                </div>
            </Carousel>
  )
}
