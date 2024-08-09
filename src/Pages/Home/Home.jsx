import HoverCard from "../../Components/HoverCard/HoverCard";
import ImageCard from "../../Components/ImageCard/ImageCard";
import StickerCard from "../../Components/StickerCard/StickerCard";
import Slider from "../../Components/Swiper_Slider/Slider";


const Home = () => {
    return (
        <div className="mt-20">
            <Slider></Slider>
            <StickerCard></StickerCard>
            <ImageCard></ImageCard>
            {/* <div className="mt-10 flex justify-between">
                <h1 className="lg:text-3xl font-bold">Daily Chilled Vegetables</h1>
                <button className="text-xl font-semibold text-green-500">Shop all</button>
            </div> */}
            <HoverCard></HoverCard>
        </div>
    );
};

export default Home;