import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hoocks/UseAxiosPublic/useAxiosPublic";
import CardHover from "../../Components/HoverCard/CardHover";
import { useState } from "react";


const ShopPage = () => {

    const axiosPublic = useAxiosPublic();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;


    const { data: allData } = useQuery({
        queryKey: ['cardData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/cardData');
            return res.data;
        }
    });

     // Calculate the current data to display
     const startIndex = (currentPage - 1) * itemsPerPage;
     const currentData = allData?.slice(startIndex, startIndex + itemsPerPage);
 
     const totalPages = Math.ceil((allData?.length || 0) / itemsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };


    return (
        <div className="mt-20 mb-10">
            <div className=" flex ">
                <div className=" flex flex-col text-start gap-0 border-r-2  border-green-400 w-96 mx-auto">
                    <h1 className="text-3xl font-bold" >Product Category</h1>
                    <hr className="border border-black" />
                    <button className="text-xl text-start mt-2"> Dairy & Eggs</button>
                    <button className="text-xl text-start mt-2"> Fish & Seafood</button>
                    <button className="text-xl text-start mt-2"> Fruit</button>
                    <button className="text-xl text-start mt-2">Meat & buttonoultry</button>
                    <button className="text-xl text-start mt-2"> Milk & Drinks</button>
                    <button className="text-xl text-start mt-2"> Vegetables</button>
                    <hr className="border border-black" />
                    <div>
                        <h1 className="text-xl font-bold">Product tags</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <button className="bg-slate-300 rounded-xl p-2 ">Avacado</button>
                            <button className="bg-slate-300 rounded-xl p-2 ">Banana</button>
                            <button className="bg-slate-300 rounded-xl p-2 ">Chicken</button>
                            <button className="bg-slate-300 rounded-xl p-2 ">Eggs</button>
                            <button className="bg-slate-300 rounded-xl p-2 ">Meat & poulity</button>
                            <button className="bg-slate-300 rounded-xl p-2 ">Home food</button>
                            <button className="bg-slate-300 rounded-xl p-2 ">Organic</button>
                            <button className="bg-slate-300 rounded-xl p-2 ">onion</button>
                            <button className="bg-slate-300 rounded-xl p-2 ">Fresh Milk</button>
                            <button className="bg-slate-300 rounded-xl p-2 ">Vegetable</button>
                        </div>
                    </div>
                </div>

                <div className="  gap-10 w-full">
                    <h1 className="text-3xl font-bold text-center">Product List</h1>
                    <hr className="border border-black mb-10" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {currentData?.slice(0, 12).map(data => <CardHover key={data._id} data={data}></CardHover>)}
                    </div>
                     {/* Pagination Controls */}
            <div className="mt-4 flex justify-center space-x-2">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-300 text-black rounded-md"
                >
                    Previous
                </button>
                <span className="px-4 py-2">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-300 text-black rounded-md"
                >
                    Next
                </button>
            </div>


                </div>
            </div>
        </div>
    );
};

export default ShopPage;