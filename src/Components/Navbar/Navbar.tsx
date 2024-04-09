import { useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import Logo from "../Logo/Logo";
import StationDropDown from "../StationDropDown/StationDropDown";
import Bookings from "../Bookings/Bookings";


export default function Navbar() {

     // Fetching all stations
    const stations = useFetchData("/stations");

   // hold the selected station
  const [station,setSelectedStation] = useState<string>('')

 // create handleer function for collect selected station name
 const handleStation = (name:string)=>{
  // set Current selected station name in state
   setSelectedStation(name)
}
 


  return (
    <div >
    <div className="flex justify-between p-2 bg-[#7bdcb5]">
        <Logo />
       <StationDropDown stations={stations} handleStation={handleStation} station={station}/>
    </div>
     {station && <Bookings stations={stations} station={station}/>} 
  </div>
  )
}
