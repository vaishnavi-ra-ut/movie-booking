import Carousel from "./Carousel";
import Movies from "./Movies";
import { useSelector } from "react-redux";

const Body = () => {
    const slides = useSelector((store) => store.image.images).slice(0, 6);
    console.log(slides)
    return (
        <div className="body w-[100vw] h-[80vh] -m-2 ">
            <div className="h-[80vh] w-[96vw]">
                <Carousel autoSlide={true} autoSlideInterval={3000}>
                    {slides.map((slide) => <img className="h-[75vh] w-[96%] mx-[2%] mt-[2%] rounded-lg object-contain "
                        src={slide} />)}</Carousel>
            </div>
            <div>
                <Movies />
            </div>
        </div>
    );
}
export default Body;