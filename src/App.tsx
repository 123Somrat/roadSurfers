import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layouts from "./LayOuts/Layouts";
import "./index.css";
import BookingDetails from "./Pages/BookingDetails/BookingDetails";
import Bookings from "./Components/Bookings/Bookings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route path="/" element={<Bookings />} />
          <Route
            path="/stations/:stationId/bookings/:booking_id"
            element={<BookingDetails />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//
