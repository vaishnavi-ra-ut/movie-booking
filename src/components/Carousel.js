import { useState, useEffect } from "react";

const Carousel = ({ children: slides, autoSlide = false, autoSlideInterval = 4000 }) => {
    const [currSlide, setCurrSlide] = useState(0);
    const [isManual, setIsManual] = useState(false);

    const prevSlide = () => {
        setIsManual(true);
        setCurrSlide((currSlide) => (currSlide === 0 ? slides.length - 1 : currSlide - 1));
    };

    const nextSlide = () => {
        setIsManual(true);
        setCurrSlide((currSlide) => (currSlide === slides.length - 1 ? 0 : currSlide + 1));
    };

    useEffect(() => {
        if (!autoSlide) return;

        const slideInterval = setInterval(() => {
            if (!isManual) {
                nextSlide();
            } else {
                setIsManual(false);
            }
        }, autoSlideInterval);

        return () => clearInterval(slideInterval);
    }, [currSlide, isManual]);

    return (
        <div className="relative w-full overflow-hidden p-2 ">
            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currSlide * 100}%)` }}>
                {slides}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-2 ">
                <button onClick={prevSlide} className="p-1 rounded-full shadow bg-white/80 opacity-70 text-gray-900 hover:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <button onClick={nextSlide} className="p-1  rounded-full shadow bg-white/80 opacity-70 text-gray-900 hover:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
                {slides.map((_, i) => (
                    <div key={i} className={`transition-all w-2 h-2  bg-white rounded-full ${currSlide === i ? "p-1" : "bg-opacity-50"}`} />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
