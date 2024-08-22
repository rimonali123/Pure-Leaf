import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hoocks/UseAxiosSecure/useAxiosSecure";
import ViewCartItem from "./ViewCartItem";
import { Link } from "react-router-dom";



const ViewCart = () => {
    const axiosSecure = useAxiosSecure();

    const { data: cartData } = useQuery({
        queryKey: ['cartItemData'],
        queryFn: async () => {
            const res = await axiosSecure.get('/cartItemData');
            return res.data;
        }
    });
    return (
        <div className="mt-20">
            <div className="flex gap-10 flex-col lg:flex-row">
                <div className="w-full border">
                    <div className='flex flex-col '>
                        {cartData?.map(cart => <ViewCartItem key={cart._id} cart={cart}></ViewCartItem>)}
                    </div>
                    <div className="p-4">
                        <Link to='/shopPage'><button className='text-green-500 text-xl'>Continue Shopping</button></Link>
                    </div>
                </div>
                <div className=" border bg-slate-100 w-1/2 p-4 h-72">
                    <h3 className="text-xl font-bold">Cart Totals</h3>
                    <div className="flex justify-between p-4 px-8">
                        <p>Sub total</p>
                        <p className="text-red-500">$120</p>
                    </div>
                    <div className="flex justify-between p-4 px-8">
                        <p>Shippping</p>
                        <p className="text-red-500">$1</p>
                    </div>
                    <hr  className="border border-black opacity-10 "/>
                    
                    <div className="flex justify-between p-4 px-8">
                        <p className="font-bold text-lg">Total</p>
                        <p className="text-red-500 text-xl font-bold">$121</p>
                    </div>
                    <div className="">
                        <button className="text-white text-xl font-semibold w-full text-center bg-green-500 p-2 rounded-xl hover:text-2xl">Proceed to checkout</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ViewCart;