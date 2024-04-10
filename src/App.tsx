import { Routes, Route } from "react-router-dom";
import Layouts from "./LayOuts/Layouts";
import "../src/index.css";
import BookingDetails from "./Pages/BookingDetails/BookingDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route
            path="/stations/:stationId/bookings/:booking_id"
            element={<BookingDetails/>}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
