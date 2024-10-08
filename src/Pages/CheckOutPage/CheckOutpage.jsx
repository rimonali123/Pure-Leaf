import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hoocks/UseAxiosSecure/useAxiosSecure";
import ProductSection from "./ProductSection";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentCheckOutPage from "./PaymentPageComponent/PaymentCheckOutPage";
import Swal from "sweetalert2";



const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const CheckOutpage = () => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const axiosSecure = useAxiosSecure();
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalPricePlusOne, setTotalPricePlusOne] = useState(0);



    const [paymentMethod, setPaymentMethod] = useState(null);

    const handlePaymentChange = (method) => {
        setPaymentMethod(method);
        setValue("DirectPayment", method === "DirectPayment");
        setValue("cashOnDelivery", method === "cashOnDelivery");
    };


    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const processOrder = async (data) => {
        // Implement order processing logic here
        console.log('Processing order', data);
        // Redirect or show success message
        // navigate('/order-success'); // Example navigation
    };

    const { data: cartItem  } = useQuery({
        queryKey: ['cartItemData'],
        queryFn: async () => {
            const res = await axiosSecure.get('/cartItemData')
            return res.data
        }
    })
    // console.log(cartItem)

    useEffect(() => {
        if (Array.isArray(cartItem)) {
            const calculatedTotalPrice = cartItem.reduce((total, item) => total + item.productPrice, 0);

            const totalPrice = parseFloat(calculatedTotalPrice.toFixed(2));
            const totalPricePlusOne = parseFloat((calculatedTotalPrice + 1).toFixed(2));

            setTotalPrice(totalPrice);
            setTotalPricePlusOne(totalPricePlusOne);
        }
    }, [cartItem]);


    console.log(totalPrice)
    console.log(totalPricePlusOne)



    const { user } = useContext(AuthContext)


    const { data: userData } = useQuery({
        queryKey: ['userInfo'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/userInfo/${user?.email}`);
            return res.data;
        }
    })
    // console.log(userData)

const [item, setItem] = useState()

    useEffect(() => {
        axiosSecure.get(`/userInfo/${user?.email}`)


            .then(data => {
                setItem(data.data)
            })
    }, [axiosSecure, user?.email])

    console.log(item?.name)

    const { data: cartData } = useQuery({
        queryKey: ['cartItemData'],
        queryFn: async () => {
            const res = await axiosSecure.get('/cartItemData');
            return res.data;
        }
    });
    console.log(cartData)



    const onSubmit = async (data) => {
        // console.log('button clicked')
        // console.log(data)
        // if (paymentMethod === "DirectPayment") {
        //     navigate('/faq');
        // }
        if (paymentMethod === "DirectPayment") {
            handleOpen();
        } else if (paymentMethod === "cashOnDelivery") {
            await processOrder(data);

            const orderDetails = {
                userName: item?.name,
                email: user?.email,
                phoneNumber: item?.phoneNumber,
                totalPrice: totalPricePlusOne,
                subtotal: totalPrice,
                country: item?.country,
                streetAddress: item?.streetAddress,
                town: item?.town,
                products: cartData.map(({ productName, productImage, description }) => ({
                    productName,
                    productImage,
                    description
                })),
                status: 'success',
               
            }
            const res = await axiosSecure.post('/orderInfo', orderDetails)
            console.log(res.data)
            console.log('order info save')
            if (res.data?.insertedId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your order receive is Succesfully",
                  
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            console.log(orderDetails)
        }

    }

    const handleConfirmPayment = async () => {
        // Close the modal
        handleClose();
        // Proceed with the order
        // await processOrder({});
    };


    return (
        <div className="mt-20">
            <div>

            </div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="flex gap-10 flex-col lg:flex-row" >
                    <div className="w-full">
                        <div className="p-4 space-y-8">
                            <div className="flex flex-col gap-2">
                                <label className="font-bold">Your Name<span className="text-red-500">*</span></label>
                                <input type="text" className="border p-2 rounded-xl" defaultValue={userData?.name}
                                    {...register("name", { required: true })} />
                                {errors.name && <span className="text-red-600">This field is required</span>}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-bold">Display Name<span className="text-red-500">*</span></label>
                                <input type="text" className="border p-2 rounded-xl" defaultValue={userData?.displayName}
                                    {...register("displayName", { required: true })} />
                                {errors.displayName && <span className="text-red-600">This field is required</span>}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-bold">Email<span className="text-red-500">*</span></label>
                                <input type="email" className="border p-2 rounded-xl" readOnly defaultValue={user?.email}
                                    {...register("email", { required: false })} />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-bold">Company Name (optional) </label>
                                <input type="text" className="border p-2 rounded-xl" defaultValue={userData?.companyName}
                                    {...register("companyName", { required: false })} />

                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-bold">Country<span className="text-red-500">*</span></label>
                                <input type="text" className="border p-2 rounded-xl" defaultValue={userData?.country}
                                    {...register("country", { required: true })} />
                                {errors.country && <span className="text-red-600">This field is required</span>}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-bold">Street address<span className="text-red-500">*</span></label>
                                <input type="text" className="border p-2 rounded-xl" defaultValue={userData?.streetAddress}
                                    placeholder="House number"
                                    {...register("streetAddress", { required: true })} />
                                {errors.streetAddress && <span className="text-red-600">This field is required</span>}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-bold">Town<span className="text-red-500">*</span></label>
                                <input type="text" className="border p-2 rounded-xl" defaultValue={userData?.town}
                                    {...register("town", { required: true })} />
                                {errors.town && <span className="text-red-600">This field is required</span>}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-bold">City<span className="text-red-500">*</span></label>
                                <input type="text" className="border p-2 rounded-xl" defaultValue={userData?.city}
                                    {...register("city", { required: true })} />
                                {errors.city && <span className="text-red-600">This field is required</span>}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-bold">Zip Code<span className="text-red-500">*</span></label>
                                <input type="number" className="border p-2 rounded-xl" defaultValue={userData?.zipCode}
                                    {...register("zipCode", { required: true })} />
                                {errors.zipCode && <span className="text-red-600">This field is required</span>}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-bold">Phone Number<span className="text-red-500">*</span></label>
                                <input type="number" className="border p-2 rounded-xl" defaultValue={userData?.phoneNumber}
                                    {...register("phoneNumber", { required: true })} />
                                {errors.phoneNumber && <span className="text-red-600">This field is required</span>}
                            </div>

                        </div>
                    </div>
                    <div className="w-full mt-5">
                        <h1 className="text-2xl font-semibold mb-5 ">Your Order</h1>
                        <div className="  bg-slate-100 w-full p-4 ">
                            <p className="text-2xl font-bold">Product</p>
                            <div className="flex flex-col gap-5">
                                {cartItem?.map(cart => <ProductSection key={cart._id} cart={cart}  ></ProductSection>)}
                            </div>


                            <h3 className="text-xl font-bold">Cart Totals</h3>
                            <div className="flex justify-between p-4 px-8">
                                <p>Sub total</p>
                                <p className="text-red-500">${totalPrice}</p>
                            </div>
                            <div className="flex justify-between p-4 px-8">
                                <p>Shippping</p>
                                <p className="text-red-500">$1</p>
                            </div>
                            <hr className="border border-black opacity-10 " />

                            <div className="flex justify-between p-4 px-8">
                                <p className="font-bold text-lg">Total</p>
                                <p className="text-red-500 text-xl font-bold">${totalPricePlusOne}</p>
                            </div>

                        </div>

                        <div>
                            <h1 className="text-2xl font-bold p-8">Payment method</h1>
                            <div className="flex gap-5 items-center bg-slate-100 p-4 hover:bg-slate-200">
                                <input {...register("DirectPayment")}
                                    checked={paymentMethod === "DirectPayment"}
                                    onChange={() => handlePaymentChange("DirectPayment")}

                                    type="checkbox" name="DirectPayment" id="" />
                                <label className="text-xl font-semibold" htmlFor="">Direct Payments</label>
                            </div>
                            <div className="flex gap-5 items-center bg-slate-100 mt-5 p-4 hover:bg-slate-200">
                                <input {...register("cashOnDelivery")}
                                    checked={paymentMethod === "cashOnDelivery"}
                                    onChange={() => handlePaymentChange("cashOnDelivery")}

                                    type="checkbox" name="cashOnDelivery" id="" />
                                <label className="text-xl font-semibold" htmlFor="">Cash On Delivery</label>
                            </div>
                        </div>


                        <div className="w-full mt-5">
                            <button type="submit" disabled={paymentMethod === null} className={`text-xl font-bold w-full p-4 rounded-xl ${paymentMethod ? 'bg-green-500 hover:scale-105' : 'bg-slate-200 cursor-not-allowed'}`}>Pleace Order</button>
                        </div>
                    </div>
                </div>

            </form>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Confirm Your Payment
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className=" ">
                            <Elements stripe={stripePromise}>
                                <PaymentCheckOutPage totalPricePlusOne={totalPricePlusOne} totalPrice={totalPrice}></PaymentCheckOutPage>
                            </Elements>
                        </div>
                    </Typography>
                    
                    <Button onClick={handleConfirmPayment} color="secondary" variant="contained" sx={{ mt: 2 }}>
                        Cancel
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};

export default CheckOutpage;