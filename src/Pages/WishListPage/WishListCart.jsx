import PropTypes from 'prop-types';
import { RiDeleteBin5Fill } from 'react-icons/ri';

const WishListCart = ({data}) => {
    const {productName,productImage,productPrice,productStatus}=data;
    return (
        <div>
             <div>
            <div className="flex justify-between   items-center">
                <div className='w-52'>
                    <h1 className=' font-semibold'>{productName}</h1>
                </div>
                <img src={productImage} className="h-20 w-32" alt="" />
                <h3 className=" text-xl ml-4">{productStatus}</h3>
                <h3 className="text-red-500 text-xl ml-4">${productPrice}</h3>
                <button
                //  onClick={() => handlaeDelete(cart._id)} 
                 className="text-2xl  hover:bg-red-500 hover:text-white ml-4 border p-2 rounded-lg"><RiDeleteBin5Fill /></button>
            </div>
            <hr className="w-full border-black mt-2 mb-2" />
            
        </div>
        </div>
    );
};
WishListCart.propTypes = {
    data: PropTypes.object.isRequired,
}

export default WishListCart;