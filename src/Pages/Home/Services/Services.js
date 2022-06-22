import useServices from "../../../Hooks/useServices";
import Loading from "../../Shared/Loading/Loading";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
    const { services, loading } = useServices();

    return (
        <div id="services" className="container">
            <div className="row">
                <h1 className="text-primary text-center mt-5"> Our Services</h1>
                <div className="services-container">{loading ? <Loading /> : services.map((service) => <Service key={service._id} service={service}></Service>)}</div>
            </div>
        </div>
    );
};

export default Services;
