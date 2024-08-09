import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ShopCategory = () => {
    return (
        <div>
            <div className="mt-10 mb-10 flex justify-between">
                <h1 className="lg:text-3xl font-bold">Shop By Category</h1>
                <button className="text-xl font-semibold text-green-500">Shop all categories</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6'>

                <div>
                    <Card className='h-full lg:h-[300px] border-2'>
                    <CardActionArea>
                        <CardMedia className='h-[450px] lg:h-[250px] w-full'
                            component="img"
                            height="140"
                            image="https://i.ibb.co/6smjSLL/orange-bg-none.png"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">

                                <h1 className='text-3xl lg:text-2xl font-bold text-center'>Fruits</h1>
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
                </div>
                
                
                <div>
                    <Card className='h-full lg:h-[300px] border-2'>
                    <CardActionArea>
                        <CardMedia className='h-[450px] lg:h-[250px] w-full'
                            component="img"
                            height="140"
                            image="https://i.ibb.co/crLtNf2/vegetable-jpeg-removebg.png"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">

                                <h1 className='text-3xl lg:text-2xl font-bold text-center'>Vegetable</h1>
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
                </div>
                
                
                <div>
                    <Card className='h-full lg:h-[300px] border-2'>
                    <CardActionArea>
                        <CardMedia className='h-[450px] lg:h-[250px] w-full'
                            component="img"
                            height="140"
                            image="https://i.ibb.co/j6GTfqL/meat.webp"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">

                                <h1 className='text-3xl lg:text-2xl font-bold text-center'>Meat & Poulity</h1>
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
                </div>
                
                
               
                <div>
                    <Card className='h-full lg:h-[300px] border-2'>
                    <CardActionArea>
                        <CardMedia className='h-[450px] lg:h-[250px] w-full'
                            component="img"
                            height="140"
                            image="https://i.ibb.co/8Pf2qXn/eggs-removebg.png"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">

                                <h1 className='text-3xl lg:text-2xl font-bold text-center'>Diary & Eggs</h1>
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
                </div>

                
                
                <div>
                    <Card className='h-full lg:h-[300px] border-2'>
                    <CardActionArea>
                        <CardMedia className='h-[450px] lg:h-[250px] w-full'
                            component="img"
                            height="140"
                            image="https://i.ibb.co/Jqjswj3/small-fish.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">

                                <h1 className='text-3xl lg:text-2xl font-bold text-center'>Fish</h1>
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
                </div>
                
                
                
                
                <div>
                    <Card className='h-full lg:h-[300px] border-2'>
                    <CardActionArea>
                        <CardMedia className='h-[450px] lg:h-[250px] w-full'
                            component="img"
                            height="140"
                            image="https://i.ibb.co/VQkFgb0/milk-removebg.png"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">

                                <h1 className='text-3xl lg:text-2xl font-bold text-center'>Milk & Driinks</h1>
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
                </div>
                
                
                
            </div>
        </div>
    );
};

export default ShopCategory;