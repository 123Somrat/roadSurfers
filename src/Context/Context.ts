import { createContext } from "react";

//Initial state Data type
const initialState = {
  selectedStation: "Berlin",
  setSelectedStationn: () => {},
};

// AuthContext data type
interface StationContextType {
  selectedStation: string | undefined;
  setSelectedStationn: React.Dispatch<React.SetStateAction<string | undefined>>;
}

// Create StationContext
const StationContext = createContext<StationContextType>(initialState);

export { StationContext };
