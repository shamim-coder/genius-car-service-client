import { useEffect } from "react";
import { useState } from "react";
const axios = require("axios").default;

const useToken = (user) => {
    const [token, setToken] = useState("");

    useEffect(() => {
        const getToken = async () => {
            const email = user?.user?.email;
            if (email) {
                const { data } = await axios.post("https://infinite-peak-68633.herokuapp.com/getToken", { email });
                setToken(data);
                localStorage.setItem("accessToken", data.accessToken);
            }
        };
        getToken();
    }, [user]);

    return { token, setToken };
};
export default useToken;
