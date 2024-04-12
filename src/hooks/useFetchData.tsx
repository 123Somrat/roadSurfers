import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";

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
