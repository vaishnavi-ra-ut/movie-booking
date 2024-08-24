import Carousel from "./Carousel";
import Img1 from "../assets/images/img1.jpg"
import Img2 from "../assets/images/img2.jpg"
import Img3 from "../assets/images/img3.jpg"
import Img4 from "../assets/images/img4.jpg"
import Cards from "../components/Cards"

const slides = [
    Img1, Img2, Img3, Img4,
]
const Body = () => {

    return (
        <div className="body w-[100vw] h-[80vh] -m-2">
            <div className="h-[80vh]">
                <Carousel autoSlide={true} autoSlideInterval={3000}>
                    {slides.map((slide) => <img className="h-[75vh] w-[96%] mx-[2%] mt-[2%] rounded-lg"
                        src={slide} />)}</Carousel>
            </div>
            <h3 className="text-gray-300 ml-7 mt-2 -mb-2 font-semibold text-3xl font-serif">
                Latest Movies Near You
            </h3>
            <div>
                <Cards/>
            </div>
        </div>
    );
}
export default Body;