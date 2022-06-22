import { useEffect, useState } from "react";

const useServiceDetails = (serviceId) => {
    const [service, setService] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = `https://infinite-peak-68633.herokuapp.com/service/${serviceId}`;

        if (serviceId) {
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    setService(data);
                    setLoading(false);
                });
        }
    }, [serviceId]);

    return { service, setService, loading };
};

export default useServiceDetails;
