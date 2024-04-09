import { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";


interface Booking {
    id: string;
    pickupReturnStationId: string;
    customerName: string;
    startDate: string;
    endDate: string;
  }
  
  // define stations data types
  interface Station {
    id: string;
    name: string;
    bookings: Booking[];
  }
  
  // Define Props data types
  interface StationDropDownProps {
    stations?: Station[];
    station: string;
  }


export default function Bookings({stations , station}:StationDropDownProps) {

    // hold user selected date
    const [selectedDate, setSelectedDate] = useState<Date>();

    //hold Current week
    const [currentWeek, setCurrentWeek] = useState<Date>(new Date("2020-05-01T15:43:54.055Z"));

    // create handleDateClick function for getting user clicked date
    const handleDateClick = (date: Date) => {
         // set date on selected date state
         setSelectedDate(date)
      };

      // Create handleWeekChange for tracking week 
      const handleWeekChange = (date:any) =>{
         // set the current week in state
          setCurrentWeek(date)
        
      };
      
    console.log(selectedDate,stations,station)



  return (
    <div className="flex justify-center ">
      <Calendar 
      nextLabel="next" 
      prevLabel="prev" 
      showWeekNumbers 
      value={currentWeek}
      onClickDay={handleDateClick}
      onChange={handleWeekChange}
      />


     
 



    </div>
  );
}