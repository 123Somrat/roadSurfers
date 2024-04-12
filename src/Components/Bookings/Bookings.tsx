import { useState, useContext } from "react";
import { Calendar } from "react-calendar";
import { Button, Modal } from "flowbite-react";
import { format } from "date-fns";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
import { StationContext } from "../../Context/Context";
import useFetchData from "../../hooks/useFetchData";

export default function Bookings() {
  // hold user selected date
  const [selectedDate, setSelectedDate] = useState<Date>();
  const { selectedStation } = useContext(StationContext);
  console.log(selectedStation);
  const stations = useFetchData("/api/stations");

  //hold Current week
  const [currentWeek, setCurrentWeek] = useState<Date>(
    new Date("2020-05-01T15:43:54.055Z")
  );

  // Toggle Modal
  const [openModal, setOpenModal] = useState(false);

  // find the selected station data from Stations
  const choosenStationBookings = stations?.find(
    (station) => station.name === selectedStation
  );

  const bookings = choosenStationBookings?.bookings;
  // create handleDateClick function for getting user clicked date
  const handleDateClick = (date: Date) => {
    // set date on selected date state
    setSelectedDate(date);
  };

  // Create handleWeekChange for tracking week
  const handleWeekChange = (date: any) => {
    // set the current week in state
    setCurrentWeek(date);
    // change the state value for open modal
    setOpenModal(true);
  };

  // Closed the modal when clicked on details button
  const handleCloseModal = () => {
    // Set false in state to close the modal when clicked on details button
    setOpenModal(false);
  };

  // Format the booking startdate and then retun the formatted date array
  const getBookingsForDate = (date: Date) => {
    const formattedDate = format(date, "yyyy-MM-dd");

    const bookingsForDate =
      bookings?.filter(
        (booking) => format(booking.startDate, "yyyy-MM-dd") === formattedDate
      ) || [];
    return bookingsForDate;
  };

  // showing booked string where booking is exeist
  const renderTileContent = ({ date }: any) => {
    const bookingsForDate = getBookingsForDate(date);
    return bookingsForDate?.length === 0 ? null : (
      <div className="text-emerald-500 text-xs">Booked</div>
    );
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
        className={
          "w-full md:w-[50%] h-[50%]  top-[50%] left-[50%] right-[auto], bottom-[auto]"
        }
      />

      {/*Showing bookings in MOdal respective on Date */}
      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        className="md:h-[500px] lg:h-full"
      >
        <Modal.Header>
          Bookings for {selectedDate && format(selectedDate, "dd/MM/yyyy")}
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            {selectedDate &&
              getBookingsForDate(selectedDate)?.map((booking, index) => (
                <div className="flex justify-between" key={booking.id}>
                  <li key={booking.id} className="list-none">
                    <span className="font-bold">{index + 1} . </span>{" "}
                    {booking.customerName}
                  </li>
                  <Link
                    to={`/stations/${choosenStationBookings?.id}/bookings/${booking.id}`}
                  >
                    <button
                      onClick={handleCloseModal}
                      className="text-white bg-emerald-400 hover:bg-emerald-500 p-[3px] w-16 rounded-sm"
                    >
                      Details
                    </button>
                  </Link>
                </div>
              ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="bg-emerald-400 text-white  hover:bg-emerald-500"
            onClick={() => setOpenModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
