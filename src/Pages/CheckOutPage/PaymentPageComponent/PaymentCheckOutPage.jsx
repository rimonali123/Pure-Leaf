import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Swal from 'sweetalert2'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Components/AuthProvider/AuthProvider";
import useAxiosSecure from "../../../Hoocks/UseAxiosSecure/useAxiosSecure";
import { Button } from "@mui/material";
import PropTypes from 'prop-types';
import { useQuery } from "@tanstack/react-query";


const PaymentCheckOutPage = ({ totalPricePlusOne, totalPrice }) => {
    const { user } = useContext(AuthContext)
    const [clientSecret, setClientSecret] = useState();
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    console.log(totalPricePlusOne)
    const [item, seetItem] = useState([]);

    useEffect(() => {
        axiosSecure.get(`/userInfo/${user?.email}`)


            .then(data => {
                seetItem(data.data)
            })
    }, [axiosSecure, user?.email])

    console.log(item?.name)

    let price = totalPricePlusOne
    console.log(price)

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price: price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, price])


        const { data: cartData } = useQuery({
            queryKey: ['cartItemData'],
            queryFn: async () => {
                const res = await axiosSecure.get('/cartItemData');
                return res.data;
            }
        });
        console.log(cartData)

        // if (Array.isArray(cartData)) {
        //     cartData.forEach(item => {
        //         console.log(item.productName);
                
        //         // console.log(item.description);
        //     });
        // } else {
        //     console.log('cartData is not an array');
        // }


        // console.log(item.productName);

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log('btn click')


        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {

            console.log(error)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }


        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymus User'
                }

            }

        })
        if (confirmError) {
            console.log('confirm error found', confirmError)
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Oops...",
                text: `${error?.message}`,
                showConfirmButton: false,
                timer: 1500
            });
        }
        else {
            console.log("payment intent", paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('payment successfully')

                // save payment info to the database
                const payment = {
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
                    transictionId: paymentIntent?.id,
                }
                const res = await axiosSecure.post('/paymentInfo', payment)
                console.log(res.data)
                console.log('payment info save')
                if (res.data?.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Payment is Succesfully",
                        text: `Transaction id: ${paymentIntent?.id}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            }


        }

    };

    return (
        <div className="max-w-2xl mx-auto ">
            <form onSubmit={handleSubmit}>
                <CardElement className="border border-black  p-3 rounded-lg "
                    options={{
                        style: {

                            base: {
                                fontSize: '24px',
                                color: '#000000',
                                '::placeholder': {
                                    color: '#000000',

                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <Button color="primary" type="submit" variant="contained" sx={{ mt: 2 }}>
                    Confirm Payment
                </Button>

            </form>
        </div>
    );
};
PaymentCheckOutPage.propTypes = {
    totalPricePlusOne: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
}

export default PaymentCheckOutPage;