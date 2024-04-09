import { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Bookings() {

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
      
    console.log(selectedDate)



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