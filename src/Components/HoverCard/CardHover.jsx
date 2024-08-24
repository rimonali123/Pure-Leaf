import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Rating } from '@smastrom/react-rating';
import { MdOutlineShoppingCart } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import { IoMdEye } from "react-icons/io";
import PropTypes from 'prop-types';
import { FaUserCheck } from "react-icons/fa";
import useAxiosPublic from '../../Hoocks/UseAxiosPublic/useAxiosPublic';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const CardHover = ({ data }) => {
    // console.log(data)
    const { name, image, price, weight, rating, totalRatings } = data;



    const axiosPublic = useAxiosPublic();




    const handleAddCartItem = () => {
        const cartItem = {
            productName: name,
            productImage: image,
            productPrice: price,
        }
        console.log('button clicked')
        console.log(cartItem)

        axiosPublic.post('/cartItemData', cartItem)
            .then(res => {
                console.log(res.data)
                console.log('cartItemData added to database .........')

                if (res.data.insertedId) {
                  
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Item added to cart successfully",
                        showConfirmButton: false,
                        timer: 1500

                    });


                }

            })
            .catch(error => {
                console.error(error.message)
            })
    }

    return (
        <div>
            <div className="relative group">
                <div className="">
                    <div className='hover:scale-105'>
                        <Card className='border-0 '>
                            <CardMedia className=' py-4 md:p-4 lg:p-4 h-52'
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={image}
                            />
                            <div className='hidden group-hover:block absolute top-[375px] md:top-[270px] lg:top-[170px] left-44 md:left-32 lg:left-10 text-black p-4'>
                                <div className='flex gap-3 justify-center '>
                                    <button className='flex flex-col items-center bg-white hover:text-green-600 hover:font-bold'><span className='text-xl'><GrFavorite /></span>Wishlisht</button>
                                   <Link to={`/quickViewPage/${data._id}`}>
                                   <button  className='flex flex-col items-center bg-white hover:text-green-600 hover:font-bold'><span className='text-xl'><IoMdEye /></span>Quickview</button>
                                   </Link>

                                </div>
                            </div>

                            <CardContent>
                                <div className='text-base'>
                                    {name}
                                </div>
                                <Typography variant="body2" color="text.secondary" fontSize={20} fontWeight={700} sx={{}}>
                                    {weight}
                                </Typography>

                                <div className='flex gap-2 items-center'>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={rating}
                                        readOnly
                                    />
                                    <p className='text-xl font-bold flex gap-2 items-center'>({totalRatings} <FaUserCheck />)</p>
                                </div>
                                <h3 className='font-bold text-xl text-red-400'>${price}</h3>

                            </CardContent>
                            <div className='text-center p-3'>
                                <button onClick={handleAddCartItem} className='flex gap-2 items-center justify-center text-white bg-green-600 p-2 rounded-xl w-full text-xl font-bold' ><span className='text-xl font-bold'><MdOutlineShoppingCart /></span>Add to cart</button>
                            </div>

                        </Card>
                    </div>
                </div>

                <div>

                </div>
            </div>

        </div>

    );


};
CardHover.propTypes = {
    data: PropTypes.object.isRequired,
    // refetch: PropTypes.func,
}

export default CardHover;