
import '@smastrom/react-rating/style.css'
import useAxiosPublic from '../../Hoocks/UseAxiosPublic/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import CardHover from './CardHover';

const HoverCard = () => {

    const axiosPublic = useAxiosPublic();


    const { data: allData } = useQuery({
        
        queryKey: ['cardData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/cardData');
            return res.data;
        }
    })
    // console.log(allData)

    return (
        <div>
            {/* <div className="mt-10 mb-10 flex justify-between">
                <h1 className="lg:text-3xl font-bold">Daily Chilled Vegetables</h1>
                <button className="text-xl font-semibold text-green-500">Shop all</button>
            </div> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {
                    allData?.map(data => <CardHover key={data._id} data={data}></CardHover>)
                }


               

                {/*               
              
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
                                <div className='hidden group-hover:block absolute top-[375px] md:top-[270px] lg:top-[135px] left-44 md:left-32 lg:left-10 text-black p-4'>
                                    <div className='flex gap-3 justify-center '>
                                        <button className='flex flex-col items-center hover:text-green-600 hover:font-bold'><span><GrFavorite /></span>Wishlisht</button>
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
                                <div className='hidden group-hover:block absolute top-[375px] md:top-[270px] lg:top-[135px] left-44 md:left-32 lg:left-10 text-black p-4'>
                                    <div className='flex gap-3 justify-center '>
                                        <button className='flex flex-col items-center hover:text-green-600 hover:font-bold'><span><GrFavorite /></span>Wishlisht</button>
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
                                <div className='hidden group-hover:block absolute top-[375px] md:top-[270px] lg:top-[135px] left-44 md:left-32 lg:left-10 text-black p-4'>
                                    <div className='flex gap-3 justify-center '>
                                        <button className='flex flex-col items-center hover:text-green-600 hover:font-bold'><span><GrFavorite /></span>Wishlisht</button>
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
                                <div className='hidden group-hover:block absolute top-[375px] md:top-[265px] lg:top-[135px] left-44 md:left-32 lg:left-10 text-black p-4'>
                                    <div className='flex gap-3 justify-center '>
                                        <button className='flex flex-col items-center hover:text-green-600 hover:font-bold'><span><GrFavorite /></span>Wishlisht</button>
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
                </div> */}


            </div>

        </div>
    );
};

export default HoverCard;