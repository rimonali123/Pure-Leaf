import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hoocks/UseAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Components/AuthProvider/AuthProvider";


const OrderPage = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);

    // Fetch payment info
    const { data: payment } = useQuery({
        queryKey: ['paymentInfo'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/paymentInfo/${user?.email}`);
            return res.data;
        }
    });

    // Fetch order info
    const { data: order } = useQuery({
        queryKey: ['orderInfo'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/orderInfo/${user?.email}`);
            return res.data;
        }
    });

    // Safeguard against undefined data
    const paymentCountry = payment?.country 
    const orderCountry = order?.country 
    const paymentSubtotal = payment?.subtotal?.toFixed(2);
    const orderSubtotal = order?.subtotal?.toFixed(2) ;
    const paymentTotalPrice = payment?.totalPrice?.toFixed(2) ;
    const orderTotalPrice = order?.totalPrice?.toFixed(2) ;

    // Prioritize orderProducts if available, otherwise use paymentProducts
    const products = order?.products?.length > 0 ? order.products : payment?.products || [];

    return (
        <div className="bg-slate-100 h-screen">
            <h1 className="text-4xl font-medium text-center">
                M<span className="text-green-500">y</span> <span className="text-red-500">O</span>rders
            </h1>
            <p className="text-xl font-medium mt-5 text-center">Your order will be shipped within 7 days</p>

            <div className="flex flex-col lg:flex-row gap-5 w-full mt-2 p-4">
                {/* Delivery Details */}
                <div className="lg:w-[500px]">
                    <div className="flex gap-2 items-center bg-white py-12 p-4 shadow-2xl">
                        <h4 className="text-xl font-bold">Delivery Country :</h4>
                        <p>{paymentCountry}  {orderCountry}</p>
                    </div>

                    <div className="bg-white border py-8 p-4 shadow-2xl mt-5">
                        <h4 className="text-xl font-bold">Delivery Address</h4>
                        <p>
                            {payment?.town} {payment?.streetAddress}  {order?.town}, {order?.streetAddress}
                        </p>
                        
                    </div>

                    <div className="bg-white shadow-2xl p-4 mt-4">
                        <div className="flex justify-between items-center">
                            <p>Sub total</p>
                            <p>${paymentSubtotal} {orderSubtotal}</p>
                        </div>
                        <hr className="mt-1 mb-1" />
                        <div className="flex justify-between items-center">
                            <p className="font-bold">Total to Pay</p>
                            <p>${paymentTotalPrice} {orderTotalPrice}</p>
                        </div>
                    </div>
                </div>

                {/* Product List */}
                <div className="">
                    <div className="bg-white shadow-2xl p-4 h-full">
                        <h1 className="text-2xl font-bold">
                            {products.length} items
                        </h1>
                        <hr className="w-full border border-black mt-2 mb-2" />

                        {products.map((data) => (
                            <div key={data._id} className="flex flex-col gap-10">
                                <div className="flex gap-5 mt-5">
                                    <div>
                                        <img src={data.productImage} alt="" className="w-20 h-full" />
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-medium">{data.productName}</h2>
                                        <p>{data.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;
