
import useFetchData from "../../hooks/useFetchData";
import Logo from "../Logo/Logo";
import StationDropDown from "../StationDropDown/StationDropDown";


export default function Navbar() {

     // Fetching all stations
    const stations = useFetchData("/stations");
   


 


  return (
    <div className="flex justify-between p-2 bg-[#7bdcb5]">
       <Logo/>
       <StationDropDown stations={stations} />
    </div>
  )
}
