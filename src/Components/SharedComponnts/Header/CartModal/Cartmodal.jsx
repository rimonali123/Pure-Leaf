import PropTypes from 'prop-types';
import { RiDeleteBin5Fill } from "react-icons/ri";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hoocks/UseAxiosSecure/useAxiosSecure';

const Cartmodal = ({cart, refetch}) => {
    // console.log(cart)
    const {productName, productImage, productPrice} = cart

    const axiosSecure = useAxiosSecure();

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
                    axiosSecure.delete(`/cartItemData/${cart._id}`)
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
            <div className="flex gap-2 items-center">
                <div className='w-44'>
                <h1>{productName}</h1>
                </div>
                <img src={productImage} className="h-20 w-20" alt="" />
                <h3 className="text-red-500 text-xl ml-2">${productPrice}</h3>
                <button onClick={() => handlaeDelete(cart._id)} className="text-2xl  hover:bg-red-500 hover:text-white ml-2 border p-2 rounded-lg"><RiDeleteBin5Fill /></button>
            </div>
                <hr  className="w-full border-black mt-2 mb-2"/>
           
        </div>
    );
};
Cartmodal.propTypes = {
    cart: PropTypes.object.isRequired,
    refetch: PropTypes.object.isRequired,
}

export default Cartmodal;