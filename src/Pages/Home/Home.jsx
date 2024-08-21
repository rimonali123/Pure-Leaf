import { useQuery } from "@tanstack/react-query";
import HomePageParagraph from "../../Components/HomePageParagraph/HomePageParagraph";
import HoverCard from "../../Components/HoverCard/HoverCard";
import ImageCard from "../../Components/ImageCard/ImageCard";
import OrganicInfo from "../../Components/OrganicInfo/OrganicInfo";
import ShopCategory from "../../Components/ShopCartegory/ShopCategory";
import SmallCard from "../../Components/SmallCardGroup/SmallCard";
import StickerCard from "../../Components/StickerCard/StickerCard";
import Slider from "../../Components/Swiper_Slider/Slider";
import useAxiosPublic from "../../Hoocks/UseAxiosPublic/useAxiosPublic";
import CardHover from "../../Components/HoverCard/CardHover";


const Home = () => {
    const axiosPublic= useAxiosPublic();


    const { data: allData } = useQuery({
        queryKey: ['cardData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/cardData');
            return res.data;
        }
    });
    
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                {allData?.slice(12,17).map(data=> <CardHover key={data._id} data={data}></CardHover>)}
            </div>
            <SmallCard></SmallCard>
            <ShopCategory></ShopCategory>
            <div className="mt-10 mb-10 flex justify-between">
                <h1 className="lg:text-3xl font-bold">Recommended For You</h1>
                <button className="text-xl font-semibold text-green-500">Shop all</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {allData?.slice(18,26).map(data=> <CardHover key={data._id} data={data}></CardHover>)}
            </div>
            <HomePageParagraph></HomePageParagraph>
            
        </div>
    );
};

export default Home;