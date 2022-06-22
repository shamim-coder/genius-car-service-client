import { useEffect, useState } from "react";

const useServiceDetails = (serviceId) => {
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `https://infinite-peak-68633.herokuapp.com/service/${serviceId}`;

        if (serviceId) {
            fetch(url)
                .then((res) => res.json())
                .then((data) => setService(data));
        }
    }, [serviceId]);

    return { service, setService };
};

export default useServiceDetails;
