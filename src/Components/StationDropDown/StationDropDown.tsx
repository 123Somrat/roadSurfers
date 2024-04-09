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
  stations?: Station[];
}

export default function StationDropDown({ stations }: StationDropDownProps) {
  return (
    <div>
      <Dropdown label="Choose station" color="white">
        {stations &&
          stations?.map((station) => (
            <Dropdown.Item key={station.id}>{station.name}</Dropdown.Item>
          ))}
      </Dropdown>
    </div>
  );
}
