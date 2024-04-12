import { useContext, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import Logo from "../Logo/Logo";
import StationDropDown from "../StationDropDown/StationDropDown";

import { StationContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  // Fetching all stations
  const stations = useFetchData("/api/stations");
  const navigate = useNavigate()

  // hold the selected station
  const [station, setSelectedStation] = useState<string>("Berlin");

  // Useing StationContext to set the selected station
  const { setSelectedStationn } = useContext(StationContext);
  // create handleer function for collect selected station name
  const handleStation = (name: string) => {
    // set Current selected station name in state
    setSelectedStation(name);

    // set Current selected station name in context
    setSelectedStationn(name);

    navigate('/')
  };

  return (
    <div>
      <div className="flex justify-between p-2 bg-[#7bdcb5]">
        <Logo />
        <StationDropDown
          stations={stations}
          handleStation={handleStation}
          station={station}
        />
      </div>
    </div>
  );
}

//stations={stations} selectedStation={station}

//  {station && <Bookings  />}
