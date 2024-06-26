import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";

// define Booking data types
interface Booking {
  id?: string;
  pickupReturnStationId?: string;
  customerName?: string;
  startDate?: string;
  endDate?: string;
}

// define Api response data types

export default function useFetchBooking(url: string) {
  // for hold fetched data which is we got from api response
  const [data, setData] = useState<Booking>();
  // const [loading , setLoading]= useState(true)
  // const [error , setError]= useState<unknown>(null)
  //  useEffect for  side Effect like data fetching

  useEffect(() => {
    // create async Data Fetcher function
    const fetchingData = async () => {
      try {
        const data = await fetchData(url);
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

  return data;
}
