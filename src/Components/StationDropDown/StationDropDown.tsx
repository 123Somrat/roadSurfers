
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
  stations?: Station;
 

}

export default function StationDropDown({stations}:StationDropDownProps) {
  console.log(stations)
  return (
    <div>
        <h1>Choose Station</h1>
    </div>
  )
}
