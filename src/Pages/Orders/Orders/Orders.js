import React from "react";
import useOrders from "../../../Hooks/useOrders";
import Loading from "../../Shared/Loading/Loading";

const Orders = () => {
    const { orders, loading } = useOrders();

    return (
        <div className="container my-5">
            <div className="table-responsive">
                <h1 className="text-center mb-5">Manage Your Orders</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Item</th>
                            <th scope="col">Order Time</th>
                            <th scope="col">Address</th>
                            <th scope="col">Order Email</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    {loading ? (
                        <Loading />
                    ) : (
                        <tbody>
                            {orders.map((order, index) => {
                                return (
                                    <tr key={order._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{order.service}</td>
                                        <td>{order.orderTime}</td>
                                        <td>{order.address}</td>
                                        <td>{order.email}</td>
                                        <td>{order.orderStatus}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
};

export default Orders;
