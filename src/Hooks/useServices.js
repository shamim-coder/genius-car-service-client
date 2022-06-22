import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://infinite-peak-68633.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => {
                setServices(data);
                setLoading(false);
            });
    }, []);

    return { services, setServices, loading };
};

export default useServices;
