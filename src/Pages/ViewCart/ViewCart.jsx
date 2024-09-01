import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hoocks/UseAxiosSecure/useAxiosSecure";
import ViewCartItem from "./ViewCartItem";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



const ViewCart = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalPricePlusOne, setTotalPricePlusOne] = useState(0);
    const axiosSecure = useAxiosSecure();

    const { data: cartData, refetch } = useQuery({
        queryKey: ['cartItemData'],
        queryFn: async () => {
            const res = await axiosSecure.get('/cartItemData');
            return res.data;
        }
    });

    useEffect(() => {
        if (Array.isArray(cartData)) {
            const calculatedTotalPrice = cartData.reduce((total, item) => total + item.productPrice, 0);

            const totalPrice = parseFloat(calculatedTotalPrice.toFixed(2));
            const totalPricePlusOne = parseFloat((calculatedTotalPrice + 1).toFixed(2));

            setTotalPrice(totalPrice);
            setTotalPricePlusOne(totalPricePlusOne);
        }
    }, [cartData]);


    console.log(totalPrice)
    console.log(totalPricePlusOne)
    return (
        <div className="mt-20">
            <div className="flex gap-10 flex-col lg:flex-row">
                <div className="w-full ">
                    <div className='flex flex-col '>
                        {cartData?.map(cart => <ViewCartItem key={cart._id} cart={cart} refetch={refetch}></ViewCartItem>)}
                    </div>
                    <div className="p-4">
                        <Link to='/shopPage'><button className='text-green-500 text-xl'>Continue Shopping</button></Link>
                    </div>
                </div>
                <div className="  bg-slate-100 lg:w-1/2 p-4 h-72">
                    <h3 className="text-xl font-bold">Cart Totals</h3>
                    <div className="flex justify-between p-4 px-8">
                        <p>Sub total</p>
                        <p className="text-red-500">${totalPrice}</p>
                    </div>
                    <div className="flex justify-between p-4 px-8">
                        <p>Shippping</p>
                        <p className="text-red-500">$1</p>
                    </div>
                    <hr  className="border border-black opacity-10 "/>
                    
                    <div className="flex justify-between p-4 px-8">
                        <p className="font-bold text-lg">Total</p>
                        <p className="text-red-500 text-xl font-bold">${totalPricePlusOne}</p>
                    </div>
                    <div className="">
                        <Link to='/checkOutPage'>
                        <button className="text-white text-xl font-semibold w-full text-center bg-green-500 p-2 rounded-xl hover:text-2xl">Proceed to checkout</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ViewCart;