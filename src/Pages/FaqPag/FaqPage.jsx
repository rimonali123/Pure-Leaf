import { Link } from "react-router-dom";


const FaqPage = () => {
    return (
        <div className="mt-20 mb-10">
            
            <div>
                <section className="dark:bg-gray-100 dark:text-gray-800">
                    <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8" >
                        <h2 className="text-2xl font-semibold sm:text-4xl mb-10">Frequently Asked Questions</h2>
                        
                        <div className="space-y-4 lg:ml-20" >
                            <details className="w-full border rounded-lg" open="">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Ex orci laoreet egestas sapien magna egestas scelerisque?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam taciti at adipiscing est. </p>
                            </details>
                            <details className="w-full border rounded-lg" open="">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Lorem at arcu rutrum viverra metus sapien venenatis lobortis odio?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                            </details>
                            <details className="w-full border rounded-lg" open="">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
                            </details>
                            <details className="w-full border rounded-lg" open="">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
                            </details>
                            <details className="w-full border rounded-lg" open="">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
                            </details>
                            <details className="w-full border rounded-lg" open="">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
                            </details>
                        </div>
                        <h3 className="mt-10 text-center text-2xl font-medium">Still have more question? <span className="text-green-500 hover:font-extrabold"><Link to='/contactUs'>Contact us</Link></span></h3>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FaqPage;