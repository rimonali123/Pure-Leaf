import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";


const QuickViewPage = () => {
    const allData = useLoaderData();
    console.log(allData)
    const { name, image, price, weight, rating, availability, category, description, totalRatings } = allData;

    return (
        <div className="mt-20">
            <div className="flex gap-2 items-center">
                <h1 className="text-2xl font-semibold">{name}</h1>
                <p className="opacity-60">{weight}</p>
            </div>
            <div className="flex gap-3 items-center">
                <Rating
                    style={{ maxWidth: 180 }}
                    value={rating}
                    readOnly
                />
                <p>|</p>
                <p> Customer Review:{totalRatings}</p>
                <p>|</p>
                <p>sold : 109</p>
            </div>


            <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="lg:w-[400px">
                    <img src={image} alt=""  className="w-full"/>
                </div>
                <div className="space-y-5 w-1/2">
                    <p className="text-2xl font-medium text-red-500">${price}</p>
                    <p>{description} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel unde quisquam, beatae nobis fugiat nostrum cum porro explicabo quae natus! Veniam labore deserunt omnis iure dicta possimus vero, maiores, dolorem alias excepturi perferendis magni exercitationem.</p>
                    <p>Availability : <span className="text-red-400">{availability}</span></p>
                    <hr className="w-full border-black opacity-20" />
                    <p> Category: {category}</p>
                </div>
            </div>
        </div>
    );
};

export default QuickViewPage;