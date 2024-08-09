
const ImageCard = () => {
    return (
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            <div className=" rounded-md border-2 h-[450px] lg:h-[400px] dark:bg-gray-50 dark:text-gray-900">
                <img src="https://i.ibb.co/K22D08G/fruits.jpg" alt="" className=" rounded-md h-full w-full lg:w-[650px] " />
                <p className="dark:text-gray-800 relative bottom-[445px] lg:bottom-[396px] w-2/3 right-[74px] lg:right-[50px] bg-green-700 opacity-80 p-3 mx-auto border-none  rounded-r-full text-3xl font-semibold text-white">Fresh Fruits <br /> Slae Up To 30%</p>
                <p className="relative bottom-[525px] lg:bottom-[488px] left-[220px] lg:left-[180px] border-dashed  border-4 rounded-full w-20 p-4 bg-red-600 text-white text-2xl font-bold">New</p>
                <div className="bg-green-700 text-white p-2 relative bottom-72 text-center w-1/2 mx-auto rounded-lg"><button className="text-2xl font-bold">Shop Now</button></div>
            </div>

            <div className=" rounded-md border-2 h-[450px] lg:h-[400px] dark:bg-gray-50 dark:text-gray-900">
                <img src="https://i.ibb.co/vz5WYnD/strabarry.jpg" alt="" className=" rounded-md h-full w-full lg:w-[650px] " />
                <p className="dark:text-gray-800 relative bottom-[300px] left-[43px] lg:left-[31px]  w-4/5 bg-green-700 opacity-95 text-center p-4 mx-auto border-none  rounded-l-full text-3xl  font-semibold text-white ">100% <br />Organic Pure  <br />  Strabarry Fruits</p>
                
                <div className="bg-green-700 text-white p-2 relative bottom-[230px] text-center w-1/2 mx-auto rounded-lg"><button className="text-2xl font-bold">Shop Now</button></div>
            </div>


            <div className=" rounded-md border-2 h-[450px] lg:h-[400px] dark:bg-gray-50 dark:text-gray-900">
                <img src="https://images.pexels.com/photos/709567/pexels-photo-709567.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className=" rounded-md h-full w-full lg:w-[650px] " />
                <p className="dark:text-gray-800 relative bottom-[445px] lg:bottom-[396px] w-2/3 right-[74px] lg:right-[50px] bg-green-700 opacity-90 p-3 mx-auto border-none  rounded-r-full text-3xl font-semibold text-white">Fram Fress Vegetable <br /> For Everyday </p>
                <p className="relative bottom-[535px] lg:bottom-[488px] left-[210px] lg:left-[180px] border-dashed  border-4 rounded-full w-20 p-4 bg-red-600 text-white text-2xl font-bold">Hot</p>
                <div className="bg-green-700 text-white p-2 relative bottom-72 text-center w-1/2 mx-auto rounded-lg"><button className="text-2xl font-bold">Shop Now</button></div>
            </div>


            <div className=" rounded-md border-2 h-[450px] lg:h-[400px] dark:bg-gray-50 dark:text-gray-900">
                <img src="https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className=" rounded-md h-full w-full lg:w-[650px] " />
                <p className="dark:text-gray-800 relative bottom-[300px] left-[43px] lg:left-[31px]  w-4/5 bg-green-700 opacity-95 text-center p-4 mx-auto border-none  rounded-l-full text-3xl  font-semibold text-white ">Sale Up To  <br /> 50%</p>
                
                <div className="bg-green-700 text-white p-2 relative bottom-[190px] text-center w-1/2 mx-auto rounded-lg"><button className="text-2xl font-bold">Shop Now</button></div>
            </div>

           

           

        </div>
    );
};

export default ImageCard;