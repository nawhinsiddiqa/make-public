import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const CheckOutForm = ({price, check, setCheck }) => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const { user } = useContext(AuthContext)
    const elements = useElements();
    console.log(price)
    const axiosSecure = useAxiosSecure();
    console.log(clientSecret)
    console.log(check)
    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price: price })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                    // setCheck(!check)
                })

        }


    }, [price, check])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        console.log(stripe, elements)
        const card = elements.getElement(CardElement)

        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        // 
        if (error) {
            console.log('payment error', error)
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('')
        }
        //    confirmed
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);
            }



        }



        // now save the payment in the database
        const payment = {
            email: user.email,
            price: price,
            transactionId: paymentIntent.id,
            date: new Date(), // utc date convert. use moment js to 
           
            status: 'pending'
        }
        const res = await axiosSecure.post('/payment-collection', payment);
        console.log('payment saved', res.data);
        
        if (res.data?.paymentResult?.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Thank you for the taka paisa",
                showConfirmButton: false,
                timer: 1500
            });
            
        }






    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="my-6 btn btn-sm bg-green-600" type="submit" disabled={!stripe}>
                    Pay
                </button>
                <p className="text-red-600">{error}</p>
                {
                    transactionId && <p className="text-green-600"> Your Transactionn id:{transactionId}</p>
                }

            </form>
        </div>
    );
};


export default CheckOutForm;
