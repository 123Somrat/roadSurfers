import { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Button, Modal } from "flowbite-react";
import { format } from 'date-fns';
import { Link } from "react-router-dom";


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
    selectedStation: string;
  }


  

export default function Bookings({stations , selectedStation}:StationDropDownProps) {

    // hold user selected date
    const [selectedDate, setSelectedDate] = useState<Date>();

    //hold Current week
    const [currentWeek, setCurrentWeek] = useState<Date>(new Date("2020-05-01T15:43:54.055Z"));

    // Toggle Modal
    const [openModal, setOpenModal] = useState(false);

   // find the selected station data from Stations
   const choosenStationBookings = stations?.find(station=>station.name===selectedStation)

    // create handleDateClick function for getting user clicked date
    const handleDateClick = (date: Date) => {
         // set date on selected date state
         setSelectedDate(date)
      };

      // Create handleWeekChange for tracking week 
      const handleWeekChange = (date:any) =>{
         // set the current week in state
          setCurrentWeek(date)
         // change the state value for open modal
          setOpenModal(true)
        
      };

// Custome style for React calender
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '40%',
      height: '40%'
    },
  
  };


      
      // Format the booking startdate and then retun the formatted date array
      const getBookingsForDate = (date:Date) => {
        const formattedDate = format(date, 'yyyy-MM-dd');
        return choosenStationBookings?.bookings.filter((booking) => format(booking.startDate, 'yyyy-MM-dd' ) === formattedDate);
      };

      const renderTileContent = ({ date }) => {
        const bookingsForDate = getBookingsForDate(date);
        return bookingsForDate?.length > 0 ? <div className="text-emerald-500">Booked</div> : null;
      };




  return (
    <div className="flex justify-center ">
      <Calendar 
      nextLabel="next" 
      prevLabel="prev" 
      showWeekNumbers 
      value={currentWeek}
      onClickDay={handleDateClick}
      onChange={handleWeekChange}
      tileContent={renderTileContent}
      className={'w-[50%] h-[50%]  top-[50%] left-[50%] right-[auto], bottom-[auto]'}
      />

{/*Showing bookings in MOdal respective on Date */}
<Modal show={openModal} onClose={() => setOpenModal(false)} className="md:h-[500px] lg:h-full">
        <Modal.Header>Bookings for {selectedDate && format(selectedDate, 'dd/MM/yyyy')}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
          {selectedDate &&
              getBookingsForDate(selectedDate)?.map((booking,index) => (
               <div className="flex justify-between" key={booking.id}>
                   <li key={booking.id} className="list-none"><span className="font-bold">{index+1} .  </span>  {booking.customerName}</li>
                  <Link to={`/stations/${choosenStationBookings?.id}/bookings/${booking.id}`}><button className="text-white bg-emerald-400 hover:bg-emerald-500 p-[3px] w-16 rounded-sm">Details</button></Link> 
               </div>   
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="bg-emerald-500 text-white " onClick={() => setOpenModal(false)}>Close</Button>
        
        </Modal.Footer>
      </Modal>
     
 



    </div>
  );
}