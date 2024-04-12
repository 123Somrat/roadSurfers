import {useState} from 'react'
import  {StationContext} from '../Context/Context'

type Props ={
    children:React.ReactNode
}
 // AuthContext data type
 interface StationContextType {
    selectedStation: string | undefined;
    setSelectedStationn: React.Dispatch<React.SetStateAction<string | undefined>>;
  }


export default function StationNameProvider({children}:Props) {
    const [selectedStation, setSelectedStationn] = useState<string | undefined>('Berlin');

    const stationContextValue: StationContextType = {
        selectedStation,
        setSelectedStationn,
      
      };

return(
   
<StationContext.Provider value={stationContextValue}>
      {children}
   </ StationContext.Provider>
)
   
}
