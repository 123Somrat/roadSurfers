import { useEffect } from "react";
import api from "../api/api";


export default function useFetchData(url:string) {

    //  useEffect for  side Effect like data fetching
    useEffect(()=>{
         
    // create async Data Fetcher function
     const fetchingData =async ()=>{
         try{   
            const response = await api.get(url)
            const data = await response.data

         }catch(error){
             
            console.log(error)

         }
        



     }

      // call data fetcher function
      fetchingData()

    },[])
}
