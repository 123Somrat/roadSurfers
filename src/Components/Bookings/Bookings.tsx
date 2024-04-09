import { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
export default function Bookings() {

    // hold user selected date
    const [selectedDate, setSelectedDate] = useState<Date>();
    
    // create handleDateClick function for getting user clicked date
    const handleDateClick = (date: Date) => {
         // set date on selected date state
         setSelectedDate(date)
      };

      

  return (
    <div className="flex justify-center ">
      <Calendar 
      nextLabel="next" 
      prevLabel="prev" 
      showWeekNumbers 
      onClickDay={handleDateClick}
      />
    </div>
  );
}