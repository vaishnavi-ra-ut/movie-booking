import { useState } from "react";
import { useEffect } from "react";
const Carousel = ({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) => {
    const [currSlide, setCurrSlide] = useState(0);
    const prevSlide = () => setCurrSlide((currSlide) => (currSlide === 0 ? slides.length - 1 : currSlide - 1));
    const nextSlide = () => setCurrSlide((currSlide) => (currSlide === slides.length - 1 ? 0 : currSlide + 1))
    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(nextSlide, autoSlideInterval);
        return (() => clearInterval(slideInterval))
    }, [])
    return (
        <div className="relative w-[100vw] overflow-hidden">
            <div className=" flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currSlide * 100}%)` }}>{slides}</div>
            <div className="absolute inset-9 flex items-center justify-between p-4">
                <button onClick={prevSlide} className="p-2 rounded-full shadow bg-white/80 opacity-70 text-gray-900 hover:bg-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                </button>
                <button onClick={nextSlide} className="p-2 rounded-full shadow bg-white/80 opacity-70 text-gray-900 hover:bg-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
                </button>
            </div>
            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div className={`transition-all w-3 h-3 bg-white rounded-full ${currSlide === i ? "p-2" : "bg-opacity-50"}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Carousel;