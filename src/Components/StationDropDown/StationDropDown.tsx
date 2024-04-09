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

  // create handleer function for collect selected station name
  const handleStation = (name:string)=>{
     console.log(name)
}



  return (
    <div>
      <Dropdown label="Choose station" color="white">
        {stations &&
          stations?.map((station) => (
            <Dropdown.Item 
            key={station.id}
            onClick={()=>handleStation(station.name)}
            >{station.name}</Dropdown.Item>
          ))}
      </Dropdown>
    </div>
  );
}
