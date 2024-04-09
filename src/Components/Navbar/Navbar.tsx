import Logo from "../Logo/Logo";
import StationDropDown from "../StationDropDown/StationDropDown";


export default function Navbar() {
  return (
    <div className="flex justify-between p-2 bg-[#7bdcb5]">
       <Logo/>
       <StationDropDown/>
    </div>
  )
}
