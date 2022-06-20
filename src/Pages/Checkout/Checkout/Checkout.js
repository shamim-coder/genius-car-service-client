import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import useServiceDetails from "../../../Hooks/useServiceDetails";

const Checkout = () => {
    const { serviceId } = useParams();
    const { service } = useServiceDetails(serviceId);
    const [user] = useAuthState(auth);
    return (
        <div className="container">
            <h2 className="text-center my-5">Please Checkout for {service.name}</h2>
            <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6">
                    <form class="needs-validation">
                        <div class="mb-3">
                            <label for="fullName">Full name</label>
                            <input type="text" class="form-control" id="fullName" value={user?.displayName} placeholder="Full name" required />
                            <div class="invalid-feedback">Valid full name is required.</div>
                        </div>
                        <div class="mb-3">
                            <label for="address">Service</label>
                            <input type="text" class="form-control" id="address" value={service?.name} disabled required />
                            <div class="invalid-feedback">Please enter your shipping address.</div>
                        </div>

                        <div class="mb-3">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" value={user?.email} disabled />
                            <div class="invalid-feedback">Please enter a valid email address for shipping updates.</div>
                        </div>

                        <div class="mb-3">
                            <label for="address">Address</label>
                            <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="" />
                            <div class="invalid-feedback">Please enter your shipping address.</div>
                        </div>

                        <h4 class="mb-3">Payment</h4>

                        <div class="d-block my-3">
                            <div class="custom-control custom-radio">
                                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required />{" "}
                                <label class="custom-control-label" for="credit">
                                    Card
                                </label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required />{" "}
                                <label class="custom-control-label" for="paypal">
                                    COD
                                </label>
                            </div>
                        </div>

                        <hr class="mb-4" />
                        <button class="btn btn-primary btn-lg btn-block" type="submit">
                            Continue to checkout
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
