import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useOrders from "../../../Hooks/useOrders";

const OrderTrack = () => {
    const { serviceId } = useParams();

    // const { orders } = useOrders();

    const [orderDetails, setOrderDetails] = useState({});

    useEffect(() => {
        fetch(`https://infinite-peak-68633.herokuapp.com/order-track/${serviceId}`)
            .then((res) => res.json())
            .then((data) => setOrderDetails(data));
    }, [serviceId]);

    // const myOrder = orders.find((order) => order.orderId === serviceId);

    return (
        <div className="text-center">
            <h1>Congratulation!!! {orderDetails?.name}</h1>
            <h2>Your Order has been places successfully! {serviceId}</h2>
        </div>
    );
};

export default OrderTrack;
