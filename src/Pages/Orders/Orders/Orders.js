import React from "react";
import useOrders from "../../../Hooks/useOrders";
import Loading from "../../Shared/Loading/Loading";

const Orders = () => {
    const { orders, loading } = useOrders();

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <h1>Manage Orders</h1>
                    <h4>Orders : {orders.length}</h4>
                </>
            )}
        </div>
    );
};

export default Orders;
