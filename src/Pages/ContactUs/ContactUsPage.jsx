


const ContactUsPage = () => {
    return (
        <div className="mt-28">
            <h1 className="text-4xl font-medium">Contact Us</h1>
            <div className="mt-10 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                    <div>
                        <h1 className="text-xl font-bold text-center">Bangladesh</h1>
                        <p className="text-lg text-center">508 Bridle Avenue <br />
                            Newnan, GA 30263 <br />
                            (239) 555-0108</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-center">London</h1>
                        <p className="text-lg text-center">508 Bridle Avenue <br />
                            Newnan, GA 30263 <br />
                            (239) 555-0108</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-center">Singapure</h1>
                        <p className="text-lg text-center">508 Bridle Avenue <br />
                            Newnan, GA 30263 <br />
                            (239) 555-0108</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-center">Moscow</h1>
                        <p className="text-lg text-center">508 Bridle Avenue <br />
                            Newnan, GA 30263 <br />
                            (239) 555-0108</p>
                    </div>
                    <div className="border-l-2 border-black">
                        <h1 className="text-xl font-bold text-center">Opening Hours</h1>
                        <p className="text-lg text-center">The store’s opening hours <br />
                            are 9 a.m. to 6 p.m. </p>
                    </div>
                </div>
            </div>

            <div className="mt-10 mb-10 flex flex-col lg:flex-row  gap-10 ">
                <div className="bg-slate-100 p-5 ">
                    <h1 className="text-xl font-bold">Have any question?</h1>
                    <p>Your email address will not be published. Required fileds are marked*</p>
                    <form className="mt-5 flex flex-col gap-10">
                        <input className="w-full p-3 rounded-lg  " type="text" required placeholder="Name*"  />
                        <input className="w-full p-3 rounded-lg  " type="email" required placeholder="Email*" />
                        <input className="w-full p-3 rounded-lg  " type="text" placeholder="Subject" />
                        <textarea className="w-full p-3 rounded-lg  " name="" rows={5} id="" required placeholder="Message*" />
                        <div className="w-full text-end">
                            <input className="bg-green-500 p-2 w-44 text-white text-xl rounded-lg " type="submit" value="Submit question" />
                        </div>
                    </form>
                </div>

                <div>
               
                </div>


            </div>
        </div>
    );
};

export default ContactUsPage;