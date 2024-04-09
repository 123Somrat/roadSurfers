import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
export default function Bookings() {


    // create handleDateClick function for getting user clicked date
    const handleDateClick = (date: Date) => {
         console.log(date)
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