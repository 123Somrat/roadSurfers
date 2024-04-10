import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import {  differenceInDays, format,} from 'date-fns';
export default function BookingDetails() {
   // Useing useParam hooks for getting dynamic params from url
   // destructure stationId and booking_id from Params object
   const { stationId , booking_id} =  useParams(); 

    // Fething Bookings data depends on station and booking id
    const booking = useFetchData(`/stations/${stationId}/bookings/${booking_id}`)
    
    
     
    // Customer name
    const customerName = booking?.customerName

    // getting startDate fron booking
    const startdate = booking?.startDate
    // getting endDate from booking
    const endDate = booking?.endDate
    // calculate total trip duration depends on startDate and endDate
    const duration = differenceInDays(endDate,startdate)
    
    // formatting the startDate
    const bookingStartDate = format(new Date(startdate ? startdate : '2020-05-06T17:02:22.932Z'), "yyyy-MM-dd");
    
   
  return (
    <div>
         <h1>Hi i am booking Deatils page</h1>
    </div>
  )
}
