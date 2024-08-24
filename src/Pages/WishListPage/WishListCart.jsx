import PropTypes from 'prop-types';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hoocks/UseAxiosSecure/useAxiosSecure';

const WishListCart = ({data, refetch}) => {
    const {productName,productImage,productPrice,productStatus}=data;

    const axiosSecure= useAxiosSecure();

    const handlaeDelete = _id => {
        console.log('delete button click by id :', _id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            
            
        })
        
            .then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.delete(`/wishListData/${data._id}`)
                     .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                                
                            });
                        }
                        
                     })
                        
                       
                        
                }
                
            })
            

    }



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
                 onClick={() => handlaeDelete(data._id)} 
                 className="text-2xl  hover:bg-red-500 hover:text-white ml-4 border p-2 rounded-lg"><RiDeleteBin5Fill /></button>
            </div>
            <hr className="w-full border-black mt-2 mb-2" />
            
        </div>
        </div>
    );
};
WishListCart.propTypes = {
    data: PropTypes.object.isRequired,
    refetch: PropTypes.func.isRequired,
}

export default WishListCart;