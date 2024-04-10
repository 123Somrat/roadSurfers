import { useNavigate, useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import {  differenceInDays, format,} from 'date-fns';
import Navbar from "../../Components/Navbar/Navbar";
export default function BookingDetails() {

    // import useNavigate hook from react router dom to redirect user to home 
     const navigate = useNavigate()

   // Useing useParam hooks for getting dynamic params from url
   // destructure stationId and booking_id from Params object
   const { stationId , booking_id} =  useParams(); 
 
    // Fething Bookings data depends on station and booking id
    const booking = useFetchData(`/stations/${stationId}/bookings/${booking_id}`)
    
    const stationNames = ["Berlin",'Munich','Frankfurt',"Lisbon",'Barcelona','Lyon']
    const stationName = stationNames[stationId-1]
    // Customer name
    const customerName = booking?.customerName

    // getting startDate fron booking
    const startdate = booking?.startDate
    // getting endDate from booking
    const endDate = booking?.endDate
    // calculate total trip duration depends on startDate and endDate
    const bookingDuration = differenceInDays(endDate,startdate)
    
    // formatting the startDate
    const bookingStartDate = format(new Date(startdate ? startdate : '2020-05-06T17:02:22.932Z'), "yyyy-MM-dd");
    
   
   // Create handleRedirectHome function for redierctuser to home

   const handleRedirectHome = ()=>{
          // navigate user to home route
          navigate('/') 
   }



  return (
   
    <div className='w-full lg:p-2 '>
        
    <div className='w-3/3 md:w-2/3 h-64 mx-auto p-4 flex justify-around border-2 border-green-300 '>
     <div >
           <h1 className=" font-medium p-2 ">GuestName : </h1>
       
           <h1 className="font-medium p-2">Station : </h1>
           
           <h1 className="font-medium p-2">BookingDate : </h1>
           
           <h1 className="font-medium p-2 mb-2">BookingDuration : </h1>
            <button className=" md:ml-[6px] bg-emerald-400 hover:bg-emerald-500 p-2 rounded-sm text-white" onClick={handleRedirectHome}>back to home</button>
        </div>
          <div>
          <p className="p-2">{customerName}</p>
          <p className="p-2">{stationName}</p>
          <p className="p-2">{bookingStartDate}</p>
          <p className="p-2">{bookingDuration} Days</p>
          </div>
          
        </div>
        
  </div>
 

  )
}
