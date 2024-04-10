import { useParams } from "react-router-dom";

export default function BookingDetails() {
   // Useing useParam hooks for getting dynamic params from url
   // destructure stationId and booking_id from Params object
   const { stationId , booking_id} =  useParams(); 

  return (
    <div>
         <h1>Hi i am booking Deatils page</h1>
    </div>
  )
}
