import { PiPottedPlant } from "react-icons/pi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GiTreeGrowth } from "react-icons/gi";

const AboutUsPage = () => {
    return (
        <div className="mt-20 mb-10">
            <div>
                <img src="https://i.ibb.co/3ck80rB/about-us-banner.jpg" className="w-full lg:h-[500px] relative" alt="" />
                <h1 className="text-4xl font-medium absolute top-44 lg:top-32 lg:left-[110px] opacity-90 text-white bg-green-700 p-4 rounded-r-full text-center w-96">
                    Welcome to
                    <br />
                    <span className="text-yellow-400 font-extrabold text-6xl">Pure Leaf</span>
                    <br />
                    e-commerce website platform
                </h1>
                <p className="text-4xl font-medium absolute top-[440px] lg:top-96 lg:left-[120px] text-black bg-white p-4 rounded-full opacity-80">Every farmer strives to find a
                    good value to their crops.</p>
            </div>

            <div className="mt-20  p-10 bg-slate-100">

                <div className="w-1/2 mx-auto space-y-5 text-center">
                    <h1 className="text-5xl font-medium">What we offers?</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error recusandae quam exercitationem, et reprehenderit facilis aspernatur culpa nisi eligendi, a obcaecati commodi iusto provident consectetur quod corrupti veniam aperiam atque quo beatae est blanditiis architecto molestias maiores. Possimus, minus ipsa?</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-10 w-full">

                    <div className="bg-white rounded-2xl p-6  dark:bg-gray-50 dark:text-gray-900" >
                        <div className="">
                            <PiPottedPlant className="text-9xl text-green-500 text-center w-full" />
                        </div>
                        <div className="mt-6 mb-2" >

                            <h2 className="text-xl font-semibold tracking-wide text-center" >Farm Services</h2>
                        </div>
                        <p className="dark:text-gray-800 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at pellentesque diam.</p>
                    </div>


                    <div className="bg-white rounded-2xl p-6  dark:bg-gray-50 dark:text-gray-900" >
                        <div className="">
                            <MdOutlineSupportAgent className="text-9xl text-green-500 text-center w-full" />
                        </div>
                        <div className="mt-6 mb-2" >

                            <h2 className="text-xl font-semibold tracking-wide text-center" >Farm Services</h2>
                        </div>
                        <p className="dark:text-gray-800 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at pellentesque diam.</p>
                    </div>


                    <div className="bg-white rounded-2xl p-6  dark:bg-gray-50 dark:text-gray-900" >
                        <div className="">
                            <GiTreeGrowth className="text-9xl text-green-500 text-center w-full" />
                        </div>
                        <div className="mt-6 mb-2" >

                            <h2 className="text-xl font-semibold tracking-wide text-center" >Farm Services</h2>
                        </div>
                        <p className="dark:text-gray-800 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at pellentesque diam.</p>
                    </div>



                </div>
            </div>

            <div className="mt-20 flex flex-col lg:flex-row gap-32 items-center  shadow-2xl p-4">
                <div className=" w-3/4"  >
                    <h1 className="text-4xl font-medium mb-3">Why choose <span className="text-5xl text-green-600 uppercase">Pure Leaf</span></h1>
                    <p className="text-2xl">Nunc tincidunt libero eget libero mattis, sit amet cursus justo imperdiet. Vivamus maximus mi sit amet euismod ornare. Nulla a est vitae nulla vestibulum vestibulum. Curabitur odio diam, vestibulum vel eros vitae, mollis semper erat.
                        <br />
                        <br />
                        <br />

                        Phasellus in est quis metus tincidunt cursus eget at diam. Morbi iaculis quam in convallis lobortis. Duis egestas, risus pretium posuere porttitor, orci erat gravida purus, a mattis diam neque at elit. Duis non mollis ex. Quisque vulputate bibendum dictum. Vestibulum luctus ullamcorper tortor, vel mattis arcu aliquam eget. Nulla molestie facilisis ligula. Praesent in risus malesuada, dapibus sem vitae, varius nunc. Cras ante lectus, lobortis vel ultricies sit amet, volutpat non velit.</p>
                </div>

                <div className="flex flex-col justify-between gap-10">
                    <div>
                        <p className="text-4xl  text-center font-bold">16,4567</p>
                        <p className="text-xl  text-center ">Organic Products</p>
                    </div>
                    <div>
                        <p className="text-4xl  text-center font-bold">29</p>
                        <p className="text-xl  text-center ">Countries</p>
                    </div>
                    <div>
                        <p className="text-4xl text-center  font-bold">24045</p>
                        <p className="text-xl  text-center ">Friendly Farmers</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;