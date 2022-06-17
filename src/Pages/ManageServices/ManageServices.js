import React from "react";
import useServices from "../../Hooks/useServices";

const ManageServices = () => {
    const [services, setServices] = useServices();

    const handleDeleteService = (id) => {
        const url = `http://localhost:5000/deleteService/${id}`;

        const remaining = services.filter((service) => service._id !== id);

        const proceed = window.confirm("Are you sure?");

        if (proceed) {
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    setServices(remaining);
                    console.log(data);
                });
        }
    };

    return (
        <div className="container my-5">
            <h1 className="text-center">Manage Services</h1>
            <div className="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{service.name}</td>
                                    <td>{service.price}</td>
                                    <td>{service.description.slice(0, 50)}...</td>
                                    <td>
                                        <button onClick={() => handleDeleteService(service._id)}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageServices;
