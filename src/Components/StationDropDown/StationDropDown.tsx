import { Dropdown } from "flowbite-react";

interface Booking {
  id: string;
  pickupReturnStationId: string;
  customerName: string;
  startDate: string;
  endDate: string;
}

// define stations data types
interface Station {
  id: string;
  name: string;
  bookings: Booking[];
}

// Define Props data types
interface StationDropDownProps {
  stations?:Station[];
  handleStation: (stationName: string) => void;
  station: string;
}

export default function StationDropDown({
  stations,
  handleStation,
  station,
}: StationDropDownProps) {



  return (
    <div>
      <Dropdown 
      label={station ? station : "Choose station"}
      color="white">
        {stations &&
          stations?.map((station) => (
            <Dropdown.Item
              key={station.id}
              onClick={() => handleStation(station.name)}
            >
              {station.name}
            </Dropdown.Item>
          ))}
      </Dropdown>
    </div>
  );
}
