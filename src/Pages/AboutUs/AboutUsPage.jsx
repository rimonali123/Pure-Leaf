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

            <div className="mt-10  p-10 bg-slate-100">

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
        </div>
    );
};

export default AboutUsPage;