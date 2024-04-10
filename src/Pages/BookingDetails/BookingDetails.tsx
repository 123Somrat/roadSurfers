import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import {  differenceInDays, format,} from 'date-fns';
export default function BookingDetails() {
   // Useing useParam hooks for getting dynamic params from url
   // destructure stationId and booking_id from Params object
   const { stationId , booking_id} =  useParams(); 

    // Fething Bookings data depends on station and booking id
    const booking = useFetchData(`/stations/${stationId}/bookings/${booking_id}`)
    
    console.log(booking)
    const startdate = booking?.startDate
    const endDate = booking?.endDate

    const duration = differenceInDays(endDate,startdate)

  return (
    <div>
         <h1>Hi i am booking Deatils page</h1>
    </div>
  )
}
