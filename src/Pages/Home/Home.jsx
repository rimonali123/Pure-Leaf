import ImageCard from "../../Components/ImageCard/ImageCard";
import StickerCard from "../../Components/StickerCard/StickerCard";
import Slider from "../../Components/Swiper_Slider/Slider";


const Home = () => {
    return (
        <div className="mt-20">
            <Slider></Slider>
            <StickerCard></StickerCard>
            <ImageCard></ImageCard>
        </div>
    );
};

export default Home;