import HomePageParagraph from "../../Components/HomePageParagraph/HomePageParagraph";
import HoverCard from "../../Components/HoverCard/HoverCard";
import ImageCard from "../../Components/ImageCard/ImageCard";
import OrganicInfo from "../../Components/OrganicInfo/OrganicInfo";
import ShopCategory from "../../Components/ShopCartegory/ShopCategory";
import SmallCard from "../../Components/SmallCardGroup/SmallCard";
import StickerCard from "../../Components/StickerCard/StickerCard";
import Slider from "../../Components/Swiper_Slider/Slider";


const Home = () => {
    return (
        <div className="mt-20">
            <Slider></Slider>
            <StickerCard></StickerCard>
            <ImageCard></ImageCard>
            <div className="mt-10 mb-10 flex justify-between">
                <h1 className="lg:text-3xl font-bold">Daily Chilled Vegetables</h1>
                <button className="text-xl font-semibold text-green-500">Shop all</button>
            </div>
            <HoverCard></HoverCard>
            <OrganicInfo></OrganicInfo>
            <div className="mt-10 mb-10 flex justify-between">
                <h1 className="lg:text-3xl font-bold">Featured Fresh Fruits</h1>
                <button className="text-xl font-semibold text-green-500">Shop all</button>
            </div>
            <HoverCard></HoverCard>
            <SmallCard></SmallCard>
            <ShopCategory></ShopCategory>
            <div className="mt-10 mb-10 flex justify-between">
                <h1 className="lg:text-3xl font-bold">Recommended For You</h1>
                <button className="text-xl font-semibold text-green-500">Shop all</button>
            </div>
            <div className="space-y-10">
                <HoverCard></HoverCard>
                <HoverCard></HoverCard>
            </div>
            <HomePageParagraph></HomePageParagraph>
        </div>
    );
};

export default Home;