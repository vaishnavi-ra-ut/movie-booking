import Carousel from "./Carousel";
import Img1 from "../images/img1.jpg"
import Img2 from "../images/img2.jpg"
import Img3 from "../images/img3.jpg"
import Img4 from "../images/img4.jpg"
const slides = [
    Img1, Img2, Img3, Img4,
]
const Body = () => {

    return (
        <div className="body w-[100vw] h-[80vh] -m-2">
            <div className="h-[80vh]">
                <Carousel autoSlide={true} autoSlideInterval={3000}>
                    {slides.map((slide) => <img className="h-[75vh] w-[96%] mx-[2%]"
                        src={slide} />)}</Carousel>
            </div>

        </div>
    );
}
export default Body;