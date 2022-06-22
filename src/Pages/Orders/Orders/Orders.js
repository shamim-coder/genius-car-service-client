import React from "react";
import useOrders from "../../../Hooks/useOrders";

const Orders = () => {
    const { orders } = useOrders();

    return (
        <div>
            <h1>Manage Orders</h1>
            <h4>Orders : {orders.length}</h4>
        </div>
    );
};

export default Orders;
