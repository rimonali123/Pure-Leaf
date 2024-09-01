import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Swal from 'sweetalert2'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Components/AuthProvider/AuthProvider";
import useAxiosSecure from "../../../Hoocks/UseAxiosSecure/useAxiosSecure";
import { Button } from "@mui/material";


const PaymentCheckOutPage = () => {
    const { user } = useContext(AuthContext)
    const [clientSecret, setClientSecret] = useState();
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    // const [item, seetItem] = useState([]);

    // useEffect(() => {
    //     axiosSecure.get(`/usersBiodata/${user?.email}`)


    //         .then(data => {
    //             seetItem(data.data)
    //         })
    // }, [axiosSecure, user?.email])

    // console.log(item?.name)

    const price = 5


    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price: price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure])




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

                // // save payment info to the database
                // const payment = {
                //     name: item?.name,
                //     email: user?.email,
                //     userId: item?.userId,
                //     mobileNumber: item?.mobileNumber,
                //     price: price,
                //     status: 'pending',
                //     transictionId: paymentIntent?.id,
                // }
                // const res = await axiosSecure.post('/payments', payment)
                // console.log(res.data)
                // if (res.data?.insertedId) {
                //     Swal.fire({
                //         position: "center",
                //         icon: "success",
                //         title: "Your Payment is Succesfully",
                //         text: `Transaction id: ${paymentIntent?.id}`,
                //         showConfirmButton: false,
                //         timer: 1500
                //     });
                // }

            }


        }
       
    };

    return (
        <div className="max-w-2xl mx-auto ">
            <form onSubmit={handleSubmit}>
                <CardElement className="border border-black  p-3 rounded-lg"
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


export default PaymentCheckOutPage;