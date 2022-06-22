import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../api/axiosPrivate";
import auth from "../firebase.init";

const useOrders = () => {
    const [orders, setOrders] = useState([]);

    const [user] = useAuthState(auth);

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const { data } = await axiosPrivate.get(`https://infinite-peak-68633.herokuapp.com/orders?email=${user?.email}`);

                setOrders(data);

                if (data) {
                    setLoading(false);
                }
            } catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate("/login");
                }
            }
        };
        getOrders();
    }, [navigate, user]);
    return { orders, setOrders, loading };
};

export default useOrders;
