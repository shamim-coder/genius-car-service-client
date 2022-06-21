import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import useServiceDetails from "../../../Hooks/useServiceDetails";
import { useForm } from "react-hook-form";

const Checkout = () => {
    const { serviceId } = useParams();
    const { service } = useServiceDetails(serviceId);

    const [user] = useAuthState(auth);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleCheckout = (data) => {
        const orderInfo = { ...data, orderId: serviceId };
    };

    return (
        <div className="container">
            <h2 className="text-center my-5">Please Checkout for {service?.name}</h2>
            <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit(handleCheckout)} className="needs-validation">
                        <div className="mb-3">
                            <label htmlFor="fullName">Full name</label>
                            <input type="text" className="form-control" {...register("fullName", { required: true })} id="fullName" value={user?.displayName} placeholder="Full name" />

                            {errors.fullName && <div className="invalid-feedback d-block">Valid full name is required.</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="service">Service</label>
                            <input type="text" className="form-control" {...register("service", { required: true })} id="service" value={user && service?.name} readOnly />

                            {errors.service && <div className="invalid-feedback d-block">Valid Service required.</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" {...register("email", { required: true })} id="email" value={user?.email} readOnly />

                            {errors.email && <div className="invalid-feedback d-block">Please enter a valid email address for shipping updates.</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address">Address</label>
                            <input type="text" className="form-control" {...register("address", { required: true })} id="address" placeholder="1234 Main St" />

                            {errors.address && <div className="invalid-feedback d-block">Please enter your shipping address.</div>}
                        </div>

                        <h4 className="mb-3">Payment</h4>

                        <div className="d-block my-3">
                            <div className="form-check">
                                <input className="form-check-input" value="Card" {...register("payment", { required: true })} type="radio" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Card
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" value="Cash on Delivery" {...register("payment", { required: true })} type="radio" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Cash on Delivery
                                </label>
                            </div>
                            {errors.payment && <div className="invalid-feedback d-block">Please select payment method.</div>}
                        </div>

                        <hr className="mb-4" />
                        <input className="btn btn-primary" type="submit" value="Continue to checkout" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
