import AddressForm from "../AccountPage/DashboardAddressForm/AddressForm";


const CheckOutpage = () => {
    return (
        <div className="mt-20">
            <div className="flex gap-10">
                <div className="w-full">
                    <AddressForm></AddressForm>
                </div>
                <div className="w-full mt-5">
                    <h1 className="text-2xl font-semibold mb-5 ">Your Order</h1>
                    <div className="  bg-slate-100 w-full p-4 ">
                        <div>
                            <p className="text-2xl font-bold">Product</p>
                           <div className="flex items-center justify-between">
                           <p>product name</p>
                           <img src="https://i.ibb.co/Q8pqvsg/tablet.jpg" className="w-44 " alt="" />
                           </div>
                        </div>

                        <h3 className="text-xl font-bold">Cart Totals</h3>
                        <div className="flex justify-between p-4 px-8">
                            <p>Sub total</p>
                            <p className="text-red-500">$120</p>
                        </div>
                        <div className="flex justify-between p-4 px-8">
                            <p>Shippping</p>
                            <p className="text-red-500">$1</p>
                        </div>
                        <hr className="border border-black opacity-10 " />

                        <div className="flex justify-between p-4 px-8">
                            <p className="font-bold text-lg">Total</p>
                            <p className="text-red-500 text-xl font-bold">$121</p>
                        </div>

                    </div>

                    <div>
                        <h1 className="text-2xl font-bold p-8">Payment method</h1>
                        <div className="flex gap-2 items-center bg-slate-100 p-4 hover:bg-slate-200">
                            <input className="rounded-full " type="checkbox" name="Cash on delivery"  id="" />
                            <p className="text-xl font-semibold">Check Payments</p>
                        </div>
                        <div className="flex gap-2 items-center bg-slate-100 p-4 hover:bg-slate-200 mt-4">
                            <input className="rounded-full " type="checkbox" name="Cash on delivery"  id="" />
                            <p className="text-xl font-semibold">Cash on Delivery</p>
                        </div>
                    </div>

                    <div className="w-full mt-5">
                        <button className="hover:scale-105   text-xl font-bold text-white bg-green-500 w-full p-4 rounded-xl">Pleace Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOutpage;