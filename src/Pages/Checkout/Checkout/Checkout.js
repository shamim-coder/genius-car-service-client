import React from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import useServiceDetails from "../../../Hooks/useServiceDetails";
const axios = require("axios").default;

const Checkout = () => {
    const { serviceId } = useParams();
    const { service } = useServiceDetails(serviceId);

    const [user] = useAuthState(auth);

    const [success, setSuccess] = useState("");

    const navigate = useNavigate();

    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm();

    const handleCheckout = (e) => {
        e.preventDefault();
        const orderInfo = {
            name: e.target.name.value,
            service: e.target.service.value,
            email: e.target.email.value,
            address: e.target.address.value,
            orderId: serviceId,
            paymentMethod: e.target.payment.value,
            orderTime: new Date(),
            orderStatus: "Processing",
        };

        axios
            .post("https://infinite-peak-68633.herokuapp.com/order", orderInfo)
            .then((res) => {
                res.data.insertedId && setSuccess("Your Order Placed");
                navigate(`/order-track/${serviceId}`);
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="container">
            <h2 className="text-center my-5">Please Checkout for {service?.name}</h2>
            <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6">
                    <form onSubmit={handleCheckout} className="needs-validation">
                        <div className="mb-3">
                            <label htmlFor="fullName">Full name</label>
                            <input type="text" name="name" className="form-control" id="fullName" defaultValue={user?.displayName} placeholder="Full name" />

                            {/* {errors.fullName && <div className="invalid-feedback d-block">Valid full name is required.</div>} */}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="service">Service</label>
                            <input type="text" name="service" className="form-control" id="service" defaultValue={user && service?.name} readOnly />

                            {/* {errors.service && <div className="invalid-feedback d-block">Valid Service required.</div>} */}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" className="form-control" id="email" defaultValue={user?.email} readOnly />

                            {/* {errors.email && <div className="invalid-feedback d-block">Please enter a valid email address for shipping updates.</div>} */}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address">Address</label>
                            <input type="text" name="address" className="form-control" id="address" placeholder="1234 Main St" />

                            {/* {errors.address && <div className="invalid-feedback d-block">Please enter your shipping address.</div>} */}
                        </div>

                        <h4 className="mb-3">Payment</h4>

                        <div className="d-block my-3">
                            <div className="form-check">
                                <input name="payment" className="form-check-input" value="Card" type="radio" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Card
                                </label>
                            </div>
                            <div className="form-check">
                                <input name="payment" className="form-check-input" value="Cash on Delivery" type="radio" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Cash on Delivery
                                </label>
                            </div>
                        </div>

                        <hr className="mb-4" />
                        <input className="btn btn-primary" type="submit" value="Continue to checkout" />
                        <div className="text-success d-block">{success}</div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
