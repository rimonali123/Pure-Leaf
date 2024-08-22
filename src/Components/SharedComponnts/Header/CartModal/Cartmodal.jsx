import { RiDeleteBin5Fill } from "react-icons/ri";

const Cartmodal = () => {
    return (
        <div>
            <div className="flex gap-2 items-center">
                <h1>this is product name</h1>
                <img src="https://i.ibb.co/G2w6FNL/Organic-Avocado.jpg" className="h-20 w-20" alt="" />
                <h3 className="text-red-500 text-xl ml-2">$120</h3>
                <button className="text-2xl  hover:bg-red-500 hover:text-white ml-2 border p-2 rounded-lg"><RiDeleteBin5Fill /></button>
            </div>
                <hr  className="w-full border-black mt-2 mb-2"/>
           
        </div>
    );
};

export default Cartmodal;