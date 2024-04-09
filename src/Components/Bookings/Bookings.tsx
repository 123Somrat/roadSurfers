import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
export default function Bookings() {
  return (
    <div className="flex justify-center ">
      <Calendar nextLabel="next" prevLabel="prev" showWeekNumbers />
    </div>
  );
}