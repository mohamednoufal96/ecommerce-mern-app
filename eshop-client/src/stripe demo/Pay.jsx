import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const KEY = "pk_test_51KD0wASAd4yynGzAIOoFq9aximmIEO4RDWj5BTyle7si3demDnvvtLN4PLqqOqdcMKyhqyvATWmscGu6joZrZ4SC00PF88CZaW";

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);

    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const resp = await axios.post("http://localhost:5000/api/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 4000,
                });

                console.log(resp.data);
            } catch (error) {
                console.log(error.message);
            }
        };

        stripeToken && makeRequest();
    }, [stripeToken]);
    return (
        <div
            style={{
                display: "grid",
                placeItems: "center",
                verticalAlign: "middle",
            }}
        >
            <h1>Make payment</h1>
            <div>
                <StripeCheckout
                    name="Eshop"
                    image="data:image/png;base64,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"
                    billingAddress
                    shippingAddress
                    description="Your are billed amount is $40"
                    amount={4000}
                    token={onToken}
                    stripeKey={KEY}
                >
                    <button
                        style={{
                            width: "100px",
                            height: "40px",
                        }}
                    >
                        Pay
                    </button>
                </StripeCheckout>
            </div>
        </div>
    );
};

export default Pay;
