import { GiFamilyHouse } from "react-icons/gi";
import { MdAddIcCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const HomePageParagraph = () => {
    return (
        <div className="mt-10 bg-slate-100 h-[500px]">
            <p className="p-24">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad impedit atque libero totam excepturi blanditiis laudantium illum ea obcaecati ullam, earum commodi sapiente accusantium laboriosam ipsa, adipisci, repudiandae magni iure quisquam? Commodi nihil esse fugit sunt eum explicabo quasi, suscipit illum, accusantium rem omnis fugiat enim incidunt ducimus eos distinctio nostrum voluptatibus? Quam labore velit ad minus quae quis ratione voluptatem molestiae, sunt eligendi ullam possimus consectetur provident, impedit ex dignissimos tempore veniam laboriosam! Sapiente, illo eos laboriosam et quia quibusdam. Ullam quae corrupti iste officiis voluptas. Facilis perspiciatis, placeat sunt deleniti veniam accusantium deserunt voluptate numquam aliquam mollitia sequi.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4">

                <div className="flex gap-3 items-center border p-4 bg-white rounded-xl">
                    <div>
                        <GiFamilyHouse className="text-5xl" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Home Online Shopping</h1>
                        <p className="text-xl">+09973642390</p>
                    </div>
                </div>

                <div className="flex gap-3 items-center border p-4 bg-white rounded-xl">
                    <div>
                        <MdAddIcCall className="text-6xl border rounded-full p-2 bg-green-600 text-white" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Online Support Center</h1>
                        <p className="text-xl">+09973642390</p>
                    </div>
                </div>

                <div className="flex gap-3 items-center border p-4 bg-white rounded-xl">
                    <div>
                        <FaLocationDot className="text-6xl border rounded-full p-2 text-yellow-500" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Store Locations</h1>
                        <p className="text-xl">Dhaka, Bangladesh</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default HomePageParagraph;