import { useEffect, useState } from "react";
import api from "../api/api";

// define Booking data types
interface Booking {
  id: string;
  pickupReturnStationId: string;
  customerName: string;
  startDate: string;
  endDate: string;
}

// define Api response data types
interface Station {
  id: string;
  name: string;
  bookings: Booking[];
}

export default function useFetchData(url: string) {
  // for hold fetched data which is we got from api response
  const [data, setData] = useState<Station[] | []>();
  // const [loading , setLoading]= useState(true)
  // const [error , setError]= useState<unknown>(null)
  //  useEffect for  side Effect like data fetching
  useEffect(() => {
    // create async Data Fetcher function
    const fetchingData = async () => {
      try {
        const response = await api.get(url);
        const data = await response.data;

        if (data) {
          setData(data);
          //setLoading(false)
        }
      } catch (error: unknown) {
        // setError(error);
      }
    };

    // call data fetcher function
    fetchingData();

    // useEffect cleanUp function
    return () => {
      console.log("Cleanup: Component unmounted.");
    };
  }, []);

  console.log("i am fro useFetchm", data);

  return data;
}
