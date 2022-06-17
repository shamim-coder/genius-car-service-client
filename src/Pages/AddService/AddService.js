import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
    const {
        register,
        handleSubmit,
        reset,
        clearErrors,
        resetField,
        setError,
        setFocus,
        formState: { errors },
    } = useForm();

    const handleAddService = (data) => {
        fetch("http://localhost:5000/addService", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                reset();
            });
    };

    return (
        <div>
            <h2 className="text-center">Add Service</h2>
            <form className="d-flex flex-column w-25 m-auto gap-3" onSubmit={handleSubmit(handleAddService)}>
                {/* include validation with required or other standard HTML validation rules */}

                <label htmlFor="">
                    <input className="w-100" {...register("name", { required: true })} placeholder="Service Title" />
                    {errors.name && <span className="text-danger">Name field is required</span>}
                </label>

                <label htmlFor="">
                    <input className="w-100" {...register("price", { required: true })} placeholder="Service Price" />
                    {errors.price && <span className="text-danger">Price field is required</span>}
                </label>
                <label htmlFor="">
                    <textarea className="w-100" {...register("description", { required: true })} placeholder="Description" />
                    {errors.description && <span className="text-danger">Description field is required</span>}
                </label>
                <label htmlFor="">
                    <input className="w-100" {...register("img", { required: true })} placeholder="Photo URL" />
                    {errors.img && <span className="text-danger">Image field is required</span>}
                </label>

                {/* errors will return when field validation fails  */}

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;
