import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { MdOutlineShoppingCart } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import { IoMdEye } from "react-icons/io";

const HoverCard = () => {
    return (
        <div>
            <div className="mt-10 mb-10 flex justify-between">
                <h1 className="lg:text-3xl font-bold">Daily Chilled Vegetables</h1>
                <button className="text-xl font-semibold text-green-500">Shop all</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
              
              
                <div className="relative group">
                    <div className="">
                        <div className='hover:scale-105'>
                            <Card className='border-0'>
                                <CardMedia className=' py-4 md:p-4 lg:p-4 '
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image="https://i.ibb.co/K22D08G/fruits.jpg"
                                />
                                <div className='hidden group-hover:block absolute top-[375px] md:top-[270px] lg:top-44 left-44 md:left-32 lg:left-10 text-black p-4'>
                                    <div className='flex gap-3 justify-center '>
                                        <button className='flex flex-col items-center hover:text-green-600 hover:font-bold'><span><GrFavorite /></span>Wishlish</button>
                                        <button className='flex flex-col items-center hover:text-green-600 hover:font-bold'><span><IoMdEye /></span>Quickview</button>

                                    </div>
                                </div>

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Pineapple fruits
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" fontSize={20} fontWeight={700} sx={{}}>
                                        2.00kg
                                    </Typography>

                                    <div className='flex gap-2 items-center'>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={3}
                                            readOnly
                                        />
                                        <p className='text-3xl font-bold'>3</p>
                                    </div>
                                    <h3 className='font-bold text-xl text-red-400'>$120.00</h3>

                                </CardContent>
                                <div className='text-center p-3'>
                                    <button className='flex gap-2 items-center justify-center text-white bg-green-600 p-2 rounded-xl w-full text-xl font-bold' ><span className='text-xl font-bold'><MdOutlineShoppingCart /></span>Add to cart</button>
                                </div>

                            </Card>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>

              
              
                <div className="relative group">
                    <div className="">
                        <div className='hover:scale-105'>
                            <Card className='border-0'>
                                <CardMedia className=' py-4 md:p-4 lg:p-4 '
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image="https://i.ibb.co/K22D08G/fruits.jpg"
                                />
                                <div className='hidden group-hover:block absolute top-[375px] md:top-[270px] lg:top-44 left-44 md:left-32 lg:left-10 text-black p-4'>
                                    <div className='flex gap-3 justify-center '>
                                        <button className='flex flex-col items-center hover:text-green-600 hover:font-bold'><span><GrFavorite /></span>Wishlish</button>
                                        <button className='flex flex-col items-center hover:text-green-600 hover:font-bold'><span><IoMdEye /></span>Quickview</button>

                                    </div>
                                </div>

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Pineapple fruits
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" fontSize={20} fontWeight={700} sx={{}}>
                                        2.00kg
                                    </Typography>

                                    <div className='flex gap-2 items-center'>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={3}
                                            readOnly
                                        />
                                        <p className='text-3xl font-bold'>3</p>
                                    </div>
                                    <h3 className='font-bold text-xl text-red-400'>$120.00</h3>

                                </CardContent>
                                <div className='text-center p-3'>
                                    <button className='flex gap-2 items-center justify-center text-white bg-green-600 p-2 rounded-xl w-full text-xl font-bold' ><span className='text-xl font-bold'><MdOutlineShoppingCart /></span>Add to cart</button>
                                </div>

                            </Card>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>

              
              
                <div className="relative group">
                    <div className="">
                        <div className='hover:scale-105'>
                            <Card className='border-0'>
                                <CardMedia className=' py-4 md:p-4 lg:p-4 '
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image="https://i.ibb.co/K22D08G/fruits.jpg"
                                />
                                <div className='hidden group-hover:block absolute top-[375px] md:top-[270px] lg:top-44 left-44 md:left-32 lg:left-10 text-black p-4'>
                                    <div className='flex gap-3 justify-center '>
                                        <button className='flex flex-col items-center hover:text-green-600 hover:font-bold'><span><GrFavorite /></span>Wishlish</button>
                                        <button className='flex flex-col items-center hover:text-green-600 hover:font-bold'><span><IoMdEye /></span>Quickview</button>

                                    </div>
                                </div>

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Pineapple fruits
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" fontSize={20} fontWeight={700} sx={{}}>
                                        2.00kg
                                    </Typography>

                                    <div className='flex gap-2 items-center'>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={3}
                                            readOnly
                                        />
                                        <p className='text-3xl font-bold'>3</p>
                                    </div>
                                    <h3 className='font-bold text-xl text-red-400'>$120.00</h3>

                                </CardContent>
                                <div className='text-center p-3'>
                                    <button className='flex gap-2 items-center justify-center text-white bg-green-600 p-2 rounded-xl w-full text-xl font-bold' ><span className='text-xl font-bold'><MdOutlineShoppingCart /></span>Add to cart</button>
                                </div>

                            </Card>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>

              
              
                <div className="relative group">
                    <div className="">
                        <div className='hover:scale-105'>
                            <Card className='border-0'>
                                <CardMedia className=' py-4 md:p-4 lg:p-4 '
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image="https://i.ibb.co/K22D08G/fruits.jpg"
                                />
                                <div className='hidden group-hover:block absolute top-[375px] md:top-[265px] lg:top-44 left-44 md:left-32 lg:left-10 text-black p-4'>
                                    <div className='flex gap-3 justify-center '>
                                        <button className='flex flex-col items-center hover:text-green-600 hover:font-bold'><span><GrFavorite /></span>Wishlish</button>
                                        <button className='flex flex-col items-center hover:text-green-600 hover:font-bold'><span><IoMdEye /></span>Quickview</button>

                                    </div>
                                </div>

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Pineapple fruits
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" fontSize={20} fontWeight={700} sx={{}}>
                                        2.00kg
                                    </Typography>

                                    <div className='flex gap-2 items-center'>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={3}
                                            readOnly
                                        />
                                        <p className='text-3xl font-bold'>3</p>
                                    </div>
                                    <h3 className='font-bold text-xl text-red-400'>$120.00</h3>

                                </CardContent>
                                <div className='text-center p-3'>
                                    <button className='flex gap-2 items-center justify-center text-white bg-green-600 p-2 rounded-xl w-full text-xl font-bold' ><span className='text-xl font-bold'><MdOutlineShoppingCart /></span>Add to cart</button>
                                </div>

                            </Card>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>


            </div>

        </div>
    );
};

export default HoverCard;