import Barbers from "./Barbers";
import Serviceprice from "./Serviceprice";
import Servicerequest from "./Servicerequest";

export default function Service() {
  return (
    <div className="service-container">
      <Servicerequest />
      <Serviceprice />
      <Barbers />
    </div>
  );
}
