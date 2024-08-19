

const OrderPage = () => {
    return (
        <div className="bg-slate-100 h-screen">
            <h1 className="text-4xl font-medium text-center">M<span className="text-green-500">y</span> <span className="text-red-500">O</span>rders</h1>
            <p className="text-xl font-medium mt-5 text-center">Your order will be shipped within 7 days</p>

            <div className="flex flex-col lg:flex-row gap-5 w-full mt-2 p-4 ">

                <div className=" lg:w-[500px]">
                    <div className="flex gap-2 items-center bg-white  py-12 p-4 shadow-2xl">
                        <h4 className="text-xl font-bold">Delivery Country :</h4>
                        <p>Bangladesh</p>
                    </div>

                    <div className=" bg-white border py-8 p-4 shadow-2xl mt-5">
                        <h4 className="text-xl font-bold">Delivery Address</h4>
                        <p>83/87, sukrabad, Dhaka</p>
                        <div className="w-full text-end">
                            <button className="font-bold px-2 border hover:border-2 hover:border-red-300 hover:bg-green-500 hover:text-white">Edit</button>
                        </div>
                    </div>
                </div>



                <div className="">
                    <div className="bg-white shadow-2xl p-4">
                        <h1 className="text-2xl font-bold">1 item</h1>
                        <hr className="w-full  border border-black mt-2 mb-2" />
                        <div className="flex gap-5">
                            <div>
                                <img src="https://i.ibb.co/K22D08G/fruits.jpg" alt="" className="w-44 h-full" />
                            </div>
                            <div>
                                <h2 className="text-lg font-medium" >Pinaapple fruits</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, rerum.</p>
                                <p className="font-bold">Qty: 1</p>
                            </div>
                        </div>

                    </div>

                    <div className="bg-white shadow-2xl p-4 mt-4">
                        <div className="flex justify-between items-center">
                            <p>Sub total</p>
                            <p>$200</p>
                        </div>
                        <hr  className="mt-1 mb-1"/>
                        <div className="flex justify-between items-center">
                            <p className="font-bold">Total to Pay</p>
                            <p>$200</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;