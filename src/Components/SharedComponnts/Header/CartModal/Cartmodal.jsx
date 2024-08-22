import PropTypes from 'prop-types';
import { RiDeleteBin5Fill } from "react-icons/ri";

const Cartmodal = ({cart}) => {
    // console.log(cart)
    const {productName, productImage, productPrice} = cart
    return (
        <div>
            <div className="flex gap-2 items-center">
                <div className='w-44'>
                <h1>{productName}</h1>
                </div>
                <img src={productImage} className="h-20 w-20" alt="" />
                <h3 className="text-red-500 text-xl ml-2">${productPrice}</h3>
                <button className="text-2xl  hover:bg-red-500 hover:text-white ml-2 border p-2 rounded-lg"><RiDeleteBin5Fill /></button>
            </div>
                <hr  className="w-full border-black mt-2 mb-2"/>
           
        </div>
    );
};
Cartmodal.propTypes = {
    cart: PropTypes.object.isRequired
}

export default Cartmodal;