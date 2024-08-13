

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
        </div>
    );
};

export default AboutUsPage;